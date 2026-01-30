import React from 'react';
import PageStructure from "@/Components/PageStructure";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {Form, router, usePage} from "@inertiajs/react";
import {SharedData} from "@/types";
import videos from "@/routes/videos";
import InputError from "@/Components/InputError";

type FormProps = {
    id: number;
    title: string,
    link: string,
}

const Update = () => {

    const {video} = usePage<SharedData & { video: FormProps }>().props


    return (
        <PageStructure title={"Mettre à jour"} className={"container mx-auto p-5 md:p-4"}>
            <Form {...videos.update.form({video: video.id})} resetOnError={true} resetOnSuccess={true} >
                {({errors}) => (
                    <div className={"space-y-4"}>
                        <div>
                            <Label htmlFor={"title"}>Titre de la vidéo</Label>
                            <Input
                                placeholder={"Titre de la vidéo"}
                                defaultValue={video.title}
                                name={"title"}
                                id={"title"}
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div>
                            <Label>URL de la vidéo</Label>
                            <Input
                                type={"text"}
                                name={"link"}
                                defaultValue={video.link}
                                id={"link"}
                            />
                            <InputError message={errors.link} />
                        </div>
                        <div className={"space-x-2"}>
                            <Button type={"submit"}>Modifier</Button>
                            <Button variant={"ghost"} type={"button"} onClick={() => router.visit(videos.index())}>Annuler</Button>
                        </div>
                    </div>
                )}
            </Form>
        </PageStructure>
    );
};

export default Update;
