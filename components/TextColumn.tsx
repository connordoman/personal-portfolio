/*
 * Created on Thu Dec 01 2022
 * Copyright (c) 2022 Connor Doman
 */
import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    header?: string;
    subheader?: string;
    className?: string;
}

export const TextColumn = ({ children, header, subheader, className }: Props) => {
    return (
        <div className={`flex flex-col items-start justify-start md:w-2/3 w-11/12 pb-8 ${className}`}>
            {header ? <h1 className="text-5xl font-bold text-center w-full mt-8 mb-4">{header}</h1> : ""}
            {subheader ? <h2 className="text-xl font-medium text-center w-full mb-8">{subheader}</h2> : ""}
            {children}
        </div>
    );
};

export default TextColumn;
