/*
 * Created on Sat Apr 01 2023
 * Copyright (c) 2023 Connor Doman
 */

import { useEffect, useState } from "react";

interface TerminalSymbolProps {
    symbol: string;
    delay?: number;
    className?: string;
    space?: number;
}

export const TerminalSymbol = ({ symbol, delay = 0, className = "", space = 0 }: TerminalSymbolProps) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (delay === 0) {
            setShow(true);
            return;
        }

        let timer = setTimeout(() => {
            setShow(!show);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, show]);

    return (
        <span className={`inline-block`}>
            <span className={`text-3xl font-mono font-bold absolute ${className}`}>{symbol}</span>
            <span
                className={`text-3xl font-mono font-bold relative left-1 ${show ? "opacity-100" : "opacity-0"} ${
                    space == 2 ? "bottom-[-0.13rem]" : "bottom-1"
                } ${className}`}>
                {"_"}
            </span>
        </span>
    );
};
