import React, {useState} from 'react';
import {Link, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {SharedData} from "@/types";
import {route} from "ziggy-js";


const Header = () => {
    const {auth} = usePage<SharedData>().props;
    const isActive = (link: string) => {
        return (
            `bg-red-500 text-white p-1 duration-300 hover:px-5 hover:bg-orange-500 hover:rounded-full ${route().current(link) && "underline"}`
        )
    }


    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={"border-b-2 bg-white h-20 lg:h-auto"} id={"haut-de-page"}>
            <PrimaryButton className={"lg:hidden relative left-1/2 top-1/2 -translate-1/2 mx-auto inline-block"}
                           onClick={() => setShowMenu(!showMenu)}>Menu</PrimaryButton>

            {/*Menu du téléphone*/}
            <nav
                className={`lg:hidden fixed top-0 bottom-0 left-0 right-0 bg-red-500 ${!showMenu ? "hidden" : "flex"}
                text-white flex-col items-center justify-center z-10`}>
                <button className={"absolute top-5 left-5"} onClick={() => {
                    setShowMenu(false)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
                <Link href={route("accueil")} className={"py-5 w-full text-center active:bg-red-900"}>Accueil</Link>
                <Link href={route("clips.index")} className={"py-5 w-full text-center active:bg-red-900"}>Quelques
                    clips</Link>
                <Link href={route('videos.index')} className={"py-5 w-full text-center active:bg-red-900"}>Courts
                    métrages</Link>
                <Link href={route("bonus")} className={"py-5 w-full text-center active:bg-red-900"}>Bonus</Link>
                <Link href={route("films")} className={"py-5 w-full text-center active:bg-red-900"}>Quelques
                    films</Link>
                <Link href={route("contacts")} className={"py-5 w-full text-center active:bg-red-900"}>Nous contacter</Link>
                <Link href={route("forum")} className={"py-5 w-full text-center active:bg-red-900"}>Forum</Link>
                <div className={"absolute top-full -translate-y-full left-2 text-sm"}>
                    {
                        auth.user ?
                            <Link href={route('register')}>Tableau de bord</Link> :
                            <div className={"flex gap-2"}>
                                <Link href={route("login")}>Se connecter</Link>
                                <Link href={route("register")}>Créer un compte</Link>
                            </div>
                    }
                </div>
            </nav>

            {/*Menu PC*/}
            <nav className={"hidden lg:flex justify-between items-center container mx-auto p-2"}>
                <div className={"flex gap-2"}>
                    <Link href={route("accueil")} className={isActive("accueil")}>Accueil</Link>
                    <Link href={route('clips.index')} className={isActive('clips.index')}>Quelques clips</Link>
                    <Link href={route("videos.index")} className={isActive("videos.index")}>Courts
                        métrages</Link>
                    <Link href={route("bonus")} className={isActive("bonus")}>Bonus</Link>
                    <Link href={route("films")} className={isActive("films")}>Quelques films</Link>
                    <Link href={route("contacts")} className={isActive("contacts")}>Nous contacter </Link>
                    <Link href={route('forum')} className={isActive('forum')}>Forum</Link>
                </div>
                {auth.user ?
                    <Link href={route('dashboard')} className={"hover:underline active:text-gray-400"}>Tableau de
                        bord</Link> :
                    <div className={"flex gap-2 justify-end"}>
                        <Link href={route('register')} className={"hover:underline active:text-gray-400"}>Créer un
                            compte</Link>
                        <Link href={route("login")} className={"hover:underline active:text-gray-400"}>Se
                            connecter</Link>
                    </div>}
            </nav>
        </header>
    );
};

export default Header;
