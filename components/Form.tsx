/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import { ReactNode, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { ErrorMessage, SuccessMessage } from "./Messages";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export interface SelectItem {
    value: string;
    label: string;
}

export interface InputProps {
    name: string;
    value?: string | number;
    placeholder?: string;
    title?: string;
    required?: boolean;
    selectItems?: SelectItem[];
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    onClick?: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (value: string) => void;
}

const INPUT_CLASS =
    "w-full p-2 my-2 min-h-[2.5rem] rounded-md border border-gray-300 bg-zinc-200 text-zinc-900 dark:text-zinc-200 dark:border-gray-700 dark:bg-zinc-900 focus:border-emerald-500";

export const TextInput = ({ onChange, placeholder = "", value = "", required = false, name }: InputProps) => {
    const [text, setText] = useState(value);

    useEffect(() => {
        if (onChange) onChange(text as string);
    }, [text, onChange]);

    return (
        <input
            name={name}
            type="text"
            className={`${INPUT_CLASS}`}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder + (required ? "*" : "")}
            value={text}
            required={required}
        />
    );
};

export const NumberInput = ({ onChange, placeholder = "", value = "", required = false, name }: InputProps) => {
    const [num, setNumber] = useState(value as number);

    useEffect(() => {
        if (num < 1) setNumber(1);
    }, [num]);

    return <TextInput onChange={onChange} placeholder={placeholder} value={num} required={required} name={name} />;
};

export const TextArea = ({ onChange, placeholder = "", value = "", required = false, name }: InputProps) => {
    const [text, setText] = useState(value as string);

    useEffect(() => {
        if (onChange) onChange(text as string);
    }, [text, onChange]);

    return (
        <textarea
            name={name}
            className={`${INPUT_CLASS} h-24`}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder + (required ? "*" : "")}
            value={text}
            required={required}
        />
    );
};

export const TextValue = ({ name, value }: InputProps) => {
    return <input type="hidden" name={name} value={value} />;
};

export const Select = ({ selectItems, name, value, title, required, placeholder, onChange }: InputProps) => {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        if (onChange) onChange(selected);
    }, [selected, onChange]);

    const options = selectItems?.map((item) => (
        <option key={item.value} value={item.value}>
            {item.label}
        </option>
    ));

    return (
        <select
            className={`${INPUT_CLASS}`}
            name={name}
            value={value}
            title={title}
            required={required}
            onChange={(e) => setSelected(e.target.value)}>
            <option disabled selected>
                {placeholder + (required ? "*" : "")}
            </option>
            {options}
        </select>
    );
};

export const Submit = ({ name, value, title, required, onChange, onSubmit, onClick }: InputProps) => {
    return (
        <input
            type="submit"
            className="w-full p-2 my-2 h-10 rounded-md bg-emerald-600 brightness-100 hover:brightness-110 active:brightness-90 cursor-pointer text-white"
            value={value}
            title={title}
            required={required}
            onSubmit={(e) => onSubmit}
            onClick={(e) => onClick}
        />
    );
};

interface FormProps {
    children?: ReactNode;
    action: string;
    method?: string;
}

export const ContactForm = ({ action = "/api/contact", method = "POST" }: FormProps) => {
    const router = useRouter();
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [redirect, setRedirect] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = useCallback(
        async (token: any) => {
            // pass form to backend
            let data = {
                firstName,
                lastName,
                email,
                messageSubject: subject,
                messageText: message,
                recaptchaToken: token,
            };

            let jsonStr = JSON.stringify(data);

            // console.log(jsonStr);

            let res = await fetch(action, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: jsonStr,
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setSubmitted(false);
                setSuccess(false);
                setError(true);
                setErrorMessage(error);
                return;
            }

            // console.log("Response received!");

            if (res.status === 200) {
                // console.log("Message sent!");
                setSubmitted(true);
                setSuccess(true);
                setError(false);
            }
        },
        [action, email, firstName, lastName, message, method, subject]
    );

    const handleRecaptchaSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (!executeRecaptcha) {
                console.error("Recaptcha not yet loaded");
                return;
            }

            executeRecaptcha("contact_form").then((token) => {
                console.log("Recaptcha token: ", token);
                handleSubmit(token);
            });
        },
        [executeRecaptcha, handleSubmit]
    );

    return (
        <>
            {success ? (
                <SuccessMessage
                    header="Thank you."
                    subheader="Message sent successfully"
                    body={`Thanks a lot, ${firstName}. We will be in touch shortly.`}
                />
            ) : null}
            {error ? (
                <ErrorMessage header="Message failed to send" body={`${errorMessage ? "\n" + errorMessage : ""}`} />
            ) : null}
            {!submitted ? (
                <form
                    className="flex flex-col items-start justify-start w-full py-8"
                    onSubmit={(e) => handleRecaptchaSubmit(e)}>
                    <div className="flex flex-row items-start justify-between w-full">
                        <TextInput
                            name="firstName"
                            placeholder="First name"
                            onChange={(v) => setFirstName(v)}
                            required
                        />
                        <span className="w-8"></span>
                        <TextInput name="lastName" placeholder="Last name" onChange={(v) => setLastName(v)} required />
                    </div>
                    <TextInput name="email" placeholder="Email" onChange={(v) => setEmail(v)} required />
                    <TextInput name="messageSubject" placeholder="Subject" onChange={(v) => setSubject(v)} required />
                    <TextArea name="messageText" placeholder="Message" onChange={(v) => setMessage(v)} required />
                    <TextValue name="redirect" value={router.asPath} />
                    <TextValue name="source" value="contact" />
                    <Submit name="submit" value="Send message" />
                </form>
            ) : null}
        </>
    );
};
