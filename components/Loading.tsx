/*
 * Created on Fri Dec 16 2022
 * Copyright (c) 2022 Connor Doman
 */
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { getHex } from "../utils/color";

interface Props {
    children: React.ReactNode;
    timeout?: number;
    color?: string;
}

export const LoadingScreen = ({ children, timeout = 1000, color = "#059668" }: Props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), timeout);
    }, [timeout]);

    return (
        <>
            <div
                className={`flex-col items-center justify-center w-screen h-screen absolute ${
                    loading ? "flex" : "hidden"
                }`}
            >
                <TailSpin
                    height="80"
                    width="80"
                    color={color}
                    ariaLabel="tail-spin-loading"
                    radius="0.5"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={loading}
                />
            </div>
            <div className={!loading ? "contents" : "hidden"}>{children}</div>
        </>
    );
};

export default LoadingScreen;
