import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function Projects() {
    return (
        <FrontLayout>
            <Head title="Realisations" />
            <header className="min-h-[80vh] pt-16">
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
                </div>
            </header>
            <section className="section bg-slate-100 py-16 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-0"></div>
            </section>
        </FrontLayout>
    );
}
