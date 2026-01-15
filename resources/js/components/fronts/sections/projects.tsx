import ProjectShowController from '@/actions/App/Http/Controllers/ProjectShowController';
import SlideUp from '@/components/animations/slide-up';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Project } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';

export default function Projects() {
    const { projects } = usePage<{
        projects: Project[];
    }>().props;

    const gallery = projects
        .filter((project) => project.gallery.length > 0)
        .flatMap((project) =>
            project.gallery.map((gallery) => ({
                ...gallery,
                title: project.title,
                projectId: project.id,
                projectSlug: project.slug,
            })),
        );
    if (projects.length === 0) return null;
    return (
        <section className="overflow-x-hidden bg-white py-16 dark:bg-slate-900">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:justify-between">
                    <SlideUp>
                        <h2 className="mb-6 px-4 text-3xl font-extrabold uppercase md:px-0 md:text-5xl">
                            Projets & concepts
                        </h2>
                    </SlideUp>
                    <SlideUp>
                        <div className="flex items-center justify-end gap-2 px-4 md:px-4">
                            <CarouselPrevious className="static" />
                            <CarouselNext className="static" />
                        </div>
                    </SlideUp>
                </div>
                <SlideUp>
                    <CarouselContent>
                        {gallery.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="md:basis-1/3"
                            >
                                <Link
                                    href={ProjectShowController(
                                        item.projectSlug,
                                    )}
                                >
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="h-[520px] w-full rounded-sm object-cover"
                                    />
                                </Link>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    {/* <p className="text-muted-foreground">
                                        Description
                                    </p> */}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </SlideUp>
            </Carousel>
        </section>
    );
}
