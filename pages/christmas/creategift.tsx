/*
 * Created on Sat Dec 17 2022
 * Copyright (c) 2022 Connor Doman
 */
import { useEffect, useState } from "react";
import { Select, SelectItem, Submit, TextArea, TextInput } from "../../components/Form";
import { ErrorMessage, SuccessMessage } from "../../components/Messages";
import { DB_CONFIG, XmasDatabase } from "../../utils/xmas-database";
// import { XmasDatabase } from "connordoman-ts-db/lib/database";

interface Props {
    aliases: any;
}

export const CreateGiftForm = ({ aliases }: Props) => {
    const [recipient, setRecipient] = useState("");
    const [giftMessage, setGiftMessage] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmitNewGift = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("Submitted");
        // console.log(JSON.stringify(aliases, null, 4));
        // console.log(recipient);
        // console.log(giftMessage);
        // console.log(videoUrl);
        // console.log(imageUrl);

        const data = {
            recipientAlias: recipient,
            videoURL: videoUrl,
            imageURL: imageUrl,
            message: giftMessage,
        };
        const jsonStr = JSON.stringify(data);

        const response = await fetch("/api/xmas/creategift", {
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
            setErrorMessage(error);
            return;
        }

        setSuccess(success);
        setSuccessMessage(message);
        // const db = new XmasDatabase();
        // const data = await db.createGift(aliases[0].id, giftMessage, videoUrl, imageUrl);
    };

    return (
        <div className="w-full h-auto flex flex-col justify-start items-center">
            {success || error ? (
                <div className="w-1/2 m-4 h-auto flex flex-col justify-start items-center">
                    {success ? <SuccessMessage header="Submitted successfully" body={successMessage} /> : null}
                    {error ? <ErrorMessage header="Error" body={errorMessage} /> : null}
                </div>
            ) : null}
            <div>
                <h1 className="text-5xl font-semibold my-4">{"Create a new gift:"}</h1>
                <form
                    className="w-full h-auto flex flex-col justify-start items-center p-4"
                    onSubmit={(e) => handleSubmitNewGift(e)}>
                    <Select
                        selectItems={aliases}
                        placeholder="Select recipient..."
                        name="recipientAlias"
                        onChange={(v) => setRecipient(v)}
                        required
                    />
                    <TextArea placeholder="Message" name="giftMessage" onChange={(v) => setGiftMessage(v)} />
                    <TextInput placeholder="Video URL" name="videoUrl" onChange={(v) => setVideoUrl(v)} />
                    <TextInput placeholder="Image URL" name="imageUrl" onChange={(v) => setImageUrl(v)} />
                    <Submit name="submitGift" value="Create Gift" />
                </form>
            </div>
        </div>
    );
};

export const getStaticProps = async () => {
    const db = new XmasDatabase();
    const data = await db.getAliasesWithGifts();

    // console.log(JSON.stringify(data, null, 4));

    let aliases: SelectItem[] = [];
    for (let i = 0; i < data.length; i++) {
        aliases.push({ value: data[i].alias, label: `${data[i].alias}${data[i].hasGift ? " ✅" : ""}` });
    }

    return {
        props: { aliases },
    };
};

export default CreateGiftForm;
