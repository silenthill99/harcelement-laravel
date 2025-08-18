import React, {FormEvent} from 'react';
import PageStructure from "@/Components/PageStructure";
import {useForm} from "@inertiajs/react";
import {Textarea} from "@/Components/ui/textarea";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";

type ContactForm = {
    subject: string;
    email: string;
    message: string;
}

const Contacts = () => {
    const { data, setData, post, reset } = useForm<ContactForm>({
        subject: "",
        email: "",
        message: "",
    });

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post(route("contacts"), {
            onFinish: () => reset()
        })
    }

    return (
        <PageStructure title={"Nous contacter"} className={"container mx-auto"}>
            <h1>Contacts</h1>
            <form action="" method="post" onSubmit={submit}>
                <Label htmlFor="">Sujet de votre demande</Label>
                <Input
                    type="text"
                    placeholder="Quel est le sujet ?"
                    name="subject"
                    value={data.subject}
                    onChange={(event) => setData("subject", event.target.value)}
                /> <br/>
                <Input
                    type="email"
                    placeholder="Votre email"
                    name="email"
                    value={data.email}
                    onChange={(event) => setData("email", event.target.value)}
                /> <br/>
                <Textarea
                    placeholder="Votre message"
                    className="resize-none block border h-100"
                    value={data.message}
                    onChange={(event) => setData("message", event.target.value)}
                ></Textarea>
                <input type="submit" value="Envoyer"
                       className="bg-blue-700 text-white m-0 duration-300 cursor-pointer hover:p-5 hover:bg-gray-500 my-5"/>
            </form>
        </PageStructure>
    );
};

export default Contacts;
