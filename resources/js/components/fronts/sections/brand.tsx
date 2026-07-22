import { Eyebrow } from '@/components/fronts/section-heading';
import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const reviews = [
    {
        name: 'Africa Water',
        image: '/images/brands/africa-water.png',
    },
    {
        name: 'CIS',
        image: '/images/brands/cis.png',
    },
    {
        name: 'Darnei kah mein',
        image: '/images/brands/darnei-kah-mein.png',
    },
    {
        name: 'Fa Global Gogistic',
        image: '/images/brands/fa-global-logistic.png',
    },
    {
        name: 'Humnan bird',
        image: '/images/brands/humnan-bird.png',
    },
    {
        name: 'Windfall',
        image: '/images/brands/windfall.png',
    },
];
const ReviewCard = ({ image, name }: { image: string; name: string }) => {
    return (
        <figure
            className={cn(
                'group relative flex h-full w-56 items-center justify-center gap-2 px-6 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0',
            )}
        >
            <img className="w-10" width="40" height="40" alt={name} src={image} />
            <figcaption className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                {name}
            </figcaption>
        </figure>
    );
};

export default function Brand() {
    return (
        <section className="border-y border-border/60 bg-slate-50 py-12 md:py-16 dark:bg-slate-900">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 md:px-0">
                <Eyebrow>Ils nous font confiance</Eyebrow>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee className="[--duration:25s]">
                        {reviews.map((review) => (
                            <ReviewCard key={review.name} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-slate-50 dark:from-slate-900" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-slate-50 dark:from-slate-900" />
                </div>
            </div>
        </section>
    );
}
