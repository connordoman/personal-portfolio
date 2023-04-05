/*
 * Created on Sun Dec 18 2022
 * Copyright (c) 2022 Connor Doman
 */
import { NextApiRequest, NextApiResponse } from "next";
import { DB_CONFIG, XmasDatabase } from "../../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";

export const createRecipient = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).send({ error: "Method not allowed" });
    }

    const { alias, firstName, lastName, nickname } = req.body;

    // console.log(`Creating user: ${JSON.stringify(req.body, null, 2)}`);

    const db = new XmasDatabase();
    const user = {
        alias,
        firstName,
        lastName,
        nickname,
    };
    // console.log(`Created user: ${JSON.stringify(user, null, 4)}`);
    const createdUser = await db.createRecipient(user);

    if (!createdUser) {
        return res.status(401).send({ error: "Error creating user" });
    }

    return res.status(200).json({ message: "Successfully created user", success: true });
};

export default createRecipient;
