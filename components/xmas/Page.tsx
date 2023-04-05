/*
 * Created on Fri Dec 16 2022
 * Copyright (c) 2022 Connor Doman
 */
import { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
    return <div className="w-screen h-auto flex flex-col justify-start items-center">{children}</div>;
};
