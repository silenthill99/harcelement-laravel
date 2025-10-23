import React, {ReactNode} from 'react';
import {SharedData} from "@/types";
import {usePage} from "@inertiajs/react";
import {SidebarProvider} from "@/Components/ui/sidebar";

type AppShellProps = {
    children: ReactNode,
    variant?: 'header' | "sidebar"
}

function AppShell({children, variant = 'header'}: AppShellProps) {
    const isOpen = usePage<SharedData>().props.sidebarOpen;

    if (variant === 'header') {
        return <div className={"flex min-h-screen w-full flex-col"}>{children}</div>
    }

    return (
        <SidebarProvider defaultOpen={isOpen}>{children}</SidebarProvider>
    );
}

export default AppShell;
