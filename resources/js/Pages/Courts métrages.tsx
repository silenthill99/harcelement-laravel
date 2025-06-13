import React from 'react';
import {PageProps} from "@/types";
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import PageStructure from "@/Components/PageStructure";
import {router} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";

type VideoProps = {
    title: string;
    link: string;
}

const CourtsMetrages = ({auth, videos}: PageProps<{videos: VideoProps[]}>) => {
    return (
        <PageStructure auth={auth.user} title={"Courts métrages"}>
            <div className={"container mx-auto p-5 md:p-4 flex flex-col justify-center gap-5"}>
                <h1 className="text-center p-10">Quelques courts métrages</h1>
                {auth.user && (
                    <Button className={"self-center cursor-pointer"} onClick={() => {
                        router.visit(route('videos.create'))
                    }}>Ajouter une vidéo</Button>
                )}
                <p className="text-center">Sur cette page, vous y trouverez toute une floppée de courts métrages
                    évoquant le
                    harcèlement scolaire. Néanmoins, il faut savoir qu'en raison du sujet qui est très délicat,
                    certains
                    d'entre eux finissent mal.</p>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
                    {videos.map((video) => (
                        <YoutubeVideos id={video.link.replace("https://www.youtube.com/watch?v=", "")} name={video.title} className={"flex flex-col items-center"}/>
                    ))}
                </section>
                <a className={"fixed left-5 bottom-5 bg-white border border-gray-400 shadow p-2 rounded-lg hover:bg-gray-300 active:bg-gray-400 cursor-pointer"}
                   onClick={() => {
                       window.scrollTo({top: 0, behavior: "smooth"});
                   }}>Haut de page</a>
            </div>
            <section className="pb-10 bg-fond p-4">
                <div className={"container mx-auto"}>
                    <h2 className={"text-purple-300 font-bold text-center m-10"}>Quelques reportages</h2>
                    <div className={"grid grid-cols-1 md:grid-cols-3 text-center text-purple-300 gap-5"}>
                        <YoutubeVideos id={"M7RTYiXeNUg"} name={"Harcelés à l'école, ils sortent du silence"}/>
                        <YoutubeVideos id={"zDLUgB6wTT4"} name={"Mourir à 13 ans"}/>
                        <YoutubeVideos id={"yabJCaFmDc0"} name={"Ca Commence Aujourd'hui"}/>
                    </div>
                </div>
            </section>
        </PageStructure>
    );
};

export default CourtsMetrages;
