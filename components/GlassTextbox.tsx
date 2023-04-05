/*
 * Created on Sat Apr 01 2023
 * Copyright (c) 2023 Connor Doman
 */

import { useState, useEffect } from "react";

interface GlassTextboxProps {
    children?: React.ReactNode;
    bgColor?: string;
    textColor?: string;
    className?: string;
}

export const GlassTextbox = ({ children, bgColor, textColor, className }: GlassTextboxProps) => {
    return (
        <div
            className={`flex flex-col justify-center items-start w-11/12 backdrop-blur-md rounded-md shadow-md p-4 text-xl ${
                textColor ? textColor : "text-white"
            } ${bgColor ? bgColor : "bg-white/25"}
            ${className ? className : ""}`}>
            {children}
        </div>
    );
};
