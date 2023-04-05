/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { MessageDatabase, ContactMessage } from "connordoman-ts-db/database.js";
import { getClientIP } from "../../utils/network";

type Data = {
    source?: string;
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    error?: string;
};

const sendMessage = async (res: NextApiResponse, msg: ContactMessage) => {
    try {
        const db: MessageDatabase = new MessageDatabase();

        // if the user's ip has sent a message recently, wait 5 mins

        // if the user's email has sent a message recently, wait 30 mins
        // if the user is allowed to send a message, send it
        const { canSend, waitTime } = await db.canSendMessage(msg.email, msg.ipAddress || "");

        if (waitTime) {
            let minutes = Math.floor(waitTime / 60);
            return res.status(429).json({
                error: `Please wait ${minutes} minute${minutes === 1 ? "s" : ""} before sending another message.`,
            });
        }
        const success = await db.insertMessage(msg);
        if (success) {
            console.log("Message sent successfully");
        }
    } catch (err: any) {
        console.log("Error sending message.");
        return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ message: "Message sent successfully" });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== "POST") {
        res.status(405).send({ error: "Method not allowed" });
        return;
    }

    // recaptcha
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=6LceQ8gjAAAAAA7sgYPhotmHeyjL7y92HY75cDEE&response=${req.body.recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();

    // if recaptcha is valid, continue sending message
    if (recaptchaData.score < 0.5) {
        return res.status(400).send({ error: "Recaptcha requirements not met" });
    }

    // form data
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let messageSubject = req.body.messageSubject;
    let messageText = req.body.messageText;

    if (!firstName || !lastName || !email || !messageSubject || !messageText) {
        console.error("Missing required fields");
        return res.status(400).send({ error: "Missing required fields" });
    }

    let msg: ContactMessage = {
        firstName,
        lastName,
        email,
        messageSubject,
        messageText,
        ipAddress: getClientIP(req),
    };

    let status = sendMessage(res, msg);

    return status;
}
