/*
 * Created on Sat Feb 04 2023
 * Copyright (c) 2023 Connor Doman
 */

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Content from "../../components/Content";
import { CupTriangle } from "../../components/games/pong/CupGraphics";
import TextColumn from "../../components/TextColumn";

const PONG_RULES = [
    "6 CUPS, 2 PARTNERS, 2 THROWS PER TURN",
    "EYE-TO-EYE FOR PLAY ORDER",
    "BALLS ARE LIVE UNTIL THEY TOUCH SOMETHING OTHER THAN THE TABLE, CUPS (BUT NOT WATER), OR OTHER PLAYERS",
    "A LIVE BALL CAN BE GRABBED FOR A TRICKSHOT",
    "BOTH PLAYERS MAY THROW FOR REDEMPTION. IF THE OTHER TEAM'S PLAYERS BOTH SINK YOUR CUP, YOUR TEAM MUST LAND 2 REDEMPTION SHOTS",
    "A BALL IN A CUP THAT IS NOT IN PLAY MEANS EVERYONE DRINKS",
    "A TRICKSHOT HAS TO BE HARDER THAN SWITCHING HANDS",
    "ISLAND MUST BE CALLED BEFORE A THROW IS MADE. EACH PLAYER GETS 1 ISLAND PER MATCH. LANDING AN ISLAND IS THAT CUP PLUS 1 MORE",
    "THE SAME CUP TWICE IS EXPLOSION. ALL TOUCHING CUPS ARE REMOVED",
    "EACH PLAYER GETS ONE REARRANGE PER MATCH. REARRANGES CAN'T BE CLOSER THAN THE 6 CUP TRIANGLE",
    "ONE CELEBRITY SHOT PER TEAM PER MATCH",
    "BALLS CAN BE BLOWN OR FINGERED BUT CANNOT BE WET (SORRY LADIES)",
];

const CUP_SIZE = 64;

export const PongRules = () => {
    const ruleListItems = PONG_RULES.map((rule, index) => {
        return (
            <li key={index} className="my-4 mx-2 text-2xl print:text-sm font-semibold">
                {index + 1}. {rule}
            </li>
        );
    });

    return (
        <>
            {" "}
            <Head>
                <title>Pong Rules</title>
                <meta name="description" content="Websites and media services by Connor Doman" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
                <span className="flex flex-row justify-between items-center">
                    <Image
                        src="/img/games/solo-cup.png"
                        alt="red solo cup"
                        height={CUP_SIZE}
                        width={CUP_SIZE}
                        className="m-4 rotate-12"
                    />
                    <p className="my-8 text-5xl font-bold text-center">PONG RULES</p>
                    <Image
                        src="/img/games/solo-cup.png"
                        alt="red solo cup"
                        height={CUP_SIZE}
                        width={CUP_SIZE}
                        className="m-4 rotate-[-12deg]"
                    />
                </span>
                <div className="flex flex-col justify-center items-center w-11/12 pb-10">
                    <hr className="dark:border-white mx-auto w-full mb-4" />
                    <ol className="list-none flex flex-col items-start justify-center">{ruleListItems}</ol>
                    <div className="print:hidden w-full text-center">
                        <hr className="dark:border-white mx-auto w-full my-4" />
                        <p className="my-4">Happy Birthday Ivan! 🥳🎉</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PongRules;
