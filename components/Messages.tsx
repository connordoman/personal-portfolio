/*
 * Created on Mon Dec 12 2022
 * Copyright (c) 2022 Connor Doman
 */
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    header?: string;
    subheader?: string;
    body?: string;
}

export const SuccessMessage = ({ children, header, subheader, body }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full border border-green-500 rounded px-8">
            {header ? <h1 className="text-5xl font-bold text-left w-full mt-8 mb-4 text-green-500">{header}</h1> : ""}
            {subheader ? <h2 className="text-xl font-medium text-left w-full mb-8 text-green-500">{subheader}</h2> : ""}
            <hr className="border-green-700 w-full mb-8" />
            {body ? <p className="text-left w-full mb-8 text-green-300">{body}</p> : ""}
            {children}
        </div>
    );
};

export const ErrorMessage = ({ children, header, subheader, body }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full border border-red-500 rounded px-8">
            {header ? <h1 className="text-5xl font-bold text-left w-full mt-8 mb-4 text-red-500">{header}</h1> : ""}
            {subheader ? <h2 className="text-xl font-medium text-left w-full mb-8 text-red-500">{subheader}</h2> : ""}
            <hr className="border-red-700 w-full mb-8" />
            {body ? <p className="text-left w-full mb-8 text-red-300">{body}</p> : ""}
            {children}
        </div>
    );
};
