import {PageProps} from '@/types';
import PageStructure from "@/Components/PageStructure";

const Welcome = ({auth, laravelVersion}: PageProps<{laravelVersion: string}>) => {


    return (
        <PageStructure auth={auth.user} title={"Accueil"} className={"container mx-auto"}>
            <div className='flex justify-center container mx-auto'>
                <h1 className='m-6'>Aide au harcèlement</h1>
            </div>
            <p className={"p-2 md:p-0 container mx-auto"}>Bienvenue sur mon site d'aide contre le harcèlement scolaire. Vous pourrez y
                retrouver différents éléments qui évoquent le sujet, notamment des clips ainsi que des courts
                métrages.</p>
            <section className="md:grid grid-cols-2 gap-3 my-2">
                <p className={"bg-red-500 text-white p-2"}>
                    Le harcèlement scolaire touche près d'1 personne sur 10 <br/>
                    Vous êtes témoin ? Victime ? Parlez-en autour de vous. <br/>
                    Le harcèlement est puni par la loi.
                </p>
                <span>{laravelVersion}</span>
            </section>
        </PageStructure>
    );
}

export default Welcome;
