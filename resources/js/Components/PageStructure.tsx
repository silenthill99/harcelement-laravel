import React from 'react';
import {Head} from "@inertiajs/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const defaultDescription = "Un site pour venir en aide aux personnes victimes de harcèlement scolaire et inciter à libérer la parole.";

type StructureProps = {
    children: React.ReactNode;
    title: string;
    description?: string;
    className?: string;
}

const PageStructure = (props: StructureProps) => {
    const description = props.description || defaultDescription;

    return (
        <>
            <section className={"min-h-screen flex flex-col"}>
                <Head>
                    <title>{props.title}</title>
                    <meta head-key="description" name="description" content={description} />
                    <meta head-key="og:title" property="og:title" content={props.title} />
                    <meta head-key="og:description" property="og:description" content={description} />
                    <meta head-key="og:type" property="og:type" content="website" />
                    <meta head-key="twitter:card" name="twitter:card" content="summary" />
                    <meta head-key="twitter:title" name="twitter:title" content={props.title} />
                    <meta head-key="twitter:description" name="twitter:description" content={description} />
                </Head>
                <Header/>
                <main className={`grow ${props.className}`}>
                    {props.children}
                </main>
                <Footer/>
            </section>
        </>
    );
};

export default PageStructure;
