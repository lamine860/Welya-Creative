import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function ServiceList() {
    return (
        <FrontLayout>
            <Head title="Liste des services" />
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp className="mb-4">
                        <h1 className="hero-title max-w-4xl text-4xl leading-tight md:text-6xl">
                            Transformer votre Vision en Expériences Numériques
                            qui Captivent et Convertissent.
                        </h1>
                    </SlideUp>
                    <SlideUp delay={0.3}>
                        <p className="max-w-3xl text-lg text-muted-foreground">
                            Chez{' '}
                            <span className="font-bold">Welya Creative</span>,
                            nous créons des expériences numériques qui aident
                            les entreprises à aller plus vite, à avoir une image
                            plus nette et à se développer plus intelligemment.
                            De la stratégie à l'exécution, notre équipe fournit
                            une conception de bout en bout qui établit un lien
                            avec les utilisateurs et génère des résultats
                            mesurables.
                        </p>
                    </SlideUp>
                </div>
            </section>
            {/* <SlideUp>
                <ScrollVelocityContainer className="text-4xl font-bold md:text-5xl">
                    <ScrollVelocityRow baseVelocity={5} direction={1}>
                        &ensp; Agence de solution digital
                    </ScrollVelocityRow>
                </ScrollVelocityContainer>
            </SlideUp> */}
            {/* Branding Section */}
            <section className="bg-slate-50 py-16 dark:bg-background">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="flex items-center space-x-4">
                            <SlideUp>
                                <span className="text-gradient text-7xl font-bold text-transparent grayscale">
                                    01
                                </span>
                            </SlideUp>
                            <SlideUp>
                                <h2 className="heading-2">Branding</h2>
                            </SlideUp>
                        </div>
                        <div className="space-y-4">
                            <SlideUp>
                                <p className="text-muted-foreground">
                                    Nous sommes enthousiasmés par notre travail
                                    et par son impact positif sur nos clients.
                                    Forts de plus de 12 ans d'expérience, nous
                                    fournissons en permanence d'excellentes
                                    solutions web qui offrent à nos clients la
                                    meilleure expérience possible.
                                </p>
                            </SlideUp>
                            <div className="flex flex-col text-lg md:flex-row md:items-center md:space-x-16">
                                <SlideUp>
                                    <ul className="mb-4 space-y-1 md:mb-0">
                                        <li>+ Stratégie de marque</li>
                                        <li>+ Production vidéo</li>
                                        <li>+ Recherche et test</li>
                                        <li>+ Conseil en ergonomie</li>
                                    </ul>
                                </SlideUp>
                                <SlideUp>
                                    <ul className="space-y-1">
                                        <li>+ Direction artistique</li>
                                        <li>+ Conception graphique</li>
                                        <li>+ Création de contenu</li>
                                        <li>+ Développement web</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-8 py-6 md:grid-cols-3">
                        <img
                            src="/images/teams/branding-team.jpg"
                            className="col-span-2 w-full"
                            alt=""
                        />
                        <img
                            src="/images/teams/branding.jpg"
                            className="grayscale"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-16 dark:bg-background">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="flex items-center space-x-4">
                            <SlideUp>
                                <span className="text-gradient text-7xl font-bold text-transparent grayscale">
                                    01
                                </span>
                            </SlideUp>
                            <SlideUp>
                                <h2 className="heading-2">
                                    Développement de sites web
                                </h2>
                            </SlideUp>
                        </div>
                        <div className="space-y-4">
                            <SlideUp>
                                <p className="text-muted-foreground">
                                    Nous sommes enthousiasmés par notre travail
                                    et par son impact positif sur nos clients.
                                    Forts de plus de 12 ans d'expérience, nous
                                    fournissons en permanence d'excellentes
                                    solutions web qui offrent à nos clients la
                                    meilleure expérience possible.
                                </p>
                            </SlideUp>
                            <div className="flex flex-col text-lg md:flex-row md:items-center md:space-x-16">
                                <SlideUp>
                                    <ul className="mb-4 space-y-1 md:mb-0">
                                        <li>+ Développement d'API</li>
                                        <li>+ Migration vers le cloud</li>
                                        <li>+ PHP</li>
                                        <li>+ WordPress</li>
                                    </ul>
                                </SlideUp>
                                <SlideUp>
                                    <ul className="space-y-1">
                                        <li>+ Javascript</li>
                                        <li>+ Typecript</li>
                                        <li>+ Laravel</li>
                                        <li>+ ReactJS</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-8 py-6 md:grid-cols-3">
                        <img
                            src="/images/teams/branding-team.jpg"
                            className="col-span-2 w-full"
                            alt=""
                        />
                        <img
                            src="/images/teams/branding.jpg"
                            className="grayscale"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-16 dark:bg-background">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="flex items-center space-x-4">
                            <SlideUp>
                                <span className="text-gradient text-7xl font-bold text-transparent grayscale">
                                    03
                                </span>
                            </SlideUp>
                            <SlideUp>
                                <h2 className="heading-2">
                                    Solutions e-Commerce
                                </h2>
                            </SlideUp>
                        </div>
                        <div className="space-y-4">
                            <SlideUp>
                                <p className="text-muted-foreground">
                                    Nous sommes enthousiasmés par notre travail
                                    et par son impact positif sur nos clients.
                                    Forts de plus de 12 ans d'expérience, nous
                                    fournissons en permanence d'excellentes
                                    solutions web qui offrent à nos clients la
                                    meilleure expérience possible.
                                </p>
                            </SlideUp>
                            <div className="flex flex-col text-lg md:flex-row md:items-center md:space-x-16">
                                <SlideUp>
                                    <ul className="mb-4 space-y-1 md:mb-0">
                                        <li>+ Passerelles de paiement</li>
                                        <li>+ Migration vers le cloud</li>
                                        <li>+ Catégorisation</li>
                                        <li>+ Solutions CMS</li>
                                    </ul>
                                </SlideUp>
                                <SlideUp>
                                    <ul className="space-y-1">
                                        <li>+ Javascript</li>
                                        <li>+ Typecript</li>
                                        <li>+ Laravel</li>
                                        <li>+ ReactJS</li>
                                    </ul>
                                </SlideUp>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-8 py-6 md:grid-cols-3">
                        <img
                            src="/images/teams/branding-team.jpg"
                            className="col-span-2 w-full"
                            alt=""
                        />
                        <img
                            src="/images/teams/branding.jpg"
                            className="grayscale"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
