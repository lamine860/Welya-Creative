import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function Services() {
    return (
        <FrontLayout>
            <Head title="Services" />
            <header className="min-h-[50vh] pt-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp>
                        <h1 className="text-4xl leading-snug font-bold uppercase md:text-7xl">
                            Nos services
                        </h1>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-xl text-muted-foreground md:max-w-3xl md:text-2xl">
                            Nous créons des expériences numériques inoubliables
                            grâce à nos services haut de gamme.
                        </p>
                    </SlideUp>
                </div>
            </header>
            <section className="section bg-slate-100 py-16 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="space-y-16">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <SlideUp>
                                    <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                                        01
                                    </span>
                                </SlideUp>
                                <SlideUp>
                                    <span className="text-3xl font-bold uppercase">
                                        Solutions de stratégie de marque
                                    </span>
                                </SlideUp>
                            </div>
                            <div className="space-y-6">
                                <SlideUp>
                                    <p className="text-lg text-muted-foreground md:text-xl">
                                        Nous sommes passionnés par notre travail
                                        et par l'impact positif qu'il a sur nos
                                        clients. Forts de plus de 12 ans
                                        d'expérience, nous avons toujours fourni
                                        d'excellentes solutions web, offrant à
                                        nos clients une expérience de premier
                                        ordre.
                                    </p>
                                </SlideUp>
                                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Stratégie de marque</li>
                                            <li>+ Production Video</li>
                                            <li>+ Recherche et essais</li>
                                            <li>+ Conseil en ergonomie</li>
                                        </ul>
                                    </SlideUp>
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Direction artistique</li>
                                            <li>+ Conception graphique</li>
                                            <li>+ Création de contenu</li>
                                            <li>+ Web development</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-5">
                            <SlideUp className="md:col-span-3">
                                <img
                                    src="/images/teams/branding.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                            <SlideUp className="col-span-2">
                                <img
                                    src="/images/teams/branding-02.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                        </div>
                    </div>
                    <div className="space-y-16 pt-24">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <SlideUp>
                                    <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                                        02
                                    </span>
                                </SlideUp>
                                <SlideUp>
                                    <span className="text-3xl font-bold uppercase">
                                        Développement de sites web
                                    </span>
                                </SlideUp>
                            </div>
                            <div className="space-y-6">
                                <SlideUp>
                                    <p className="text-lg text-muted-foreground md:text-xl">
                                        Nous sommes passionnés par notre travail
                                        et par l'impact positif qu'il a sur nos
                                        clients. Forts de plus de 12 ans
                                        d'expérience, nous avons toujours fourni
                                        d'excellentes solutions web, offrant à
                                        nos clients une expérience de premier
                                        ordre.
                                    </p>
                                </SlideUp>
                                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Développement d'API</li>
                                            <li>+ Migration vers le cloud</li>
                                            <li>+ Recherche et essais</li>
                                            <li>+ Site web personnalisé</li>
                                        </ul>
                                    </SlideUp>
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ WordPress</li>
                                            <li>+ Laravel</li>
                                            <li>+ React</li>
                                            <li>+ VueJS</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-5">
                            <SlideUp className="md:col-span-3">
                                <img
                                    src="/images/teams/branding.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                            <SlideUp className="col-span-2">
                                <img
                                    src="/images/teams/branding-02.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                        </div>
                    </div>
                    <div className="space-y-16 pt-24">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <SlideUp>
                                    <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                                        03
                                    </span>
                                </SlideUp>
                                <SlideUp>
                                    <span className="text-3xl font-bold uppercase">
                                        Solutions de commerce électronique
                                    </span>
                                </SlideUp>
                            </div>
                            <div className="space-y-6">
                                <SlideUp>
                                    <p className="text-lg text-muted-foreground md:text-xl">
                                        Nous sommes passionnés par notre travail
                                        et par l'impact positif qu'il a sur nos
                                        clients. Forts de plus de 12 ans
                                        d'expérience, nous avons toujours fourni
                                        d'excellentes solutions web, offrant à
                                        nos clients une expérience de premier
                                        ordre.
                                    </p>
                                </SlideUp>
                                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Shipping features</li>
                                            <li>+ Payment gateways</li>
                                            <li>+ Categorization</li>
                                        </ul>
                                    </SlideUp>
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Solutions CMS</li>
                                            <li>+ Plateforme Ecommerce</li>
                                            <li>+ Apps development</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-5">
                            <SlideUp className="md:col-span-3">
                                <img
                                    src="/images/teams/branding.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                            <SlideUp className="col-span-2">
                                <img
                                    src="/images/teams/branding-02.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
