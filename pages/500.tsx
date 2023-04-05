/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import ErrorContent from "../components/ErrorContent";

export const Error500 = () => {
    return <ErrorContent code={500} message="An internal server error occurred." />;
};

export default Error500;
