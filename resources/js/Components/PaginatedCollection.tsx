import {PaginatedProps} from "@/types";

type Props = {
    pages: PaginatedProps<unknown>
}

import React, {ComponentPropsWithoutRef} from 'react';
import {Button} from "@/Components/ui/button";
import {router} from "@inertiajs/react";

const PaginatedCollection = ({pages, ...props}: Props & ComponentPropsWithoutRef<typeof Button>) => {
    return (
        pages.links.map((link, index) => (
            <Button
                key={index}
                onClick={() => {router.visit(link.url)}}
                disabled={!link.url || link.active}
                dangerouslySetInnerHTML={{__html: link.label}}
                {...props}
            />
        ))
    );
};

export default PaginatedCollection;
