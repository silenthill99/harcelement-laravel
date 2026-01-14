import React, {useState, useEffect} from 'react';
import {Link, usePage} from "@inertiajs/react";
import {SharedData} from "@/types";
import {cn} from "@/lib/utils";
import {accueil, bonus, contacts, dashboard, films, forum, login, register} from "@/routes";
import clips from "@/routes/clips";
import videos from "@/routes/videos";

const navItemsButtons = [
    {
        name: "Accueil",
        link: accueil
    },
    {
        name: "Quelques clips",
        link: clips.index
    },
    {
        name: "Courts métrages",
        link: videos.index
    },
    {
        name: "Bonus",
        link: bonus
    },
    {
        name: "Quelques films",
        link: films
    },
    {
        name: "Nous contacter",
        link: contacts
    }
]

const Header = () => {
    const {auth} = usePage<SharedData>().props;
    const {url} = usePage()
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (link: string) => {
        if (link === '/') {
            return url === '/'
        }
        return url.startsWith(link)
    }

    return (
        <>
            {/* Menu mobile overlay - en dehors du header pour éviter les problèmes de z-index */}
            <div
                className={cn(
                    "lg:hidden fixed inset-0 z-[100] transition-all duration-300",
                    showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMenu(false)} />
                <nav
                    className={cn(
                        "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-red-600 to-red-700",
                        "transform transition-transform duration-300 ease-out",
                        "flex flex-col shadow-2xl",
                        showMenu ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <div className="flex items-center justify-between p-4 border-b border-white/20">
                        <span className="text-white font-bold text-lg">Menu</span>
                        <button
                            onClick={() => setShowMenu(false)}
                            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"/>
                                <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto py-4">
                        {navItemsButtons.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link()}
                                onClick={() => setShowMenu(false)}
                                className={cn(
                                    "block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors",
                                    isActive(item.link().url) && "bg-white/20 text-white font-medium"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href={forum()}
                            onClick={() => setShowMenu(false)}
                            className={cn(
                                "block px-6 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors",
                                isActive(forum.definition.url) && "bg-white/20 text-white font-medium"
                            )}
                        >
                            Forum
                        </Link>
                    </div>

                    <div className="p-4 border-t border-white/20 space-y-2">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                onClick={() => setShowMenu(false)}
                                className="block w-full text-center py-2.5 rounded-lg bg-white text-red-600 font-medium hover:bg-white/90 transition-colors"
                            >
                                Tableau de bord
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    onClick={() => setShowMenu(false)}
                                    className="block w-full text-center py-2.5 rounded-lg bg-white text-red-600 font-medium hover:bg-white/90 transition-colors"
                                >
                                    Se connecter
                                </Link>
                                <Link
                                    href={register()}
                                    onClick={() => setShowMenu(false)}
                                    className="block w-full text-center py-2.5 rounded-lg border border-white/50 text-white hover:bg-white/10 transition-colors"
                                >
                                    Créer un compte
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>

            <header
                className={cn(
                    "sticky top-0 z-50 transition-all duration-300",
                    "backdrop-blur-md bg-white/80 border-b border-white/20",
                    scrolled && "shadow-lg shadow-black/5 bg-white/90"
                )}
                id={"haut-de-page"}
            >
                {/* Menu mobile toggle */}
                <div className="lg:hidden flex items-center justify-between px-4 h-16">
                    <Link href={accueil()} className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                        Harcèlement
                    </Link>
                    <button
                        onClick={() => setShowMenu(!showMenu)}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <line x1="3" y1="12" x2="21" y2="12"/>
                            <line x1="3" y1="18" x2="21" y2="18"/>
                        </svg>
                    </button>
                </div>

                {/* Menu PC */}
            <nav className="hidden lg:flex items-center justify-between container mx-auto px-4 py-3">
                <div className="flex items-center gap-8">
                    <Link href={accueil()} className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Harcèlement
                    </Link>

                    <div className="flex items-center gap-1">
                        {navItemsButtons.map((item, index) => (
                            <Link
                                key={index}
                                href={item.link()}
                                className={cn(
                                    "relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    "text-gray-700 hover:text-red-600 hover:bg-red-50",
                                    isActive(item.link().url) && "text-red-600 bg-red-50"
                                )}
                            >
                                {item.name}
                                {isActive(item.link().url) && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-500" />
                                )}
                            </Link>
                        ))}
                        <Link
                            href={forum()}
                            className={cn(
                                "relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                "text-gray-700 hover:text-red-600 hover:bg-red-50",
                                isActive(forum.definition.url) && "text-red-600 bg-red-50"
                            )}
                        >
                            Forum
                            {isActive(forum.definition.url) && (
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-500" />
                            )}
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Tableau de bord
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                className="px-4 py-2 rounded-lg text-gray-700 font-medium text-sm hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                                Se connecter
                            </Link>
                            <Link
                                href={register()}
                                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Créer un compte
                            </Link>
                        </>
                    )}
                </div>
            </nav>
            </header>
        </>
    );
};

export default Header;
