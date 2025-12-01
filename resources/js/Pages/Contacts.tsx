import React, {useEffect} from 'react';
import PageStructure from "@/Components/PageStructure";
import {Form, usePage} from "@inertiajs/react";
import {Textarea} from "@/Components/ui/textarea";
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {SharedData} from "@/types";
import contacts from "@/routes/contacts";
import ErrorMessage from "@/Components/ErrorMessage";
import {toast} from "sonner";
import {Toaster} from "@/Components/ui/sonner";

const Contacts = () => {

    const {flash} = usePage<SharedData>().props

    useEffect(function () {
        flash?.success && (
            toast(flash.success, {
                position: "top-center",
            })
        )
    }, [flash])

    return (
        <PageStructure title={"Nous contacter"} className={"container mx-auto"}>
            <h1>Contacts</h1>
            <Toaster/>
            <Form {...contacts.store.form()} resetOnSuccess={true}>
                {({errors}) => (
                    <div className={"space-y-4"}>
                        <div>
                            <Label htmlFor="">Sujet de votre demande</Label>
                            <Input
                                type="text"
                                placeholder="Quel est le sujet ?"
                                name="subject"
                                aria-invalid={!!errors.subject}
                            />
                            {errors.subject && (
                                <ErrorMessage message={errors.subject}/>
                            )}
                        </div>
                        <Input
                            type="email"
                            placeholder="Votre email"
                            name="email"
                        />
                        <Textarea
                            placeholder="Votre message"
                            className="resize-none block border h-100"
                            name={"message"}
                        ></Textarea>
                        <Input type="submit" value="Envoyer"
                               className="bg-blue-700 text-white m-0 duration-300 cursor-pointer hover:bg-gray-500 w-min"/>
                    </div>
                )}
            </Form>
        </PageStructure>
    );
};

export default Contacts;
