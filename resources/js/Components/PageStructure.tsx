import React from 'react';
import {User} from "@/types";
import {Head} from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

type StructureProps = {
    children: React.ReactNode;
    auth: User;
    title: string;
    className?: string;
}

const PageStructure = (props: StructureProps) => {
    return (
        <>
            <section className={"min-h-screen flex flex-col"}>
                <Head title={props.title} />
                <Header auth={props.auth}/>
                <main className={`grow ${props.className}`}>
                    {props.children}
                </main>
                <Footer/>
            </section>
        </>
    );
};

export default PageStructure;
