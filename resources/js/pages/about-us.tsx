import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <FrontLayout>
            <Head title="Aprops de nous" />
            <header className="min-h-[80vh] pt-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp className="md:max-w-5xl">
                        <h1 className="text-4xl leading-snug font-bold uppercase md:text-7xl">
                            Un design qui fait avancer les marques
                        </h1>
                    </SlideUp>
                    <SlideUp className="md:max-w-3xl">
                        <p className="text-lg font-medium text-muted-foreground md:text-xl"></p>
                    </SlideUp>
                </div>
            </header>
            <section className="section bg-slate-100 py-16 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-0"></div>
            </section>
        </FrontLayout>
    );
}
