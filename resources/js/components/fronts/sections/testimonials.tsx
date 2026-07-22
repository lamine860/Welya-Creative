import SlideUp from '@/components/animations/slide-up';
import SectionHeading from '@/components/fronts/section-heading';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { Testimony } from '@/types';
import { usePage } from '@inertiajs/react';

export function Testimonials() {
    const props = usePage<{
        testimonials: Testimony[];
    }>().props;
    const testimonials = props.testimonials.map((t) => ({
        quote: t.message,
        name: t.name,
        designation: t.position,
        src: t.avatar,
    }));
    if (testimonials.length === 0) return;
    return (
        <section className="bg-slate-100 py-20 md:py-28 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <SectionHeading
                    align="center"
                    eyebrow="Témoignages"
                    title="Ce que disent nos clients"
                    description="La confiance de nos clients est notre plus belle réussite."
                />
                <SlideUp className="mt-6">
                    <AnimatedTestimonials
                        testimonials={testimonials}
                        autoplay={true}
                    />
                </SlideUp>
            </div>
        </section>
    );
}
