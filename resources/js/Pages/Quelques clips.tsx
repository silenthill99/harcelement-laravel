import React from 'react';
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import {PageProps} from "@/types";
import PageStructure from "@/Components/PageStructure";

const QuelquesClips = ({auth}: PageProps) => {
    return (
        <PageStructure auth={auth} title={"Quelques clips"}
                       className={"grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto my-8"}>
            <YoutubeVideos id="Rp5U5mdARgY" name="Indochine - College Boy (Clip officiel)"
                           className={"mx-auto text-center"}/>
            <YoutubeVideos id="9JaVW9u-zrE" name="Keen'v - Petite Emilie ( clip officiel )"
                           className={"mx-auto text-center"}/>
            <YoutubeVideos id="6zUxsrJqg14" name="Maëlle - L'effet de masse (Clip Officiel)"
                           className={"mx-auto text-center"}/>
            <YoutubeVideos id="zgBEVbDzuu4" name="Soprano - Fragile (Clip officiel)" className={"mx-auto text-center"}/>
            <YoutubeVideos id={"zSpLOlxy9nI"} name={"Kyo - Je cours"} className={"mx-auto text-center"}/>
        </PageStructure>
    );
};

export default QuelquesClips;
