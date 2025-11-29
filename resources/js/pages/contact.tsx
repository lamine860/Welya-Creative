import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function Projects() {
    return (
        <FrontLayout>
            <Head title="Contact" />
            <header className="min-h-[80vh] pt-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp>
                        <h1 className="text-4xl leading-snug font-bold uppercase md:text-7xl">
                            Contact
                        </h1>
                    </SlideUp>
                </div>
            </header>
            <section className="section bg-slate-100 py-16 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-0"></div>
            </section>
        </FrontLayout>
    );
}
