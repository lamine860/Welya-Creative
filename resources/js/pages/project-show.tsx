import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';

export default function ProjectShow() {
    return (
        <FrontLayout>
            <div className="min-h-[80vh] py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp>
                        <div className="mb-6 flex flex-wrap items-center gap-4">
                            <span className="inline-block rounded-full border px-3 py-2 text-sm uppercase">
                                Branding
                            </span>
                            <span className="inline-block rounded-full border px-3 py-2 text-sm uppercase">
                                Design graphique
                            </span>
                            <span className="inline-block rounded-full border px-3 py-2 text-sm uppercase">
                                Site vitrine
                            </span>
                        </div>
                    </SlideUp>
                    <SlideUp>
                        <h1 className="mb-6 text-3xl font-bold uppercase md:text-5xl">
                            Nimbe Food
                        </h1>
                    </SlideUp>
                    <SlideUp>
                        <p className="mb-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                            Nimba Foods est une marque fictive spécialisée dans
                            la transformation et la distribution de produits
                            alimentaires locaux.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <img
                            src="/images/projects/nimba-food-mockup-desktop-01.jpg"
                            alt="Nimba mobile mock up"
                            className="mb-6 w-full max-w-5xl rounded-xl"
                        />
                    </SlideUp>
                    <SlideUp>
                        <p className="mb-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                            L’objectif était de créer une identité de marque
                            moderne et rassurante, capable de valoriser des
                            produits locaux tout en inspirant confiance.
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <h3 className="h3 mb-3 text-2xl font-bold uppercase">
                            Travail réalisé
                        </h3>
                    </SlideUp>
                    <SlideUp>
                        <ul className="text-lg text-muted-foreground md:text-xl">
                            <li>
                                - Création du logo et de l’identité visuelle
                            </li>
                            <li>
                                - Définition de la palette de couleurs &
                                typographies
                            </li>
                            <li>
                                - Design d’un site vitrine moderne et responsive
                            </li>
                            <li>
                                - Mise en avant des produits et des valeurs de
                                la marque
                            </li>
                        </ul>
                    </SlideUp>
                </div>
            </div>
        </FrontLayout>
    );
}
