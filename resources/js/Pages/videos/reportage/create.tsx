import React from 'react';
import PageStructure from "@/Components/PageStructure";
import { Form } from "@inertiajs/react";
import ReportageController from "@/actions/App/Http/Controllers/ReportageController";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import InputError from "@/Components/InputError";
import {Button} from "@/Components/ui/button";
import { LoaderCircle } from "lucide-react";

const Create = () => {
    return (
        <PageStructure title={"Ajouter un reportage"} className={"flex flex-col justify-center container mx-auto"}>
            <h1 className={"mb-5"}>Ajouter un reportage</h1>
            <Form {...ReportageController.store.form()} className={"w-full"}>
                {({errors, processing}) => (
                    <div className={"space-y-4"}>
                        <div>
                            <Label htmlFor={"title"}>Titre de la vidéo</Label>
                            <Input
                                id={"title"}
                                name={"title"}
                                placeholder={"Titre de la vidéo"}
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div>
                            <Label htmlFor={"url"}>URL YouTube</Label>
                            <Input
                                id={"url"}
                                name={"url"}
                                placeholder={"URL YouTube"}
                            />
                            <InputError message={errors.url} />
                        </div>
                        <Button disabled={processing}>Envoyer {processing && (
                            <LoaderCircle className="animate-spin" />
                        )}</Button>
                    </div>
                )}
            </Form>
        </PageStructure>
    );
};

export default Create;
