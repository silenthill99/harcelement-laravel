import React from 'react';
import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/Components/ui/sidebar";
import {Link} from "@inertiajs/react";
import {accueil, dashboard} from "@/routes";
import ApplicationLogo from "@/Components/ApplicationLogo";
import {NavItem} from "@/types";
import {LayoutGridIcon} from "lucide-react";
import NavMain from "@/Components/NavMain";
import NavFooter from "@/Components/NavFooter";
import NavUser from "@/Components/NavUser";

const mainNavItems: NavItem[] = [
    {
        title: "Dashboard",
        href: dashboard().url,
        icon: LayoutGridIcon
    }
]

const footerNavItems: NavItem[] = [

]

const AppSidebar = () => {

    return (
        <Sidebar variant={"inset"} collapsible={"icon"}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size={"lg"} asChild>
                            <Link href={accueil()}>
                                <ApplicationLogo/>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={mainNavItems}/>
            </SidebarContent>
            <SidebarFooter>
                <NavFooter items={footerNavItems} className={"mt-auto"}/>
                <NavUser/>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AppSidebar;
