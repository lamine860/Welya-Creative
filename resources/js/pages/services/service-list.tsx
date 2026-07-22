import SlideUp from '@/components/animations/slide-up';
import PageHeader from '@/components/fronts/page-header';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

const paragraph = `Nous sommes enthousiasmés par notre travail et par son impact positif sur nos clients. Forts de plus de 12 ans d'expérience, nous fournissons en permanence d'excellentes solutions web qui offrent à nos clients la meilleure expérience possible.`;

const services = [
    {
        number: '01',
        title: 'Branding',
        left: [
            'Stratégie de marque',
            'Production vidéo',
            'Recherche et test',
            'Conseil en ergonomie',
        ],
        right: [
            'Direction artistique',
            'Conception graphique',
            'Création de contenu',
            'Développement web',
        ],
    },
    {
        number: '02',
        title: 'Développement de sites web',
        left: [
            "Développement d'API",
            'Migration vers le cloud',
            'PHP',
            'WordPress',
        ],
        right: ['Javascript', 'Typecript', 'Laravel', 'ReactJS'],
    },
    {
        number: '03',
        title: 'Solutions e-Commerce',
        left: [
            'Passerelles de paiement',
            'Migration vers le cloud',
            'Catégorisation',
            'Solutions CMS',
        ],
        right: ['Javascript', 'Typecript', 'Laravel', 'ReactJS'],
    },
];

export default function ServiceList() {
    return (
        <FrontLayout>
            <Head title="Liste des services" />
            <PageHeader
                eyebrow="Services"
                title="Transformer votre Vision en Expériences Numériques qui Captivent et Convertissent."
                description={
                    <>
                        Chez{' '}
                        <span className="font-bold text-foreground">
                            Welya Creative
                        </span>
                        , nous créons des expériences numériques qui aident les
                        entreprises à aller plus vite, à avoir une image plus
                        nette et à se développer plus intelligemment. De la
                        stratégie à l'exécution, notre équipe fournit une
                        conception de bout en bout qui établit un lien avec les
                        utilisateurs et génère des résultats mesurables.
                    </>
                }
            />
            <section className="bg-slate-50 py-16 md:py-24 dark:bg-background">
                <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 md:px-0">
                    {services.map((service) => (
                        <div key={service.number}>
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="flex items-center space-x-4">
                                    <SlideUp>
                                        <span className="text-gradient font-heading text-7xl font-bold">
                                            {service.number}
                                        </span>
                                    </SlideUp>
                                    <SlideUp>
                                        <h2 className="heading-2">
                                            {service.title}
                                        </h2>
                                    </SlideUp>
                                </div>
                                <div className="space-y-4">
                                    <SlideUp>
                                        <p className="text-muted-foreground">
                                            {paragraph}
                                        </p>
                                    </SlideUp>
                                    <div className="flex flex-col text-lg md:flex-row md:items-center md:space-x-16">
                                        <SlideUp>
                                            <ul className="mb-4 space-y-1 md:mb-0">
                                                {service.left.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span className="text-primary">
                                                            +
                                                        </span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </SlideUp>
                                        <SlideUp>
                                            <ul className="space-y-1">
                                                {service.right.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span className="text-primary">
                                                            +
                                                        </span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </SlideUp>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-8 py-8 md:grid-cols-3">
                                <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 md:col-span-2">
                                    <img
                                        src="/images/teams/branding-team.jpg"
                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        alt={service.title}
                                    />
                                </div>
                                <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                                    <img
                                        src="/images/teams/branding.jpg"
                                        className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                        alt={service.title}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </FrontLayout>
    );
}
