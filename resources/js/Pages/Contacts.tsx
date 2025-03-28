import React, {FormEvent} from 'react';
import {PageProps} from "@/types";
import PageStructure from "@/Components/PageStructure";
import {useForm} from "@inertiajs/react";

type ContactForm = {
    subject: string;
    email: string;
    message: string;
}

const Contacts = ({auth}: PageProps) => {

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
        <PageStructure auth={auth.user} title={"Nous contacter"} className={"container mx-auto"}>
            <h1>Contacts</h1>
            <form action="" method="post" onSubmit={submit}>
                <label htmlFor="">Sujet de votre demande</label> <br/>
                <input
                    type="text"
                    placeholder="Quel est le sujet ?"
                    name="subject"
                    value={data.subject}
                    onChange={(event) => setData("subject", event.target.value)}
                /> <br/>
                <input
                    type="email"
                    placeholder="Votre email"
                    name="email"
                    value={data.email}
                    onChange={(event) => setData("email", event.target.value)}
                /> <br/>
                <textarea
                    cols={22}
                    rows={5}
                    placeholder="Votre message"
                    className="resize-none block border"
                    value={data.message}
                    onChange={(event) => setData("message", event.target.value)}
                ></textarea>
                <input type="submit" value="Envoyer"
                       className="bg-blue-700 text-white m-0 duration-300 cursor-pointer hover:p-5 hover:bg-gray-500 my-5"/>
            </form>
        </PageStructure>
    );
};

export default Contacts;
