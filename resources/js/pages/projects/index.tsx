import ProjectShowController from '@/actions/App/Http/Controllers/ProjectShowController';
import SlideUp from '@/components/animations/slide-up';
import PageHeader from '@/components/fronts/page-header';
import FrontLayout from '@/layouts/front-layout';
import { Project } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Index() {
    const { projects } = usePage<{
        projects: Project[];
    }>().props;
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
                    {projects.length === 0 && (
                        <SlideUp>
                            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border/60 bg-slate-50 py-20 text-center dark:bg-slate-900">
                                <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <FiArrowUpRight className="size-6" />
                                </span>
                                <h3 className="font-heading text-xl font-bold uppercase">
                                    Nos réalisations arrivent bientôt
                                </h3>
                                <p className="max-w-md text-muted-foreground">
                                    De nouveaux projets sont en cours de
                                    préparation. Revenez très prochainement pour
                                    les découvrir.
                                </p>
                            </div>
                        </SlideUp>
                    )}
                    <div className="grid gap-8 md:grid-cols-2">
                        {projects.map((project) => (
                            <SlideUp key={project.id}>
                                <Link
                                    href={ProjectShowController(project.slug)}
                                    className="group block"
                                >
                                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
                                        <img
                                            src="/images/projects/nimba-food-mockup-desktop-01.jpg"
                                            alt={project.title}
                                            className="w-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="text-xl font-bold uppercase">
                                                {project.title}
                                            </h3>
                                            <span className="text-sm text-muted-foreground uppercase">
                                                - {project.industry}
                                            </span>
                                        </div>
                                        <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                                            <FiArrowUpRight />
                                        </span>
                                    </div>
                                </Link>
                            </SlideUp>
                        ))}
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
