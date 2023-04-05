/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import { GiCoffeePot, GiTeapot } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import ErrorContent from "../components/ErrorContent";

export const Error418 = () => {
    return (
        <ErrorContent
            code={418}
            message={
                <div className="text-8xl flex flex-row">
                    <GiTeapot />
                    <RxCross1 />
                    <GiCoffeePot />
                </div>
            }
        />
    );
};

export default Error418;
