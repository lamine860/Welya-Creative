import SlideUp from '@/components/animations/slide-up';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export function Testimonials() {
    const testimonials = [
        {
            quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
            name: 'Sarah Chen',
            designation: 'Product Manager at TechFlow',
            src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: 'Michael Rodriguez',
            designation: 'CTO at InnovateSphere',
            src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];
    return (
        <section className="bg-slate-100 py-16 dark:bg-slate-950">
            <SlideUp className="mx-auto max-w-7xl px-4 md:px-0">
                <AnimatedTestimonials
                    testimonials={testimonials}
                    autoplay={true}
                />
            </SlideUp>
        </section>
    );
}
