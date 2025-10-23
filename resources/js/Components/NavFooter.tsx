import React, {ComponentPropsWithoutRef} from 'react';
import {SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton} from "@/Components/ui/sidebar";
import {NavItem} from "@/types";
import {Icon} from "lucide-react";

const NavFooter = ({items, className, ...props}: ComponentPropsWithoutRef<typeof SidebarGroup> & {
    items: NavItem[]
}) => {
    return (
        <SidebarGroup {...props} className={`group-data-[collapsible=icon]:p-0 ${className || ''}`}>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuButton
                            asChild
                            className={"text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100"}
                        >
                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                {item.icon && <Icon iconNode={item.icon} className="h-5 w-5" />}
                                <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};

export default NavFooter;
