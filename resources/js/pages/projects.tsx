import ProjectShowController from '@/actions/App/Http/Controllers/ProjectShowController';
import SlideUp from '@/components/animations/slide-up';
import PageHeader from '@/components/fronts/page-header';
import FrontLayout from '@/layouts/front-layout';
import { Head, Link } from '@inertiajs/react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Projects() {
    return (
        <FrontLayout>
            <Head title="Realisations" />
            <PageHeader
                eyebrow="Portfolio"
                title="Réalisations"
                description="Découvrez comment nous avons aidé des startups et des marques mondiales à transformer des idées complexes en conceptions intuitives et évolutives."
            />
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid gap-8 md:grid-cols-2">
                        <SlideUp>
                            <Link
                                href={ProjectShowController('nimba-food')}
                                className="group block"
                            >
                                <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
                                    <img
                                        src="/images/projects/nimba-food-mockup-desktop-01.jpg"
                                        alt="Nimba mobile mock up"
                                        className="w-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>
                                <div className="mt-5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold uppercase">
                                            Nimba Food
                                        </h3>
                                        <span className="text-sm text-muted-foreground uppercase">
                                            - Projet conceptuel
                                        </span>
                                    </div>
                                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <FiArrowUpRight />
                                    </span>
                                </div>
                            </Link>
                        </SlideUp>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
