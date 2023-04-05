/*
 * Created on Tue Mar 14 2023
 * Copyright (c) 2023 Connor Doman
 */

import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { TextInput } from "../components/Form";

export const getPi = async (digits: number): Promise<number> => {
    if (digits > 1000) {
        throw new Error("Too many digits");
    }
    if (digits < 1) {
        throw new Error("Too few digits");
    }
    let pi = 1;
    const remotePi = await fetch(`https://api.pi.delivery/v1/pi?numberOfDigits=${digits}&radix=10`);
    const piData = await remotePi.json();
    return piData.content;
};

interface PiDayProps {
    basePi: number;
}

export const PiDay = ({ basePi }: PiDayProps) => {
    const [pi, setPi] = useState(0);

    useEffect(() => {}, []);

    const handleChange = async (value: string) => {
        try {
            const digitsOfPi: number = parseInt(value);
            const piValue = await getPi(digitsOfPi);
            setPi(piValue);
        } catch (e: any) {
            if (e instanceof TypeError) {
                console.error(e.name, e.message);
            }
        }
    };

    return (
        <div className="w-11/12 md:w-1/3 xl:w-1/5 mx-auto my-4 break-all">
            <h1>Happy Pi Day!</h1>
            <p>3.14.2023</p>
            <div>
                <TextInput name={"number_of_digits"} value={pi.toString()} onChange={(v) => handleChange(v)} />
                {/* <input type="text" placeholder="Number of digits" value={pi} onChange={} /> */}
                <p>{pi}</p>
            </div>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const pi = await getPi(1000);

    return {
        props: {
            basePi: pi,
        },
    };
};

export default PiDay;
