import React, {PropsWithChildren} from 'react';
import {BreadcrumbItem} from "@/types";
import AppShell from "@/Components/AppShell";
import AppSidebar from "@/Components/AppSidebar";
import AppContent from "@/Components/AppContent";
import AppSidebarHeader from "@/Components/AppSidebarHeader";

const AppLayoutTemplate = ({children, breadcrumbs = []}: PropsWithChildren<{breadcrumbs?: BreadcrumbItem[]}>) => {
    return (
        <AppShell variant={"sidebar"}>
            <AppSidebar/>
            <AppContent variant={"sidebar"}>
                <AppSidebarHeader breadcrumbs={breadcrumbs} />
                {children}
            </AppContent>
        </AppShell>
    );
};

export default AppLayoutTemplate;
