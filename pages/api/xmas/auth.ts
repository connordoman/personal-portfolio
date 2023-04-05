/*
 * Created on Sat Dec 17 2022
 * Copyright (c) 2022 Connor Doman
 */

import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

import { DB_CONFIG, XmasDatabase } from "../../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";

export const login = async (username: string, password: string) => {
    const database = new XmasDatabase();

    const salt = await database.getSalt(username);

    const derivedKey = crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512");

    if (!derivedKey) throw new Error("Error deriving key");
    // console.log(`Derived key: ${derivedKey.toString("hex")}`);

    const [rows] = await database.query("SELECT * FROM user WHERE username = ? AND password = ?;", [
        username,
        password,
    ]);
    const result: any = rows;

    // console.log("Login SQL result: " + JSON.stringify(result, null, 4));

    return result;
};

export const register = async (username: string, password: string) => {
    const database = new XmasDatabase();

    const salt = await database.getSalt(username);

    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
        if (err) throw err;
        // console.log(`Derived key: ${derivedKey.toString("hex")}`);
    });

    const [rows] = await database.query("INSERT INTO user (username, password) VALUES (?, ?);", [username, password]);
    const result: any = rows;

    // console.log("Register SQL result: " + JSON.stringify(result, null, 4));

    return result;
};

export const auth = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        res.status(405).send({ error: "Method not allowed" });
        return;
    }

    const { username, password } = req.body;

    try {
        const result = await login(username, password);

        if (result.length > 0) {
            res.status(200).json({ success: "Successfully logged in" });
        } else {
            res.status(401).json({ error: "Invalid username or password" });
        }
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({ error: "Error logging in: " + err.message });
    }
};

export default auth;
