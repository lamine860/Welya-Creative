import ProjectShowController from '@/actions/App/Http/Controllers/ProjectShowController';
import SlideUp from '@/components/animations/slide-up';
import { Eyebrow } from '@/components/fronts/section-heading';
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
import { FiArrowUpRight } from 'react-icons/fi';

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
        <section className="overflow-x-hidden bg-white py-20 md:py-28 dark:bg-slate-900">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-0">
                    <div className="flex flex-col gap-5">
                        <SlideUp>
                            <Eyebrow>Portfolio</Eyebrow>
                        </SlideUp>
                        <SlideUp>
                            <h2 className="font-heading text-3xl font-bold tracking-tight uppercase md:text-5xl">
                                Projets & concepts
                            </h2>
                        </SlideUp>
                    </div>
                    <SlideUp>
                        <div className="flex items-center gap-2">
                            <CarouselPrevious className="static translate-y-0 rounded-full" />
                            <CarouselNext className="static translate-y-0 rounded-full" />
                        </div>
                    </SlideUp>
                </div>
                <SlideUp className="mt-10">
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
                                    className="group block"
                                >
                                    <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
                                        <img
                                            src={item.url}
                                            alt={item.title}
                                            className="h-[520px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-center justify-between p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <h3 className="text-xl font-bold text-white">
                                                {item.title}
                                            </h3>
                                            <span className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                                                <FiArrowUpRight />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </SlideUp>
            </Carousel>
        </section>
    );
}
