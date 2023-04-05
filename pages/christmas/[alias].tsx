/*
 * Created on Tue Dec 13 2022
 * Copyright (c) 2022 Connor Doman
 */
import { server } from "../../utils/config";
import { LoadingScreen } from "../../components/Loading";
import { Page } from "../../components/xmas/Page";
import { DB_CONFIG, XmasDatabase } from "../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";
import Snowfall from "react-snowfall";
import YouTubeEmbed from "../../components/xmas/YouTubeEmbed";
import Image from "next/image";
import Head from "next/head";
import ChristmasText from "../../components/xmas/ChristmasText";
import { HollySeparator, ChristmasTree } from "../../components/xmas/Separator";

interface XmasRecipient {
    firstName: string;
    lastName: string;
    alias: string;
    nickname: string;
    email: string;
    xmasYear: string;
    videoURL: string;
    imageURL: string;
    message: string;
}

interface XmasGiftProps {
    alias: string;
    recipient: XmasRecipient;
}

const DEFAULT_RECIPIENT = {
    firstName: "Connor",
    lastName: "Doman",
    alias: "connor",
    nickname: "Connor",
    email: "connor@bonnor.com",
    xmasYear: "2022",
    videoURL: "",
    imageURL: "",
    message: "This is a test message.",
};

export const XmasGift = ({ alias, recipient }: XmasGiftProps) => {
    if (!recipient) {
        recipient = DEFAULT_RECIPIENT;
    }
    let xmasMessage = alias === "tracy" ? "Happy Birthday, " : "Merry Christmas, ";
    let headerSize = alias === "mama" ? "text-7xl" : "text-5xl";
    let textSize = alias === "mama" ? "text-3xl" : "text-xl";

    return (
        <>
            <Snowfall style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }} color={"#bfe1ff"} />
            <LoadingScreen>
                <Head>
                    <title>{`${xmasMessage}${recipient.firstName}!`}</title>
                </Head>
                <Page>
                    {/* <h1 className="text-5xl my-8">🎅🏼</h1> */}
                    <ChristmasTree />
                    <ChristmasText
                        text="2022"
                        speed_ms={1000}
                        className={`${headerSize} text-center font-bold mb-8 mx-4`}
                    />
                    <HollySeparator />
                    {alias === "zaynb" ? (
                        <ChristmasText
                            text={`Merry Christmas, %!`}
                            speed_ms={1000}
                            className={`${headerSize} text-center font-bold my-8 mx-4`}
                            substitutions={[recipient.nickname]}
                        />
                    ) : (
                        <ChristmasText
                            text={`${xmasMessage}${recipient.nickname}!`}
                            speed_ms={1000}
                            className={`${headerSize} text-center font-bold my-8 mx-4`}
                        />
                    )}
                    {/* <h1 className="text-5xl text-center font-bold my-8 mx-4">Merry Christmas, {recipient.nickname}!</h1> */}
                    <HollySeparator />
                    <div className={`w-full my-8 px-4 md:w-3/4 ${textSize}`}>
                        <p className="indent-8">{recipient.message}</p>
                        <p className="indent-8">
                            <em>Love, Connor</em>
                        </p>
                    </div>
                    {recipient.videoURL ? (
                        <div className="w-full md:w-3/4 px-4 my-8">
                            <p className={`${textSize} font-bold text-center my-4`}>
                                This video reminded me of you this year:
                            </p>
                            <YouTubeEmbed embedId={recipient.videoURL.split("=")[1]} />
                        </div>
                    ) : null}
                    {recipient.imageURL ? (
                        <div className="w-full md:w-3/4 px-4 my-8">
                            <p className={`${textSize} font-bold text-center my-4`}>
                                This picture reminded me of you this year:
                            </p>
                            <div className="relative w-full h-min flex flex-col justify-center items-center">
                                <Image
                                    src={recipient.imageURL}
                                    alt="Image that reminds me of you"
                                    width={512}
                                    height={512}
                                />
                            </div>
                        </div>
                    ) : null}
                    {/* <p>{JSON.stringify(recipient, null, 4)}</p> */}
                </Page>
            </LoadingScreen>
        </>
    );
};

// const db = new XmasDatabase();

// export const getStaticPaths = async () => {
//     let getRecipientsURL = `${server}/api/xmas/getrecipients`;
//     console.log("Fetching from " + getRecipientsURL);
//     let response = await fetch(getRecipientsURL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });

//     let body = await response.json();

//     const { error } = body;

//     if (error) {
//         console.log(error);
//         return {
//             paths: [],
//             fallback: false,
//         };
//     }

//     let { paths } = body;

//     return {
//         paths,
//         fallback: false,
//     };
// };

// export const getStaticProps = async (context: any) => {
//     if (!context.params) {
//         return {
//             props: {},
//         };
//     }

//     let db = new XmasDatabase();
//     let recipient = await db.getRecipientAndGift(context.params.alias, 2022);

//     return { props: { alias: context.params.alias, recipient } };
// };

export default XmasGift;
