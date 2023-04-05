/*
 * Created on Sun Dec 18 2022
 * Copyright (c) 2022 Connor Doman
 */

import { useEffect, useState } from "react";
import { Submit, TextInput } from "../../components/Form";
import { SuccessMessage } from "../../components/Messages";

export const CreateUser = () => {
    const [userAlias, setUserAlias] = useState("");
    const [userFirstName, setUserFirstName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userNickname, setUserNickname] = useState("");

    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmitNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Submitted");

        const data = {
            alias: userAlias,
            firstName: userFirstName,
            lastName: userLastName,
            nickname: userNickname,
        };
        const jsonStr = JSON.stringify(data);

        const response = await fetch("/api/xmas/createrecipient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: jsonStr,
        });

        const { error, success, message } = await response.json();

        if (error) {
            console.log(error);
            setError(true);
            setErrorMessage(error.toString());
            return;
        }

        setSuccess(success);
        setSuccessMessage(message);

        setUserAlias("");
        setUserFirstName("");
        setUserLastName("");
        setUserNickname("");
    };

    return (
        <div className="w-full h-auto flex flex-col justify-start items-center">
            {success ? <SuccessMessage header="Submitted successfully" body={successMessage} /> : null}
            {error ? <SuccessMessage header="Error" body={errorMessage} /> : null}
            <div className="text-center">
                <h1 className="text-5xl font-semibold my-4">{"Create a new recipient:"}</h1>
                <form
                    className="w-full h-auto flex flex-col justify-start items-center p-4"
                    onSubmit={(e) => handleSubmitNewUser(e)}
                >
                    <TextInput placeholder="Alias" name="alias" onChange={(v) => setUserAlias(v)} required />
                    <TextInput
                        placeholder="First name"
                        name="firstName"
                        onChange={(v) => setUserFirstName(v)}
                        required
                    />
                    <TextInput placeholder="Last name" name="lastName" onChange={(v) => setUserLastName(v)} required />
                    <TextInput placeholder="Nickname" name="nickname" onChange={(v) => setUserNickname(v)} />
                    <Submit name="submitGift" value="Create User" />
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
