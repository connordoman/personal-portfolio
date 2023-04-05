/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import ErrorContent from "../components/ErrorContent";

export const Error405 = () => {
    return <ErrorContent code={405} message="The method is not allowed." />;
};

export default Error405;
