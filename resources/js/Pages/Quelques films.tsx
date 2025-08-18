import React from 'react';
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import PageStructure from "@/Components/PageStructure";

const QuelquesFilms = () => {
    return (
        <PageStructure title={"Quelques films"}>
            <h1 className="text-center">Quelques films</h1>
            <section className="bg-[#660000] text-white">
                <div className={"gap-2 grid md:grid-cols-2 p-5 container mx-auto"}>
                    <h2 className="underline text-center">A Silent voice</h2>
                    <img src="/images/a-silent-voice.jpg" alt="" className="max-w-full h-auto mx-auto row-span-3 border-4"/>
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
                        causé à la jeune fille, se trouvant ainsi sans amis. Il n'a alors plus qu'une idée en tête :
                        retrouver Shoko afin de lui demander pardon.</p>
                    <YoutubeVideos id="0MelIAXhyLc" name="Bande annonce" className={"flex flex-col items-center"}/>
                </div>
            </section>
            <section className="gap-2 grid md:grid-cols-2 container mx-auto p-5 text-center">
                <h1 className={"underline"}>Unfriended</h1>
                <img src="/images/unfriended.jpg" alt="Unfriended" className={"max-w-full h-auto mx-auto row-span-3"} width={488}/>
                <p className={"text-justify"}>
                    Lors d'une conversation sur skype, un groupe d'amis est pris en grippe par une l'âme de Laura Barns,
                    Une de leurs amies s'étant suicidée suite au cyber-harcèlement qu'elle a subit.
                </p>
                <YoutubeVideos id={"JlzyAo00yBU"} name={"Bande-annonce"} className={"flex flex-col items-center"}/>
            </section>
        </PageStructure>
    );
};

export default QuelquesFilms;
