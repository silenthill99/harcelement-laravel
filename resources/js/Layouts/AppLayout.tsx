import React, {ReactNode} from 'react';
import {BreadcrumbItem} from "@/types";
import AppLayoutTemplate from "@/Components/AppLayoutTemplate";

interface AppLayoutProps {
    children: ReactNode
    breadcrumbs?: BreadcrumbItem[]
}

export default ({children, breadcrumbs, ...props}: AppLayoutProps) => {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppLayoutTemplate>
    )
}
