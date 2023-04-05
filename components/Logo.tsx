/*
 * Created on Sat Apr 01 2023
 * Copyright (c) 2023 Connor Doman
 */

import { useState, useEffect } from "react";
import { TerminalSymbol } from "./TerminalSymbol";
import { useRouter } from "next/router";

interface LogoProps {
    className?: string;
    delay?: number;
}

export default function Logo({ className = "", delay = 0 }: LogoProps = {}) {
    const r = useRouter();

    const handleClick = (e: any) => {
        e.preventDefault();
        r.push("/");
    };

    return (
        <div
            className={`relative bottom-1 cursor-pointer text-white dark:text-white ${className}`}
            onClick={(e) => handleClick(e)}>
            <div className="flex flex-row items-start justify-start text-2xl m-0 p-0">
                <span>Connor Doman</span>
            </div>
            <hr className="border-white" />
            <div className="flex flex-row items-center justify-start h-6">
                <TerminalSymbol symbol=">" delay={delay} className="text-2xl" />
                <span className="ml-2 text-2xl pt-1">DEVELOPER</span>
            </div>
        </div>
    );
}
