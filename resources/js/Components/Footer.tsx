import React from 'react';
import { Link } from '@inertiajs/react';
import { accueil, contacts } from '@/routes';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-r from-red-900 to-red-400 text-white">
            <div className="container mx-auto px-4 py-8">
                {/* Liens principaux */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-white/30">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Link
                            href={accueil()}
                            className="text-xl font-bold text-white"
                        >
                            Harcèlement
                        </Link>
                        <a
                            href="https://www.education.gouv.fr/non-au-harcelement/politique-de-lutte-contre-le-harcelement-l-ecole-289530"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/90 hover:text-white hover:underline transition-colors"
                        >
                            Agir contre le harcèlement à l'école
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            href={contacts()}
                            className="text-sm text-white/90 hover:text-white transition-colors"
                        >
                            Nous contacter
                        </Link>
                        <a
                            href="tel:3018"
                            className="flex items-center gap-2 text-sm font-medium text-red-600 bg-white px-3 py-1.5 rounded-lg hover:bg-white/90 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            3018
                        </a>
                    </div>
                </div>

                {/* Copyright et liens légaux */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                    <p className="text-sm text-white/80">
                        © {currentYear} Harcèlement. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                        <a href="#" className="hover:text-white transition-colors">
                            Mentions légales
                        </a>
                        <span className="text-white/50">•</span>
                        <a href="#" className="hover:text-white transition-colors">
                            Politique de confidentialité
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
