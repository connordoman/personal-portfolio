/*
 * Created on Thu Dec 01 2022
 * Copyright (c) 2022 Connor Doman
 */
import { ReactNode } from "react";
import Link from "next/link";
import { TbKarate } from "react-icons/tb";
import { TerminalSymbol } from "./TerminalSymbol";
import Logo from "./Logo";

interface Props {
    children?: ReactNode;
    pageTitle?: string;
}

interface TitledLink {
    title: string;
    href: string;
}

export const Header = ({ pageTitle }: Props) => {
    const links: TitledLink[] = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact" },
    ];

    const linkElements = links.map((link: TitledLink) => {
        return (
            <li key={link.href} className={`${link.title === "Home" ? "hidden sm:inline" : ""} ml-2 sm:ml-4`}>
                <span className="text-white text-lg border-b hover:border-b-2 transition duration-200 pb-px">
                    <Link href={link.href}>{link.title}</Link>
                </span>
            </li>
        );
    });

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-20 z-[15] bg-blue-600/30"></div>
            <header className="flex flex-row items-center justify-between h-20 fixed w-full top-0 px-4 z-20">
                <div className="fixed top-0 left-0 h-20 w-screen backdrop-blur-xl bg-opacity-25 bg-gradient-radial from-green-600/50 via-green-600/40 to-green-600/25 text-white z-10 shadow-lg bg-[length:100%_200px] bg-bottom"></div>
                <div className="flex flex-row items-center justify-between w-full z-20">
                    <div className="flex flex-row items-center justify-start">
                        <Logo delay={0} />
                    </div>
                    <ul className="flex flex-row list-none justify-center items-center">{linkElements}</ul>
                </div>
            </header>
        </>
    );
};

export default Header;
