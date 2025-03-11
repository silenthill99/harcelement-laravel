import React from 'react';
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer";
import {PageProps} from "@/types";
import Header from "@/Components/Header";
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import {DeezerMusics} from "@/Components/DeezerMusics";
import Lili from "../../images/lili est harcelée à l'école.jpg"

const Bonus = ({auth}: PageProps) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Head title={"Bonus"}/>
            <Header auth={auth.user}/>
            <main className={"grow"}>
                <section className={"container mx-auto"}>
                    <YoutubeVideos id="utkuLf8mE6k" name='INFLUENCEUSE - Court Métrage' className={"m-5 md:m-0 flex flex-col items-center"}/>
                    <p className={"text-justify md:text-center px-5 md:p-0"}>J'aimerais partager avec vous ce petit court métrage qui n'a rien à voir avec le harcèlement,<br/>mais
                        il reste très intéressant car il démontre bien le danger que peuvent représenter les réseaux
                        sociaux.</p>
                    <DeezerMusics type="track" id="913858" className={"w-1/2 md:w-auto mx-auto"}/>
                </section>
                <h1 className={"text-center py-5"}>Quelques livres</h1>
                <div className={"border-y-2 border-black"}>
                    <div className={"container mx-auto grid grid-cols-2 p-5 gap-2"}>
                        <img src={Lili} alt="" className={"w-1/2 border border-gray-400 relative top-0 left-1/2 -translate-x-1/2"}/>
                        <div className={"text-center"}>
                            <h2 className={"underline"}>Lili est harcelée à l'école</h2>
                            <p className={"relative top-1/2 -translate-y-1/2"}>Valentine et ses copines ont trouvé un nouveau jeu : ridiculiser Lili, lui faire subir des
                                brimades, dire du mal d'elle... Lili se retrouve seuls, la peur au ventre.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </section>
    );
};

export default Bonus;
