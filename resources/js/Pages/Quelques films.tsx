import React from 'react';
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ASilentVoice from "@/../images/a-silent-voice.jpg"
import {YoutubeVideos} from "@/Components/YoutubeVideos";

const QuelquesFilms = ({auth}: PageProps) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Head title={"Quelques films"}/>
            <Header auth={auth.user}/>
            <main className={"grow"}>
                <h1 className="text-center">Quelques films</h1>
                <section className="bg-[#660000] text-white">
                    <div className={"gap-2 grid md:grid-cols-2 p-5 container mx-auto"}>
                        <h2 className="underline text-center">A Silent voice</h2>
                        <img src={ASilentVoice} alt="" className="max-w-full h-auto mx-auto row-span-3 border-4"/>
                        <p className="text-justify">Shoya Ishida était autrefois un jeune garçon reconnu comme étant la
                            terreur
                            de son école. Tout va basculer lors de l'arrivée de Shoko Nishimiya dans sa classe, une jeune
                            fille
                            sourde. Tout le londe se prends d'affection pour Shoko, sauf Shoya qui va se mettre à la
                            harceler, à
                            tel point que Shoko se voit obligé de changer d'école. C'est alors que tout le monde se retourne
                            contre Shoya.<br/>5 ans plus tard, lors de son entrée au lycée, il a donc bien changé et est
                            passé
                            de status de chef de file à victime, ayant très mauvaise réputation, à cause du harcèlement
                            qu'il a
                            causé à laa jeune fille, se trouvant ainsi sans amis. Il n'a alors plus qu'une idée en tête :
                            retrouver Shoko afin de lui demander pardon.</p>
                        <YoutubeVideos id="0MelIAXhyLc" name="Bande annonce" className={"flex flex-col items-center"}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </section>
    );
};

export default QuelquesFilms;
