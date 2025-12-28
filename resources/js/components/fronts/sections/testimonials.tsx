import SlideUp from '@/components/animations/slide-up';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Testimony } from '@/types';
import { usePage } from '@inertiajs/react';

export function Testimonials() {
    const { testimonials } = usePage<{
        testimonials: Testimony[];
    }>().props;
    return (
        <section className="bg-slate-100 py-16 dark:bg-slate-950">
            <SlideUp className="mx-auto max-w-7xl px-4 md:px-0">
                <AnimatedTestimonials
                    testimonials={testimonials.map((t) => ({
                        quote: t.message,
                        name: t.name,
                        designation: t.position,
                        src: t.avatar,
                    }))}
                    autoplay={true}
                />
            </SlideUp>
        </section>
    );
}
