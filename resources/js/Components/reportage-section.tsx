import React from 'react';
import {PencilIcon, Plus, TrashIcon} from "lucide-react";
import {Link, router} from "@inertiajs/react";
import reportage from "@/routes/reportage";
import {Button} from "@/Components/ui/button";
import ReportageController from "@/actions/App/Http/Controllers/ReportageController";
import {Reportage} from "@/types";
import axios from "axios";
import {YoutubeVideos} from "@/Components/YoutubeVideos";
import {getVideoId} from "@/Components/getVideoId";

type Props = {
    can_create: boolean;
    reportages: Reportage[];
}

const ReportageSection = ({can_create, reportages}: Props) => {

    async function ajaxDelete(reportage: Reportage){
        if (!confirm("Voulez-vous vraiment supprimer ce reportage ?")) return;
        try {
            await axios.delete(ReportageController.destroy({reportage: reportage}).url)
            router.reload({ only: ['reportages'] })
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <section className="py-12 bg-linear-to-r from-red-900 to-red-400">
            <div className="container mx-auto px-4 relative">
                {can_create && (
                    <Link href={reportage.create()} className={'absolute top-5 left-5 bg-white/20 hover:bg-white/30 w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200'}>
                        <Plus className={"text-white size-5"}/>
                    </Link>
                )}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Quelques reportages
                    </h2>
                    <p className="text-white/80">
                        Des témoignages et documentaires pour mieux comprendre
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reportages.length === 0 ? (
                        <p className={"text-white"}>Aucun reportages actuellement</p>
                    ) : (
                        reportages.map((reportage) => (
                            <div key={reportage.id} className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group">
                                {reportage.can_update && (
                                    <Button variant={"secondary"} className={"absolute top-5 left-5 size-8 rounded-full hidden group-hover:flex"}
                                            onClick={() => router.visit(ReportageController.edit(reportage))}
                                    >
                                        <PencilIcon/>
                                    </Button>
                                )}
                                {reportage.can_delete && (
                                    <button className={"absolute top-5 right-5 bg-red-500 w-8 h-8 hidden group-hover:flex items-center justify-center rounded-full"} onClick={() => ajaxDelete(reportage)}>
                                        <TrashIcon width={16} height={16}/>
                                    </button>
                                )}
                                <div className="aspect-video rounded-lg overflow-hidden mb-3">
                                    <YoutubeVideos id={getVideoId(reportage.url)} name={reportage.title} showTitle={false} className="w-full h-full"/>
                                </div>
                                <h3 className="text-white font-semibold">{reportage.title}</h3>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>

    );
};

export default ReportageSection;
