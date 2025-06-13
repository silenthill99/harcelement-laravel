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
                <Button className={"self-center"} onClick={() => {
                    router.visit(route('videos-show'))
                }}>Ajouter une vidéo</Button>
                <p className="text-center">Sur cette page, vous y trouverez toute une floppée de courts métrages
                    évoquant le
                    harcèlement scolaire. Néanmoins, il faut savoir qu'en raison du sujet qui est très délicat,
                    certains
                    d'entre eux finissent mal.</p>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
                    {videos.map((video) => (
                        <YoutubeVideos id={video.link.replace("https://www.youtube.com/watch?v=", "")} name={video.title} className={"flex flex-col items-center"}/>
                    ))}
                    <YoutubeVideos id="QcV-r8FpnyU" name="AGIS! Court-métrage contre le harcèlement"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="vpbe_Aoihjk"
                                   name="Un jeu soi-disant marrant" className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="PYLMLcVMXrQ"
                                   name="RESTER DEBOUT" className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="LZNuM_AMNQc" name="PUZZLE - COURT-MÉTRAGE 2021"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="6FMoiGghce4" name="GRAVE ! (Harcèlement scolaire)"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="UCLHuEYHlBA"
                                   name="Option AIS - Couleur alcool" className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="NekbISTowB0" name="SAVONNETTE - Court Métrage Harcèlement Scolaire"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="sQhBRcNxayw" name="Film sur le harcelement scolaire - Lisa"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="4mx8KIU0xyY"
                                   name='HARCÈLEMENT Court-métrage film complet'
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="rcJf-tgknsY"
                                   name="Parle. - Court-métrage sur le harcèlement scolaire"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="lq_rIomTOoA"
                                   name="Même pas en rêve ! Lycée Ernest Ferroul - Non au Harcèlement"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="AjCKSGUy148"
                                   name={"Court métrage \"L'indifférence tue\" prix \"Non au harcèlement\""}
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="HwORszEu3ig" name="Silence toxique. Harcèlement scolaire."
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="k5aaghD6hKA" name="Une Nouvelle Chance - Harcèlement scolaire"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="ZiW08jC4P5s" name="PRIX COUP DE CŒUR : Non au harcèlement CM2 Leroy Rostand"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="gX--7YGl-iE" name="briser le silence"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="Bg9FR4IrQwk"
                                   name="Et si ça s'arrêtait" className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="JT3odVY4CmU"
                                   name="Le Cercle, court métrage sur le harcèlement | Ville de Mulhouse"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="7Cs5ggjnSrk" name="CAUCHEMARS." className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="eKhJEGYC30U"
                                   name="Pourquoi t'as fait ça !?" className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="WoJtIQ2B1lU" name="C'est envoyé" className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="GRSxeC8F9wI" name="Et si c'était moi - prévention racket"
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id="p6-_PkQx4Yg" name={"L'école du silence"}
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id={"1q9CUZWGrcY"} name={"Courage"} className={"flex flex-col items-center"}/>
                    <YoutubeVideos id={"9lsbivUrTac"} name={"HARCÈLEMENT SCOLAIRE : Film dénonciateur"}
                                   className={"flex flex-col items-center"}/>
                    <YoutubeVideos id={"Au481-cDMNw"} name={"Rédemption"} className={"flex flex-col items-center"}/>
                    <YoutubeVideos id={"uMSzJej4MI8"} name={"A bout de souffle"} className={"flex flex-col items-center"}/>
                    <YoutubeVideos id={"hWr0-zjoHVI"} name={"Ca va aller, le film"} className={"mx-auto"}/>
                </section>
                <a className={"fixed left-5 bottom-5 bg-white border border-gray-400 shadow p-2 rounded-lg hover:bg-gray-300 " +
                    "active:bg-gray-400"}
                   href={"#haut-de-page"}>Haut de page</a>
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
