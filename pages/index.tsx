/*
 * Created on Thu Dec 01 2022
 * Copyright (c) 2022 Connor Doman
 */

import Image from "next/image";
import { Content } from "../components/Content";
import { SiteGraphics, SiteGraphicsCarousel } from "../components/SiteGraphics";
import { GlassTextbox } from "../components/GlassTextbox";
import TextColumn from "../components/TextColumn";

const MECHANIC_TEXT = (
    <div>
        <h1 className="text-xl font-bold text-center">{"Joe's Auto Repair"}</h1>
        <h2 className="text-lg text-center">🛠️</h2>
        {
            "Welcome to Joe's Auto Repair, where we take pride in providing top-notch service for all your automotive needs. Our skilled mechanics are experts at diagnosing and fixing any issue you may be experiencing with your vehicle. From routine maintenance to complex repairs, we've got you covered. We use only the highest quality parts and our technicians have the expertise to get you back on the road as quickly as possible. We know your car is important to you, and we'll treat it like it's our own. Stop by today and see why our customers trust us to keep their vehicles running smoothly."
        }
    </div>
);
const BAKER_TEXT = (
    <div>
        <h1 className="text-xl font-bold text-center">🌼 Flower Power Bakery 🌼</h1>
        <h2 className="text-2xl text-center">🍰</h2>
        {
            "At Flour Power Bakery, we're passionate about making the freshest, most delicious baked goods around. Our skilled bakers use only the finest ingredients to create everything from artisanal breads to mouth-watering pastries. We believe that every bite should be an experience, and that's why we take care to craft each item with care and attention to detail. From our buttery croissants to our fluffy cakes, we put our heart and soul into everything we make. Whether you're stopping in for a quick treat or placing a custom order for a special occasion, we guarantee you'll be delighted with the results."
        }
        ;
    </div>
);
const RESTAURANT_TEXT = (
    <div>
        <h1 className="text-xl font-bold text-center">The Golden Fork</h1>
        {
            "Welcome to The Golden Fork, where we take pride in providing top-notch service for all your dining needs. Our skilled chefs are experts at creating delicious meals that will satisfy even the most discerning palates. From our signature dishes to our daily specials, we've got something for everyone. We use only the highest quality ingredients and our chefs have the expertise to create a meal that will leave you wanting more. We know your meal is important to you, and we'll treat it like it's our own. Stop by today and see why our customers trust us to keep them coming back for more."
        }
        ;
    </div>
);

const LAWYER_TEXT = (
    <div>
        <h1 className="text-xl font-bold">H.H. Adams, esq.</h1>
        <br />
        {
            "When you need legal representation, turn to the experts at Smith & Associates. Our team of experienced attorneys is dedicated to providing our clients with the highest level of service and expertise. We take the time to understand your unique situation and work tirelessly to achieve the best possible outcome for you. From complex litigation to simple legal matters, we're here to help. We pride ourselves on our professionalism and our commitment to our clients. Let us put our knowledge and skills to work for you. Contact us today to schedule a consultation."
        }
        ;
    </div>
);

export default function Home() {
    return (
        <Content>
            <TextColumn className="items-center">
                <br />
                <div className="my-12">
                    <h1 className="text-7xl text-center">{"I'll make you a website."}</h1>
                </div>
                <Image
                    src="/img/connor.png"
                    alt="A profile photo for Connor Doman"
                    width={256}
                    height={256}
                    className="my-8 rounded-full border-4 border-black dark:border-white"
                />
                <GlassTextbox bgColor="bg-gray-600/10 dark:bg-white/10">
                    <h2 className="mx-4 text-2xl font-bold text-center text-black dark:text-white">
                        {"Together we can create an industry leading product that will connect you to your audience."}
                    </h2>
                </GlassTextbox>
                <div className="overflow-x-hidden">
                    <SiteGraphics
                        width={500}
                        height={400}
                        posX={`calc(100% - ${450}px)`}
                        posY="40vh"
                        text={MECHANIC_TEXT}></SiteGraphics>
                    <SiteGraphics
                        width={500}
                        height={400}
                        posX={`calc(40% - ${450}px)`}
                        posY="35vh"
                        text={BAKER_TEXT}></SiteGraphics>
                    <SiteGraphics
                        width={500}
                        height={400}
                        posX={`calc(30% - ${450}px)`}
                        posY="42.5vh"
                        text={LAWYER_TEXT}></SiteGraphics>
                </div>
            </TextColumn>
            <SiteGraphicsCarousel length={3} />
        </Content>
    );
}
