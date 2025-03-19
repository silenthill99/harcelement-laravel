import React from 'react';
import PageStructure from "@/Components/PageStructure";
import {PageProps} from "@/types";

const Forum = ({auth}: PageProps) => {
    return (
        <PageStructure auth={auth.user} title={"Le forum"} className={"container mx-auto flex justify-center items-center"}>
            <p className={"text-gray-500"}>Le forum n'est actuellement pas disponible. Merci de votre compréhension</p>
        </PageStructure>
    );
};

export default Forum;
