/*
 * Created on Mon Feb 13 2023
 * Copyright (c) 2023 Connor Doman
 */
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import styles from "../../styles/ValentinesDay.module.css";
import { useEffect, useState } from "react";
import { TbRefresh } from "react-icons/tb";
import { RecaptchaAltText } from "../../components/GoogleRecaptcha";

const MESSAGE_BODY: React.ReactNode = (
    <div className="indent-4 space-y-2">
        <p>
            For real though I love you so much and I&apos;m so glad I met you. You really are my best friend and
            I&apos;m so grateful that I get to do all these different things with you. Your compassion for others is my
            favorite thing about you and thinking about your smile literally fixes everything.
        </p>
        <p>
            I&apos;m shocked every day at how far we&apos;ve come and how easily we got here. I&apos;ve said it a few
            times but our meet-cute really was what I hoped meeting a girl in university would be like. I remember
            staring at the slides but not seeing a thing because I was thinking about how funny you were and the
            importance of those moments. Asking for your number was the best choice I made last year.
        </p>
        <p>I love you Z.</p>
        <p>- Connor</p>
        <p>
            <strong>p.s.</strong> I wrote this in class because I&apos;m not afraid of what is known colloquially as
            &quot;Scaring Off The Hoes&trade;&quot;.
        </p>
        <p></p>
    </div>
);

const VALENTINES_IMAGES: string[] = [
    "c_and_z_day_1.jpg",
    "z_taxi.jpg",
    "z_stop.jpg",
    "c_and_z_sleeps.jpg",
    "z_new_hair.jpeg",
    "z_and_dogs.png",
    "z_and_z.jpg",
    "z_red.jpg",
];

// courtesy of chat gpt

const VALENTINES_JOKES: {
    [key: string]: string[];
} = {
    meme: [
        "You stole a pizza my heart!",
        "I'm nuts about you!",
        "You make my heart skip a beet!",
        "You're the apple of my eye-dea!",
        "You stole my heart like a thief of tarts!",
        "You're my cup of tea, my sweetie pie!",
        "I love you berry much!",
        "You're the cherry on top of my sundae!",
        "You light up my life like a piece of artichoke!",
        "You make my heart flutter like a butterfly!",
    ],
    funnier: [
        "You stole my heart like a kleptomaniac at a candy store!",
        "I'm in a love trance with you!",
        "You're the beet to my heart, baby!",
        "You're the pi to my heart, not just another irrational number!",
        "You're my cupcake, my sugar and everything sweet!",
        "You're the jelly to my peanut butter, we're just so sweet together!",
        "You have my heart racing like a cheetah, Valentine!",
        "You're the carrot to my stick, motivating me to love even more!",
        "You're the sweetest thing to ever happen to me, like a chocolate fountain!",
        "You make my heart soar like a dove, my love!",
    ],
    sarcastic: [
        "You've got me feeling all hearts and flowers, like I just swallowed a Hallmark store.",
        "I'm just a love-sick puppy for you, how original.",
        "You're the missing piece of my heart, like a jigsaw puzzle made for one.",
        "You make my heart skip a beat, but I think it's just because of the wine.",
        "You're the spice to my life, but let's be real, I just need more salt.",
        "You're my better half, but only because I'm too lazy to be a whole person on my own.",
        "I love you more than words can say, but let's be honest, words are pretty meaningless.",
        "You're the yin to my yang, but let's face it, we're both just a little bit crazy.",
        "You make my heart flutter, but let's not get too carried away, it might just be indigestion.",
        "You're the apple of my eye, but let's be real, I've got 20/20 vision.",
    ],
    "gen-z": [
        "You're the TikTok to my heart, always making me dance.",
        "You're my quarantine bae, and I never want to leave this bubble.",
        "You make my heart race like a Fortnite battle royale.",
        "You're the meme to my life, always making me laugh.",
        "You're the Netflix to my chill, always keeping me entertained.",
        "You're the Instagram to my feed, always making me look good.",
        "You're the Spotify to my playlists, always keeping me grooving.",
        "You're the only one I want to be stuck with, like a zoom call.",
        "You make my heart flutter like a Snapchat filter.",
        "You're the YouTube to my binge-watch, always keeping me hooked.",
    ],
};

interface GlassTextboxProps {
    children?: React.ReactNode;
}

const GlassTextbox = ({ children }: GlassTextboxProps) => {
    return (
        <div className="flex flex-col justify-center items-start w-11/12 md:w-1/2 bg-white/25 backdrop-blur-md rounded-md shadow-md p-4 text-xl text-red-500 my-2">
            {children}
        </div>
    );
};

const JokeTextbox = () => {
    const [joke, setJoke] = useState("");
    const [jokeType, setJokeType] = useState("meme");

    const randomJokeCategory = () => {
        let categories = Object.keys(VALENTINES_JOKES);
        setJokeType(categories[Math.floor(Math.random() * categories.length)]);
    };

    useEffect(() => {
        randomJokeCategory();
    }, []);

    useEffect(() => {
        setJoke(VALENTINES_JOKES[jokeType][Math.floor(Math.random() * 10)]);
    }, [jokeType]);

    return (
        <GlassTextbox>
            <div className="flex flex-row justify-between items-start w-full">
                <p className="font-comic">{joke}</p>
                <button onClick={() => randomJokeCategory()} className="px-2 text-xl m-px">
                    <TbRefresh className={styles.reloader} />
                </button>
            </div>
            <p className="flex flex-row justify-start items-center pt-4">
                <em className="text-center text-xs">That&apos;s a &quot;{jokeType}&quot; joke from ChatGPT.</em>
            </p>
        </GlassTextbox>
    );
};

interface ValentineImageProps {
    src: string;
    alt: string;
}

const ValentineImage = ({ src, alt }: ValentineImageProps) => {
    return (
        <div className="relative w-full">
            <Image
                src={src}
                alt={alt}
                width="0"
                height="0"
                sizes="100vw"
                className="w-11/12 md:w-1/2 my-2 rounded-md shadow-md mx-auto"
            />
        </div>
    );
};

const FloatingHearts = () => {
    return (
        <ul className={styles.hearts}>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
            <li>❤️</li>
        </ul>
    );
};

const ValentineImages = () => {
    const images = VALENTINES_IMAGES.map((imgUrl, index) => {
        return <ValentineImage key={index} src={"/img/valentines/2023/" + imgUrl} alt={imgUrl} />;
    });

    return <>{images}</>;
};

export const ValentinesPage = () => {
    return (
        <>
            <Head>
                <title>❤️ Happy Valentine&apos;s Day! ❤️</title>
                <meta name="description" content="Websites and media services by Connor Doman" />
                <link rel="icon" href="/favicon.ico" />
                <style>
                    {`
                        .grecaptcha-badge {
                            visibility: hidden;
                        }
                    `}
                </style>
            </Head>
            <main>
                <div className="static shrink-0 flex flex-col justify-center items-center w-full h-full mx-auto z-10 pb-4">
                    <h1 className="text-5xl font-bold py-10 text-red-500 text-center px-4">
                        Happy Valentine&apos;s Day!
                    </h1>
                    <GlassTextbox>
                        <div className="font-comic">
                            <p>
                                <strong>To:</strong> Zaynb 🍕
                            </p>
                            <p>
                                <strong>From:</strong> Connor 💿
                            </p>
                        </div>
                    </GlassTextbox>
                    <JokeTextbox />
                    <GlassTextbox>{MESSAGE_BODY}</GlassTextbox>
                    <GlassTextbox>
                        <p>
                            Here are some of <em>my</em> favorite photos of you and I
                        </p>
                    </GlassTextbox>
                    <ValentineImage src="/img/xmas2022/zaynb.jpg" alt="Zaynb" />
                    {/* <ValentineImage src="/img/valentines/2022/z_red.jpg" alt="Zaynb and Connor in RED" /> */}
                    <ValentineImages />
                    <GlassTextbox>
                        <p>
                            I tried to get ChatGPT to make a playlist for Valentines Day but it stopped learning in 2021
                            and doesn&apos;t know who Ice Spice is
                        </p>
                    </GlassTextbox>
                    <GlassTextbox>
                        <p className="text-sm mx-auto">2023</p>
                        <p className="text-xs text-center w-full">
                            &#40;I have to say this to maintain compliance&#41;
                        </p>
                        <RecaptchaAltText className={styles.recaptchaAltText} />
                    </GlassTextbox>
                    <FloatingHearts />
                </div>
            </main>
        </>
    );
};

export default ValentinesPage;
