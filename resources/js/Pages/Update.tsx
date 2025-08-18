import React, {FormEvent} from 'react';
import PageStructure from "@/Components/PageStructure";
import {Label} from "@/Components/ui/label";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
import {useForm, usePage} from "@inertiajs/react";
import {SharedData} from "@/types";

type FormProps = {
    id: number;
    title: string,
    link: string,
}

const Update = () => {

    const {video} = usePage<SharedData & {video: FormProps}>().props

    const {data, setData, post, reset} = useForm<Required<FormProps>>({
        id: video.id,
        title: video.title,
        link: video.link,
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('videos.update', video.id), {
            onFinish: () => reset()
        })
    }

    return (
        <PageStructure title={"Mettre à jour"} className={"container mx-auto p-5 md:p-4"}>
            <form method={"POST"} onSubmit={handleSubmit}>
                <Input type={"hidden"} value={data.id} onChange={(e) => setData("id", parseInt(e.target.value))}/>
                <Label htmlFor={"title"}>Titre de la vidéo</Label>
                <Input
                    placeholder={"Titre de la vidéo"}
                    name={"title"}
                    id={"title"}
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    required
                />
                <br/>
                <Label>URL de la vidéo</Label>
                <Input
                    type={"text"}
                    name={"link"}
                    id={"link"}
                    value={data.link}
                    onChange={(e) => setData("link", e.target.value)}
                    required
                />
                <br/>
                <Button type={"submit"}>Modifier</Button>
            </form>
        </PageStructure>
    );
};

export default Update;
