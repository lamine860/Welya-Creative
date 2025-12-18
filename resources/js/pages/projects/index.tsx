import ProjectShowController from '@/actions/App/Http/Controllers/ProjectShowController';
import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Project } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Index() {
    const { projects } = usePage<{
        projects: {
            data: Project[];
        };
    }>().props;
    console.log(projects);
    return (
        <FrontLayout>
            <Head title="Realisations" />
            <div className="min-h-[80vh] pt-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp>
                        <h1 className="text-4xl leading-snug font-bold uppercase md:text-7xl">
                            Realisations
                        </h1>
                    </SlideUp>
                    <SlideUp className="md:max-w-3xl">
                        <p className="text-xl font-medium text-muted-foreground md:text-2xl">
                            Découvrez comment nous avons aidé des startups et
                            des marques mondiales à transformer des idées
                            complexes en conceptions intuitives et évolutives.
                        </p>
                    </SlideUp>
                    <div className="grid gap-8 py-8 md:grid-cols-2">
                        {projects.data.map((project) => (
                            <SlideUp>
                                <Link
                                    href={ProjectShowController(project.slug)}
                                    className="space-y-6"
                                >
                                    <img
                                        src="/images/projects/nimba-food-mockup-desktop-01.jpg"
                                        alt="Nimba mobile mock up"
                                    />
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-xl font-bold uppercase">
                                            {project.title}
                                        </h3>
                                        <span className="text-sm text-muted-foreground uppercase">
                                            - {project.industry}
                                        </span>
                                    </div>
                                </Link>
                            </SlideUp>
                        ))}
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}
