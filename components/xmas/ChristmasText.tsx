/*
 * Created on Sat Dec 17 2022
 * Copyright (c) 2022 Connor Doman
 */
import { useEffect, useState } from "react";

interface Props {
    text: string;
    speed_ms: number;
    className?: string;
    substitutions?: string[];
}

export const ChristmasText = ({ text, speed_ms, className, substitutions }: Props) => {
    const [toggleColor, setToggleColor] = useState(false);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setToggleColor((toggleColor) => !toggleColor);
        }, speed_ms);
        return () => clearInterval(intervalID);
    }, [speed_ms]);

    let i = 0;
    let lastChar = "";
    if (toggleColor) {
        i = 1;
    }
    const coloredText = text.split("").map((char) => {
        if (char === " ") return char;
        if (i !== 0) {
            lastChar = char;
        }
        if (char === "%" && lastChar !== "\\") {
            let newChar = substitutions ? substitutions[0] : "";
            char = newChar;
        }
        if (i % 2 === 0) {
            i++;
            return (
                <span className="text-emerald-600" key={char + i}>
                    {char}
                </span>
            );
        } else {
            i++;
            return (
                <span className="text-red-600" key={char + i}>
                    {char}
                </span>
            );
        }
    });

    return <div className={className}>{coloredText}</div>;
};

export default ChristmasText;
