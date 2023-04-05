/*
 * Created on Sun Dec 11 2022
 * Copyright (c) 2022 Connor Doman
 */
import { useState, useEffect } from "react";
import { RiChatSmile2Line } from "react-icons/ri";
import Content from "../components/Content";
import { ContactForm } from "../components/Form";
import TextColumn from "../components/TextColumn";

export const ContactPage = () => {
    return (
        <Content title="Get In Touch" pageTitle="Contact">
            <TextColumn>
                <h1 className="text-5xl font-bold text-center w-full my-8">Get In Touch</h1>
                <span className="text-8xl flex flex-row items-center justify-center w-full my-8">
                    <RiChatSmile2Line />
                </span>
                <p className="text-2xl font-md w-full my-8 text-center">
                    I&apos;d love to work with you on your great idea.
                    <br />
                    <br />
                    If you have any questions or otherwise want to tell me what you think, send me a message.
                </p>
                <ContactForm action="api/contact" />
            </TextColumn>
        </Content>
    );
};

export default ContactPage;
