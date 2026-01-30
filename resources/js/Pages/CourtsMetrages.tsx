import React from 'react';
import { YoutubeVideos } from "@/Components/YoutubeVideos";
import PageStructure from "@/Components/PageStructure";
import { Link, router, usePage } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { PaginatedProps, SharedData, Video } from "@/types";
import videos from "@/routes/videos";
import PaginatedCollection from "@/Components/PaginatedCollection";

type Props = {
    videoList: PaginatedProps<Video>
}

const CourtsMetrages = () => {
    const { auth, videoList, can_create } = usePage<SharedData & { can_create: boolean } & Props>().props;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <PageStructure title="Courts métrages">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-gray-50 to-gray-100 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Quelques courts métrages
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Sur cette page, vous trouverez une sélection de courts métrages évoquant le harcèlement scolaire.
                            En raison de la sensibilité du sujet, certains contenus peuvent être difficiles à regarder.
                        </p>
                        {auth.user && can_create && (
                            <Button
                                className="bg-linear-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                                onClick={() => router.visit(videos.create())}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                    <path d="M12 5v14M5 12h14"/>
                                </svg>
                                Ajouter une vidéo
                            </Button>
                        )}
                    </div>
                </div>
            </section>

            {/* Videos Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videoList.data.map((video) => (
                            <div key={video.id} className="relative group">
                                {auth.user && can_create && (
                                    <Link
                                        href={videos.edit({ video: video.id })}
                                        className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                            <path d="m15 5 4 4"/>
                                        </svg>
                                    </Link>
                                )}
                                <YoutubeVideos
                                    id={video.link.replace("https://www.youtube.com/watch?v=", "").replace("https://youtu.be/", "")}
                                    name={video.title}
                                    variant="card"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-10">
                        <PaginatedCollection pages={videoList} />
                    </div>
                </div>
            </section>

            {/* Reportages Section */}
            <section className="py-12 bg-linear-to-r from-red-900 to-red-400">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Quelques reportages
                        </h2>
                        <p className="text-white/80">
                            Des témoignages et documentaires pour mieux comprendre
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                            <div className="aspect-video rounded-lg overflow-hidden mb-3">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/M7RTYiXeNUg"
                                    title="Harcelés à l'école, ils sortent du silence"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <h3 className="text-white font-semibold">Harcelés à l'école, ils sortent du silence</h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                            <div className="aspect-video rounded-lg overflow-hidden mb-3">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/zDLUgB6wTT4"
                                    title="Mourir à 13 ans"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <h3 className="text-white font-semibold">Mourir à 13 ans</h3>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors">
                            <div className="aspect-video rounded-lg overflow-hidden mb-3">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/yabJCaFmDc0"
                                    title="Ça Commence Aujourd'hui"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                            <h3 className="text-white font-semibold">Ça Commence Aujourd'hui</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed left-5 bottom-5 bg-white border border-gray-200 shadow-lg p-3 rounded-full hover:bg-gray-50 hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer group"
                aria-label="Retour en haut"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 group-hover:text-red-600 transition-colors">
                    <path d="m18 15-6-6-6 6"/>
                </svg>
            </button>
        </PageStructure>
    );
};

export default CourtsMetrages;
