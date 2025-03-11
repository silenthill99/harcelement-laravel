import {PageProps} from '@/types';
import {Head} from '@inertiajs/react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const Welcome = ({auth}: PageProps) => {


    return (
        <section className={"min-h-screen flex flex-col"}>
            <Head title="Accueil"/>
            <Header auth={auth.user}/>
            <main className={"grow container mx-auto"}>
                <div className='flex justify-center'>
                    <h1 className='m-6'>Aide au harcèlement</h1>
                </div>
                <p className={"p-2 md:p-0"}>Bienvenue sur mon site d'aide contre le harcèlement scolaire. Vous pourrez y
                    retrouver différents éléments qui évoquent le sujet, notamment des clips ainsi que des courts
                    métrages.</p>
                <section className="md:grid grid-cols-2 gap-3 my-2">
                    <p className={"bg-red-500 text-white p-2"}>
                        Le harcèlement scolaire touche près d'1 personne sur 10 <br/>
                        Vous êtes témoin ? Victime ? Parlez-en autour de vous. <br/>
                        Le harcèlement est puni par la loi.
                    </p>
                </section>
            </main>
            <Footer/>
        </section>
    );
}

export default Welcome;
