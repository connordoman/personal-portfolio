/*
 * Created on Sat Dec 17 2022
 * Copyright (c) 2022 Connor Doman
 */
import type { NextApiRequest, NextApiResponse } from "next";
import { DB_CONFIG, XmasDatabase } from "../../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";

export const createGift = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).send({ error: "Method not allowed" });
    }

    // console.log(`Create gift: ${JSON.stringify(req.body, null, 2)}`);
    const { recipientAlias, videoURL, imageURL, message } = req.body;

    try {
        const database = new XmasDatabase();
        let gift = { videoURL, imageURL: imageURL ? "/img/xmas2022/" + imageURL : "", message };

        let result = false;
        let info = "Error creating gift";

        if (await database.hasGift(recipientAlias)) {
            // get existing gift info
            let recipientAndGift = await database.getRecipientAndGift(recipientAlias);
            if (videoURL === "") gift.videoURL = recipientAndGift.videoURL;
            if (imageURL === "") gift.imageURL = recipientAndGift.imageURL;
            if (message === "") gift.message = recipientAndGift.message;

            // push updates
            result = await database.updateGift(recipientAlias, gift, 2022);
            info = `Updated gift for ${recipientAlias}`;
        } else {
            result = await database.createGift(recipientAlias, gift);
            info = `Created gift for ${recipientAlias}`;
        }

        if (result) {
            console.log(`${info}: ${JSON.stringify(gift, null, 2)}`);
        }

        if (!result) {
            return res.status(401).send({ error: info });
        }

        return res.status(200).json({ message: info, success: true });
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({ error: "Error logging in: " + err.message });
    }
};

export default createGift;
