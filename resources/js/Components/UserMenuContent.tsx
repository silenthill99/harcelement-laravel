import {User} from "@/types";
import React from 'react';
import {Link, router} from "@inertiajs/react";
import {useMobileNavigation} from "@/hooks/use-mobile-navigation";
import {
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator
} from "@/Components/ui/dropdown-menu";
import UserInfo from "@/Components/UserInfo";
import profile from "@/routes/profile";
import {LogOut, Settings} from "lucide-react";
import {logout} from "@/routes";

interface UserMenuContentProps {
    user: User;
}

const UserMenuContent = ({user}: UserMenuContentProps) => {
    const cleanup = useMobileNavigation();

    const handleLogout = () => {
        cleanup();
        router.flushAll();
    };
    return (
        <>
            <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <UserInfo user={user} showEmail={true}/>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                    <Link className="block w-full" href={profile.edit()} as="button" prefetch onClick={cleanup}>
                        <Settings className="mr-2"/>
                        Settings
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>
            <DropdownMenuItem asChild>
                <Link className="block w-full" method="post" href={logout()} as="button" onClick={handleLogout}>
                    <LogOut className="mr-2"/>
                    Log out
                </Link>
            </DropdownMenuItem>
        </>
    )
};

export default UserMenuContent;
