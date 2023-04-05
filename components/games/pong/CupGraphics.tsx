/*
 * Created on Sun Feb 05 2023
 * Copyright (c) 2023 Connor Doman
 */

import Image from "next/image";

interface CupGraphicsProps {
    cupSize: number;
    numCups?: number;
    angle?: number;
}

export const CupImage = ({ cupSize, angle }: CupGraphicsProps) => {
    return (
        <Image
            src="/img/games/solo-cup.png"
            alt="red solo cup"
            height={cupSize}
            width={cupSize}
            className={`m-4 rotate-${angle || 0}`}
        />
    );
};

export const CupCircle = ({ cupSize }: CupGraphicsProps) => {
    return (
        <div
            className={`relative m-px rounded-full border-2 border-red-500 bg-white z-10 left-1/2`}
            style={{ width: `${cupSize}px`, height: `${cupSize}px` }}></div>
    );
};

export const Triangle = ({ color, size }: any) => {
    return (
        <svg
            className="w-64 h-64 absolute"
            style={{ width: `${size}px`, height: `${size}px` }}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <polygon points="0,100 50,13 100,100" fill={color} />
        </svg>
    );
};

export const CupTriangle = ({ numCups, cupSize }: CupGraphicsProps) => {
    const cups = [];
    if (numCups) {
        for (let i = 0; i < numCups; i++) {
            cups.push(<CupCircle key={i} cupSize={cupSize ? cupSize : 128} />);
        }
    }

    const triangle = <Triangle color="red" size={64} />;
    return (
        <div className="relative w-[64px]">
            {triangle}
            {cups}
        </div>
    );
};
