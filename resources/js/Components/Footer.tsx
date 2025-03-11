import React from 'react';

const Footer = () => {
    return (
        <footer className={"text-white bg-fond pb-5"}>
            <div className={"container mx-auto"}>
                <a href="https://www.education.gouv.fr/non-au-harcelement/politique-de-lutte-contre-le-harcelement-l-ecole-289530"
                   target={"_blank"} className={"hover:underline mb-5"}>
                    Agir contre le harcèlement à l'école
                </a>
            </div>
        </footer>
    );
};

export default Footer;
