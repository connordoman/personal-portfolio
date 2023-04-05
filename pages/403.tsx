/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import ErrorContent from "../components/ErrorContent";

export const Error403 = () => {
    return <ErrorContent code={403} message="You are not authorized to view this page." />;
};

export default Error403;
