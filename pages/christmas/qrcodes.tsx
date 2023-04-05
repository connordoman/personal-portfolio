/*
 * Created on Sun Dec 18 2022
 * Copyright (c) 2022 Connor Doman
 */

import { DB_CONFIG, XmasDatabase } from "../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";

import Image from "next/image";
import { ChristmasTree } from "../../components/xmas/Separator";
import ChristmasText from "../../components/xmas/ChristmasText";

interface Props {
    aliases?: [{ alias: string }];
}

export const QRCodes = ({ aliases }: Props) => {
    let qrCodes = aliases?.map((row) => {
        return (
            <div
                key={row.alias}
                className="flex flex-col items-center justify-center h-full print:h-[50vh] print:basis-1/2 basis-full text-center border-gray-500 print:border border-dashed">
                <ChristmasText text="Merry Christmas!" speed_ms={1000} className="text-4xl font-semibold" />
                <br />
                <p className="text-xl font-semibold">From Connor</p>
                <ChristmasTree />
                <Image
                    src={`/img/xmas2022/qr_codes/qr_code_${row.alias}.png`}
                    alt={`QR code for ${row.alias}`}
                    width="128"
                    height="128"
                />
                <p className="text-xl">{row.alias}</p>
            </div>
        );
    });

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-row justify-center items-center flex-wrap">{qrCodes}</div>
        </div>
    );
};

export const getStaticProps = async () => {
    const db = new XmasDatabase();
    const aliases = await db.getAliases();

    // console.log(`Aliases: ${JSON.stringify(aliases, null, 4)}`);
    return {
        props: {
            aliases,
        },
    };
};

export default QRCodes;
