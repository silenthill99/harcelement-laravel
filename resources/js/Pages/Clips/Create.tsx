import React, {FormEvent} from 'react';
import PageStructure from "@/Components/PageStructure";
import {useForm} from "@inertiajs/react";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Button} from "@/Components/ui/button";

type FormProps = {
    title: string;
    link: string;
}

const Create = () => {

    const {data, setData, post, reset, errors} = useForm<Required<FormProps>>({
        title: '',
        link: '',
    });

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route('clips.store'), {
            onSuccess: () => reset()
        })
    }

    return (
        <PageStructure title={"Ajouter un clip"} className={"w-1/2 mx-auto flex flex-col justify-center"}>
            <form onSubmit={onSubmit}>
                <Label htmlFor={"title"}>Titre</Label>
                <Input
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    placeholder={"Titre de la vidéo"}
                    id={"title"}
                    className={"mb-6"}
                />
                <Label htmlFor={"link"}>Lien</Label>
                <Input
                    value={data.link}
                    onChange={e => setData('link', e.target.value)}
                    placeholder={"Lien"}
                    id={"link"}
                    className={"mb-6"}
                />
                <Button>Envoyer</Button>
            </form>
        </PageStructure>
    );
};

export default Create;
