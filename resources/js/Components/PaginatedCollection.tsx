import {PaginatedProps} from "@/types";

type Props = {
    props: PaginatedProps<unknown>
}

import React from 'react';
import {Button} from "@/Components/ui/button";
import {router} from "@inertiajs/react";

const PaginatedCollection = ({props}: Props) => {
    return (
        props.links.map((link, index) => (
            <Button
                key={index}
                onClick={() => {router.visit(link.url)}}
                disabled={!link.url || link.active}
                dangerouslySetInnerHTML={{__html: link.label}}
            />
        ))
    );
};

export default PaginatedCollection;
