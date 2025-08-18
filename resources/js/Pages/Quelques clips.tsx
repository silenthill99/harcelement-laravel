import React from 'react';
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import {SharedData} from "@/types";
import PageStructure from "@/Components/PageStructure";
import {usePage} from "@inertiajs/react";

type ClipProps = {
    id: number;
    title: string;
    link: string;
    created_at: string
}

const QuelquesClips = () => {
    const  {auth, clips} = usePage<SharedData & {clips: ClipProps[]}>().props;
    return (
        <PageStructure auth={auth.user} title={"Quelques clips"}
                       className={"grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto my-8"}>
            {clips.map(clip => (
                <YoutubeVideos key={clip.id} id={clip.link.replace("https://www.youtube.com/watch?v=", "")} name={clip.title} className={"mx-auto text-center"}/>
            ))}
        </PageStructure>
    );
};

export default QuelquesClips;
