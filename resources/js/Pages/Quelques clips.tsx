import React from 'react';
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import Footer from "@/Components/Footer";
import {PageProps} from "@/types";

const QuelquesClips = ({auth}: PageProps) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Head title={"Quelques clips"}/>
            <Header auth={auth.user}/>
            <main className={"container mx-auto grow"}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 m-8'>
                    <YoutubeVideos id="Rp5U5mdARgY" name="Indochine - College Boy (Clip officiel)" className={"mx-auto text-center"}/>
                    <YoutubeVideos id="9JaVW9u-zrE" name="Keen'v - Petite Emilie ( clip officiel )" className={"mx-auto text-center"}/>
                    <YoutubeVideos id="6zUxsrJqg14" name="Maëlle - L'effet de masse (Clip Officiel)" className={"mx-auto text-center"}/>
                    <YoutubeVideos id="zgBEVbDzuu4" name="Soprano - Fragile (Clip officiel)" className={"mx-auto text-center"}/>
                    <YoutubeVideos id={"zSpLOlxy9nI"} name={"Kyo - Je cours"} className={"mx-auto text-center"}/>
                </div>
            </main>
            <Footer/>
        </section>
    );
};

export default QuelquesClips;
