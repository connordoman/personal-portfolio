/*
 * Created on Sat Dec 17 2022
 * Copyright (c) 2022 Connor Doman
 */
import Image from "next/image";

export const HollySeparator = () => {
    return (
        <div className="flex flex-row justify-center items-center">
            <Image src="/img/xmas2022/Holly_Separator.png" alt="Holly paragraph separator" width={50} height={24} />
        </div>
    );
};

export const ChristmasTree = () => {
    return (
        <div className="flex flex-row justify-center items-center my-8">
            <Image src="/img/xmas2022/Christmas_Tree.gif" alt="Christmas Tree" width={50} height={50} />
        </div>
    );
};
