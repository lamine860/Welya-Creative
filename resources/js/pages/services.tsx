import SlideUp from '@/components/animations/slide-up';
import PageHeader from '@/components/fronts/page-header';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

const paragraph = `Nous sommes passionnés par notre travail et par l'impact positif qu'il a sur nos clients. Forts de plus de 12 ans d'expérience, nous avons toujours fourni d'excellentes solutions web, offrant à nos clients une expérience de premier ordre.`;

const services = [
    {
        number: '01',
        title: 'Solutions de stratégie de marque',
        left: [
            'Stratégie de marque',
            'Production Video',
            'Recherche et essais',
            'Conseil en ergonomie',
        ],
        right: [
            'Direction artistique',
            'Conception graphique',
            'Création de contenu',
            'Web development',
        ],
        images: [
            '/images/teams/branding.webp',
            '/images/teams/branding-02.webp',
        ],
    },
    {
        number: '02',
        title: 'Développement de sites web',
        left: [
            "Développement d'API",
            'Migration vers le cloud',
            'Recherche et essais',
            'Site web personnalisé',
        ],
        right: ['WordPress', 'Laravel', 'React', 'VueJS'],
        images: [
            '/images/teams/branding.webp',
            '/images/teams/branding-02.webp',
        ],
    },
    {
        number: '03',
        title: 'Solutions de commerce électronique',
        left: ['Shipping features', 'Payment gateways', 'Categorization'],
        right: ['Solutions CMS', 'Plateforme Ecommerce', 'Apps development'],
        images: [
            '/images/teams/branding.webp',
            '/images/teams/branding-02.webp',
        ],
    },
];

export default function Services() {
    return (
        <FrontLayout>
            <Head title="Services" />
            <PageHeader
                eyebrow="Nos services"
                title="Nos services"
                description="Nous créons des expériences numériques inoubliables grâce à nos services haut de gamme."
            />
            <section className="bg-slate-50 py-16 md:py-24 dark:bg-slate-950">
                <div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 md:px-0">
                    {services.map((service) => (
                        <div key={service.number} className="space-y-12">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                    <SlideUp>
                                        <span className="text-gradient font-heading text-7xl font-bold md:text-9xl">
                                            {service.number}
                                        </span>
                                    </SlideUp>
                                    <SlideUp>
                                        <span className="font-heading text-3xl font-bold uppercase">
                                            {service.title}
                                        </span>
                                    </SlideUp>
                                </div>
                                <div className="space-y-6">
                                    <SlideUp>
                                        <p className="text-lg text-muted-foreground md:text-xl">
                                            {paragraph}
                                        </p>
                                    </SlideUp>
                                    <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                        <SlideUp>
                                            <ul className="space-y-2 text-lg font-medium">
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
                                            <ul className="space-y-2 text-lg font-medium">
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
                            <div className="grid gap-4 md:grid-cols-5">
                                <SlideUp className="md:col-span-3">
                                    <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                                        <img
                                            src={service.images[0]}
                                            alt={service.title}
                                            className="h-96 w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </SlideUp>
                                <SlideUp className="md:col-span-2">
                                    <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                                        <img
                                            src={service.images[1]}
                                            alt={service.title}
                                            className="h-96 w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </SlideUp>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </FrontLayout>
    );
}
