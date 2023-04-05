/*
 * Created on Thu Dec 01 2022
 * Copyright (c) 2022 Connor Doman
 */
import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { TbKarate } from "react-icons/tb";
import Link from "next/link";

interface Props {
    children?: ReactNode;
    title?: string;
    pageTitle?: string;
    className?: string;
}

export const Content = ({ children, title, pageTitle, className }: Props) => {
    return (
        <div className={`dark:text-white text-black font-lato w-full absolute box-border overflow-hidden ${className}`}>
            <Head>
                <title>{`${title ? title : "Website Developer"} | Connor Doman`}</title>
                <meta name="description" content="Websites and media services by Connor Doman" />
                {/* <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💿</text></svg>"
                /> */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header pageTitle={pageTitle?.trim().replace(" ", "\u00A0")}></Header>

            <main
                className="flex flex-col items-center justify-start w-full overflow-x-hidden relative h-screen py-20"
                style={{ scrollbarWidth: "thin" }}>
                {children}
                <div className="w-full h-20"></div>
            </main>
            <footer className="fixed bottom-4 left-4 flex items-center justify-end w-min pr-4">
                <Link href="https://wikipedia.org/wiki/Karate" title="Karate">
                    <TbKarate />
                </Link>
            </footer>
        </div>
    );
};

export default Content;
