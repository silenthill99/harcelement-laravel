import React from 'react';
import {PageProps} from "@/types";
import Header from "@/Components/Header";
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer";

const Contacts = ({auth}: PageProps) => {
    return (
        <section className={"min-h-screen flex flex-col"}>
            <Head title={"Nous contacter"}/>
            <Header auth={auth.user}/>
            <main className={"grow container mx-auto"}>
                <h1>Contacts</h1>
                <form action="" method="get">
                    <label htmlFor="">Sujet de votre demande</label> <br/>
                    <input type="text" placeholder="Quel est le sujet ?"/> <br/>
                    <input type="email" placeholder="Votre email"/> <br/>
                    <textarea cols={22} rows={5} placeholder="Votre message"
                              className="resize-none block border"></textarea>
                    <input type="submit" value="Envoyer"
                           className="bg-blue-700 text-white m-0 duration-300 cursor-pointer hover:p-5 hover:bg-gray-500"/>
                </form>
            </main>
            <Footer />
        </section>
    );
};

export default Contacts;
