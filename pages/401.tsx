/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import ErrorContent from "../components/ErrorContent";

export const Error401 = () => {
    return <ErrorContent code={401} message="Credentials not valid." />;
};

export default Error401;
