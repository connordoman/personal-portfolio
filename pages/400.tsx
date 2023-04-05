/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import ErrorContent from "../components/ErrorContent";

export const Error400 = () => {
    return <ErrorContent code={400} message="The request was invalid." />;
};

export default Error400;
