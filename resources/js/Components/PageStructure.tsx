import React, {PropsWithChildren} from 'react';
import {PageProps} from "@/types";
import {Head} from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const PageStructure = ({children, auth, title, className}: PropsWithChildren<PageProps> & {
    title: string,
    className?: string
}) => {
    return (
        <>
            <section className={"min-h-screen flex flex-col"}>
                <Head title={title}/>
                <Header auth={auth.user}/>
                <main className={`grow ${className}`}>
                    {children}
                </main>
                <Footer/>
            </section>
        </>
    );
};

export default PageStructure;
