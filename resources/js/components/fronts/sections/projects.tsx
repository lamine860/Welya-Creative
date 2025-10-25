import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            // ...
        </Carousel>
    );
}

const carouselItems = [
    {
        id: 1,
        title: 'Project 1',
        image: 'https://images.unsplash.com/photo-1759675795062-a657fcb278b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1301',
    },
    {
        id: 2,
        title: 'Project 2',
        image: 'https://images.unsplash.com/photo-1760991655905-ee03390b7fec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    },
    {
        id: 3,
        title: 'Project 3',
        image: 'https://images.unsplash.com/photo-1760895986008-0a016173836c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    },
    {
        id: 4,
        title: 'Project 4',
        image: 'https://images.unsplash.com/photo-1747447597297-0716bbd5b049?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
    },
];

export default function Projects() {
    return (
        <section className="overflow-x-hidden py-16 bg-white dark:bg-slate-900">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:justify-between">
                    <h2 className="mb-6 text-3xl font-extrabold uppercase md:text-5xl px-4 md:px-0">
                        Travaux Récents
                    </h2>
                    <div className="flex items-center gap-2 px-4 md:px-4 justify-end">
                        <CarouselPrevious className="static" />
                        <CarouselNext className="static" />
                    </div>
                </div>
                <CarouselContent>
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/3">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-[520px] w-full rounded-sm object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    Description
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
