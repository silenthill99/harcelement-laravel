import React, {FormEvent, useState} from 'react';
import PageStructure from "@/Components/PageStructure";
import { SharedData} from "@/types";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {useForm, usePage} from "@inertiajs/react";
import {Button} from "@/Components/ui/button";

type FormProps = {
    title: string,
    link: string
}

const AddVideo = () => {

    const {auth} = usePage<SharedData>().props

    const {data, setData, post, reset, errors} = useForm<Required<FormProps>>({
        title: '',
        link: '',
    });

    const [localError, setLocalError] = useState<string | null>(null);

    const isValidUrl = (url: string) => {
        return url.startsWith("https://www.youtube.com") || url.startsWith("www.youtube.com") || url.startsWith("youtube.com");
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!isValidUrl(data.link)) {
            setLocalError("La vidéo doit être sur youtube !");
            return;
        }

        setLocalError(null)

        post(route('videos.store'), {
            onFinish: () => reset()
        })
    }

    return (
        <PageStructure auth={auth.user} title={"Add video"} className={"container mx-auto p-5 md:p-4"}>
            <form method={"POST"} onSubmit={handleSubmit}>
                <Label htmlFor={"title"}>Titre de la vidéo</Label>
                <Input
                    placeholder={"Titre de l'article"}
                    name="title"
                    id="title"
                    value={data.title}
                    onChange={(e) => {setData("title", e.target.value)}}
                    required
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                <br/>
                <Label htmlFor={"link"}>Lien de la vidéo</Label>
                <Input
                    placeholder={"Lien Youtube"}
                    name="link"
                    id="link"
                    value={data.link}
                    onChange={(e) => {setData('link', e.target.value)}}
                    required
                />
                {localError && <p className="text-red-500 text-sm">{localError}</p>}
                {errors.link && <p className="text-red-500 text-sm">{errors.link}</p>}
                <br/>
                <Button type={"submit"} className={"cursor-pointer"}>Valider</Button>
            </form>
        </PageStructure>
    );
};

export default AddVideo;
