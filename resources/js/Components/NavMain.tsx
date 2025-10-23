import React from 'react';
import {NavItem} from "@/types";
import {Link, usePage} from "@inertiajs/react";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/Components/ui/sidebar";

const NavMain = ({items = []}: { items: NavItem[] }) => {
    const page = usePage();
    return (
        <SidebarGroup className={"px-2 py-0"}>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.href === page.url} tooltip={{children: item.title}}>
                            <Link href={item.href}>
                                {item.icon && <item.icon/>}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
};

export default NavMain;
