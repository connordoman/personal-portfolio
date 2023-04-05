/*
 * Created on Sun Dec 18 2022
 * Copyright (c) 2022 Connor Doman
 */

import { DB_CONFIG, XmasDatabase } from "../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";
import Link from "next/link";
import ChristmasText from "../../components/xmas/ChristmasText";

interface Props {
    recipients?: [{ alias: string }];
}

export const ChristmasList = ({ recipients }: Props) => {
    let i = 0;
    const recipientLinks = recipients?.map((recipient) => {
        return (
            <li
                key={recipient.alias}
                className={`${i++ % 2 == 0 ? "text-emerald-600" : "text-red-600"} text-xl my-2 hover:underline`}>
                <Link href={`/christmas/${recipient.alias}`}>{recipient.alias}</Link>
            </li>
        );
    });

    return (
        <div className="flex flex-col items-center justify-start">
            <ChristmasText text="Christmas List" speed_ms={1000} className="text-4xl font-semibold my-8" />
            <ul>{recipientLinks}</ul>
        </div>
    );
};

export const getStaticProps = async () => {
    const db = new XmasDatabase();
    const recipients = await db.getRecipientsWithGifts(2022);

    return {
        props: {
            recipients,
        },
    };
};

export default ChristmasList;
