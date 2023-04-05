/*
 * Created on Thu Dec 01 2022
 * Copyright (c) 2022 Connor Doman
 */

import { ReactNode } from "react";
import Link from "next/link";
import Content from "../components/Content";
import TextColumn from "../components/TextColumn";
import { FaCloud, FaDatabase, FaCreditCard, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { GiHighPunch } from "react-icons/gi";

export const AboutPage = () => {
    return (
        <Content title="About">
            <TextColumn header="About">
                <hr className="w-full my-8" />
                <p className="my-4 text-2xl w-11/12 self-center">
                    I have been developing websites for over 15 years. Having experienced everything from{" "}
                    <code>HTML</code> to fully managed website builders, I know what makes day-to-day website management
                    difficult&mdash;and more importantly: how to fix that.
                </p>
                <hr className="w-full my-8" />
                <div className="flex flex-col justify-center items-center w-full">
                    <ul className="list-none flex flex-col items-center justify-center">
                        <li className="text-center flex flex-col justify-center items-center mb-8">
                            <FaGraduationCap className="text-8xl" />
                            <h3 className="text-3xl">
                                Computer Science Undergraduate,
                                <br />
                                Univsersity of British Columbia
                            </h3>
                        </li>
                        <li className="text-center flex flex-col justify-center items-center mb-8">
                            <FaBriefcase className="text-8xl mb-8" />
                            <h3 className="text-3xl">Small Business Owner at 20 Years Old</h3>
                        </li>
                        <li className="text-center flex flex-col justify-center items-center">
                            <GiHighPunch className="text-8xl mb-8" />
                            <h3 className="text-3xl">Second-Degree Black Belt in Karate</h3>
                        </li>
                    </ul>
                </div>
                <hr className="w-full my-8" />
                <p className="my-4 text-2xl w-11/12 self-center">
                    Whatever your business needs, we can supply the tools to achieve that.
                    <br />
                    <br />
                    And most importantly, your opinion matters every step of the way.
                </p>
                <hr className="w-full my-8" />
                <div className="flex flex-col justify-center items-center w-full">
                    <ul className="list-none flex flex-col items-center justify-center">
                        <li className="text-center flex flex-col justify-center items-center mb-8">
                            <FaCloud className="text-8xl" />
                            <h3 className="text-3xl">
                                Cloud-Based&nbsp;Solutions Deploy&nbsp;Your&nbsp;Product with Flexibility
                            </h3>
                        </li>
                        <li className="text-center flex flex-col justify-center items-center">
                            <FaDatabase className="text-8xl mb-8" />
                            <h3 className="text-3xl">
                                Database&nbsp;Solutions for&nbsp;User&nbsp;Configuration and&nbsp;Data&nbsp;Aggregation
                            </h3>
                        </li>
                        <li className="text-center flex flex-col justify-center items-center mt-8">
                            <FaCreditCard className="text-8xl mb-8" />
                            <h3 className="text-3xl">
                                Payment&nbsp;Handling
                                <br />
                                with&nbsp;Industry-Standard&nbsp;Services, Like&nbsp;<em>Stripe</em>
                            </h3>
                        </li>
                    </ul>
                </div>
            </TextColumn>
        </Content>
    );
};

export default AboutPage;
