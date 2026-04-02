import React from 'react';
import PageStructure from "@/Components/PageStructure";
import {Form, router, usePage} from "@inertiajs/react";
import ReportageController from "@/actions/App/Http/Controllers/ReportageController";
import {Reportage} from "@/types";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import {Button} from "@/Components/ui/button";
import videos from "@/routes/videos";
import {LoaderCircleIcon} from "lucide-react";

const Edit = () => {
    const {reportage} = usePage<{reportage: Reportage}>().props

    function cancel() {
        if (confirm("Voulez-vous vraiment abandonner les modifications ?")) {
            router.visit(videos.index())
        }
        return;
    }

    return (
        <PageStructure title={"Modifier un reportage"} className={"container mx-auto flex flex-col justify-center"}>
            <Form {...ReportageController.update.form(reportage)} className={"w-full"}>
                {({errors, processing}) => (
                    <div className={"space-y-5"}>
                        <div>
                            <Label htmlFor={"title"}>Modifier le titre</Label>
                            <Input
                                id="title"
                                name="title"
                                defaultValue={reportage.title}
                                placeholder={"Modifier un titre"}
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div>
                            <Label htmlFor={"url"}>URL de la vidéo</Label>
                            <Input
                                id="url"
                                name="url"
                                defaultValue={reportage.url}
                                placeholder={"Modifier un URL"}
                            />
                            <InputError message={errors.url} />
                        </div>
                        <div className={"flex justify-between"}>
                            <Button disabled={processing}>Modifier {processing && <LoaderCircleIcon className={"animate-spin"}/> }</Button>
                            <Button type={"button"} variant={"link"} onClick={cancel} disabled={processing}>
                                Annuler
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </PageStructure>
    );
};

export default Edit;
