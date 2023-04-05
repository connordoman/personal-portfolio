/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import ErrorContent from "../components/ErrorContent";

export const Error404 = () => {
    return <ErrorContent code={404} message="The page you are looking for could not be found." />;
};

export default Error404;
