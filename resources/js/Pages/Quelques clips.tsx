import React from 'react';
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import {SharedData} from "@/types";
import PageStructure from "@/Components/PageStructure";
import {router, usePage} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";

type ClipProps = {
    id: number;
    title: string;
    link: string;
    created_at: string
}

type RoleProps = {
    id: number;
}

const QuelquesClips = () => {
    const {auth, clips, role} = usePage<SharedData & { clips: ClipProps[], role: RoleProps }>().props;
    return (
        <PageStructure title={"Quelques clips"}
                       className={"container mx-auto my-8"}>
            {auth.user && role.id === 2 && (
                <Button
                    className={"w-min"}
                    onClick={() => router.visit(route('clips.create'))}
                >
                    Ajouter un clip
                </Button>
            )}
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-5"}>
                {clips.map(clip => (
                    <YoutubeVideos key={clip.id} id={clip.link.replace("https://www.youtube.com/watch?v=", "")}
                                   name={clip.title} className={"mx-auto text-center"}/>
                ))}
            </div>
        </PageStructure>
    );
};

export default QuelquesClips;
