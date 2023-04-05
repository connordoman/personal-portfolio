/*
 * Created on Thu Dec 15 2022
 * Copyright (c) 2022 Connor Doman
 */
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import { DB_CONFIG, XmasDatabase } from "../../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";

export const getRecipients = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("GET RECIPIENTS");
    if (req.method !== "GET") {
        console.log("GET RECIPIENTS BAD METHOD");
        return res.status(405).json({ error: "Method not allowed" });
    }

    let paths: any[] = [];

    try {
        const database = new XmasDatabase();
        const rows: mysql.RowDataPacket[] = await database.getRecipientsWithGifts(2022);

        console.log("Paths SQL result: " + JSON.stringify(rows, null, 4));

        // retrieve the paths we want to pre-render based on gifts

        paths = rows.map((row: mysql.RowDataPacket) => {
            console.log("row: " + row.alias + ", alias: " + row.alias + ", path: /christmas/" + row.alias);
            return {
                params: { alias: row.alias },
            };
        });
    } catch (err: any) {
        console.error(err);
        console.log("GET RECIPIENTS DID NOT WORK");
        return res.status(500).json({ error: "Error retrieving recipients: " + err.message });
    }
    console.log("GET RECIPIENTS WORKED");
    console.log("Paths: " + JSON.stringify(paths, null, 4));
    return res.status(200).json({ paths });
};

export default getRecipients;
