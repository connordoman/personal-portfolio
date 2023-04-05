/*
 * Created on Sat Apr 01 2023
 * Copyright (c) 2023 Connor Doman
 */

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const PARAGRAPH_1_TEXT =
    "There's no denying that technology has revolutionized the way we live and work. From smartphones to social media, technological advancements have made our lives easier and more convenient than ever before. We can now communicate with people on the other side of the world with just a few clicks, and access information on any topic at any time. However, with these advancements also come challenges such as cybercrime and privacy concerns.";
const PARAGRAPH_2_TEXT =
    "Education is the foundation of a successful society. It allows individuals to acquire the knowledge, skills, and values necessary to lead fulfilling lives and contribute to their communities. Access to quality education is essential for social mobility and reducing inequality. It's also a key factor in driving economic growth and innovation.";
const PARAGRAPH_3_TEXT =
    "The world is changing rapidly, and businesses must adapt to stay competitive. Innovation is essential to success, but it's not enough on its own. Companies also need to focus on building strong relationships with their customers and employees. By prioritizing the needs of these groups, businesses can create a loyal customer base and a motivated workforce that's committed to the company's goals.";
const PARAGRAPH_4_TEXT =
    "Climate change is one of the greatest challenges facing humanity. The Earth's temperature is rising, and this has significant impacts on the environment and human health. It's essential that we take action to reduce our carbon footprint and mitigate the effects of climate change. This includes transitioning to renewable energy sources, reducing waste, and protecting biodiversity.";
const PARAGRAPH_5_TEXT =
    "Mental health is just as important as physical health. It's essential to take care of our mental wellbeing in order to lead happy and fulfilling lives. This includes getting enough sleep, managing stress, and seeking help when needed. Mental health stigma still exists in many parts of the world, but by talking openly about our struggles and seeking support, we can break down these barriers and promote a more compassionate and understanding society.";

const SAMPLE_PARAGRAPHS = [PARAGRAPH_1_TEXT, PARAGRAPH_2_TEXT, PARAGRAPH_3_TEXT, PARAGRAPH_4_TEXT, PARAGRAPH_5_TEXT];

interface SiteGraphicsProps {
    width?: number;
    height?: number;
    posX?: string;
    posY?: string;
    className?: string;
    text?: React.ReactNode;
}

export const RectangleGraphic = () => {
    return <span className="inline-block w-8 h-2 m-0 p-0 bg-white"></span>;
};

const possibleColors = [
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-pink-500",
];

const hashCode = (str: string) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        hash = (hash << 5) - hash + code;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

interface SiteCarouselProps extends SiteGraphicsProps {
    length: number;
}

export const SiteGraphics = ({
    width = 100,
    height = 100,
    posX = "",
    posY = "",
    className,
    text,
}: SiteGraphicsProps) => {
    let hash = Math.floor(hashCode(posX + posY));
    let paragraphIndex = hash % SAMPLE_PARAGRAPHS.length;
    let colorIndex = hash % possibleColors.length;
    let initialState = possibleColors[colorIndex];

    const [color, setColor] = useState(initialState);
    const [currentText, setCurrentText] = useState(
        SAMPLE_PARAGRAPHS[paragraphIndex] + SAMPLE_PARAGRAPHS[paragraphIndex + 1 || 0]
    );
    const [nextParagraphIndex, setNextParagraphIndex] = useState(paragraphIndex);

    return (
        <div
            className={`bg-white dark:bg-black border border-black dark:border-white overflow-y-hidden flex flex-col justify-start items-center absolute -z-10 ${
                className ? className : ""
            }}`}
            style={{ width: width + "px", height: height + "px", position: "absolute", top: posY, left: posX }}>
            <div
                className={`w-full h-10 flex flex-row items-center justify-between border px-4 relative top-0 ${color}`}>
                <div className="flex flex-col items-start justify-start text-2xl w-4 h-4 m-0 p-0 rounded-full bg-white"></div>
                <div className="flex flex-row gap-x-2">
                    <RectangleGraphic />
                    <RectangleGraphic />
                    <RectangleGraphic />
                </div>
            </div>
            <div
                className="flex flex-col items-start justify-start m-0 border-l border-r border-black dark:border-white w-3/4 h-full text-black dark:text-amber-50 text-xs py-2 px-16 overflow-y-scroll break-all"
                style={{ scrollbarWidth: "none" }}>
                {text ? (
                    text
                ) : (
                    <p>
                        <span className="text-sm my-1">Your Website</span>
                        <br />
                        <br />
                        {currentText}
                    </p>
                )}
            </div>
        </div>
    );
};

export const SiteGraphicsCarousel = ({
    width = 500,
    height = 300,
    posX = "",
    posY = "",
    className,
    length = 3,
}: SiteCarouselProps) => {
    const [rate, setRate] = useState(1000);

    const [index, setIndex] = useState(0);

    const listElements = [];
    for (let i = 0; i < length; i++) {
        listElements.push(
            <li className="flex flex-row items-center justify-start w-full h-full">
                <SiteGraphics
                    width={width}
                    height={height}
                    posX={posX + ((1920 - width) / length) * i + "px"}
                    posY={posY}
                    className={className}
                />
            </li>
        );
    }
    return (
        <Marquee style={{ height }} className="w-full" gradient={false}>
            <ul className="list-none flex flex-row justify-evenly" style={{}}>
                {listElements}
            </ul>
        </Marquee>
    );
};
