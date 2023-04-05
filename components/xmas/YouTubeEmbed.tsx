/*
 * Created on Sat Dec 17 2022
 * Copyright (c) 2022 Connor Doman
 */

interface Props {
    embedId: string;
}

export const YouTubeEmbed = ({ embedId }: Props) => {
    return (
        <div className="w-full aspect-w-16 aspect-h-9 flex flex-col justify-center items-center">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
};

export default YouTubeEmbed;
