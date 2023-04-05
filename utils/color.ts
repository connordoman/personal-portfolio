/*
 * Created on Fri Dec 16 2022
 * Copyright (c) 2022 Connor Doman
 */

export const lerp = (colors: number[][], value: number) => {
    return [
        colors[0][0] + (colors[1][0] - colors[0][0]) * value,
        colors[0][1] + (colors[1][1] - colors[0][1]) * value,
        colors[0][2] + (colors[1][2] - colors[0][2]) * value,
    ];
};

export const getGradient = (colors: number[][], steps: number) => {
    const gradient = [];
    for (let i = 0; i < steps; i++) {
        gradient.push(lerp(colors, i / (steps - 1)));
    }
    return gradient;
};

export const getHex = (colors: number[]) => {
    return `#${colors.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
};
