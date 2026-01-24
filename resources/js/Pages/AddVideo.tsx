import React from 'react';
import PageStructure from "@/Components/PageStructure";
import {Label} from "@/Components/ui/label";
import {Form} from "@inertiajs/react";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import VideoController from "@/actions/App/Http/Controllers/VideoController";

const AddVideo = () => {

    return (
        <PageStructure title={"Add video"} className={"container mx-auto p-5 md:p-4"}>
            <Form {...VideoController.store.form()}>
                {({errors}) => (
                    <div  className="space-y-4">
                        <div>
                            <Label htmlFor={"title"}>Titre de la vidéo</Label>
                            <Input
                                placeholder={"Titre de l'article"}
                                name="title"
                                id="title"
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                        </div>
                        <div>
                            <Label htmlFor={"link"}>Lien de la vidéo</Label>
                            <Input
                                placeholder={"Lien Youtube"}
                                name="link"
                                id="link"
                            />
                            {errors.link && <p className="text-red-500 text-sm">{errors.link}</p>}
                        </div>
                        <Button type={"submit"} className={"cursor-pointer"}>Valider</Button>
                    </div>
                )}
            </Form>
        </PageStructure>
    );
};

export default AddVideo;
