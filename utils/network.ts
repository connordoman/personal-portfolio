/*
 * Created on Mon Jan 09 2023
 * Copyright (c) 2023 Connor Doman
 */

import { NextApiRequest } from "next";

export const getClientIP = (req: NextApiRequest): string => {
    const forwarded = req.headers["x-forwarded-for"];
    console.log("Forwarded: " + JSON.stringify(forwarded, null, 4) + "\nRemote address: " + req.socket.remoteAddress);

    const ipAddress: string = typeof forwarded === "string" ? forwarded.split(",")[0] : req.socket.remoteAddress || "";
    return ipAddress;
};
