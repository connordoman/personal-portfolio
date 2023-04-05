/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */

import { ReactNode } from "react";
import Content from "./Content";
import TextColumn from "./TextColumn";

interface ErrorProps {
    code: number;
    message: string | ReactNode;
}

export const ErrorContent = ({ code, message }: ErrorProps) => {
    return (
        <Content title={`${code}`} pageTitle={`Error ${code}`}>
            <TextColumn>
                <div className="flex flex-col  justify-center items-center w-full h-full">
                    <h1 className="text-5xl font-bold text-center w-full my-8 justify-self-center">
                        Error {code || ""}
                    </h1>
                    <p>{message}</p>
                </div>
            </TextColumn>
        </Content>
    );
};

export default ErrorContent;
