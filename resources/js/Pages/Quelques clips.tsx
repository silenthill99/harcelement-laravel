import React from 'react';
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import PageStructure from "@/Components/PageStructure";
import {router, usePage} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";
import clips from "@/routes/clips";
import {getVideoId} from "@/Components/getVideoId";

type ClipProps = {
    id: number;
    title: string;
    link: string;
    created_at: string
}
const QuelquesClips = () => {
    const {clipList, can} = usePage<{ clipList: ClipProps[], can: boolean }>().props;

    return (
        <PageStructure title={"Quelques clips"}
                       className={"container mx-auto my-8"}>
            {can && (
                <Button
                    className={"w-min"}
                    onClick={() => router.visit(clips.create())}
                >
                    Ajouter un clip
                </Button>
            )}
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-5"}>
                {clipList.map(clip => (
                    <YoutubeVideos
                        key={clip.id}
                        id={getVideoId(clip.link)}
                        name={clip.title} className={"mx-auto text-center"}
                    />
                ))}
            </div>
        </PageStructure>
    );
};

export default QuelquesClips;
