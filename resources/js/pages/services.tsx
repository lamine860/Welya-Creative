import SlideUp from '@/components/animations/slide-up';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function Blog() {
    return (
        <FrontLayout>
            <Head title="Services" />
            <header className="min-h-[80vh] pt-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp>
                        <h1 className="text-4xl leading-snug font-bold uppercase md:text-7xl">
                            Nous créons des expériences numériques inoubliables
                            grâce à nos services haut de gamme.
                        </h1>
                    </SlideUp>
                </div>
            </header>
            <section className="section bg-slate-100 py-16 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="space-y-16">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <SlideUp>
                                    <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                                        01
                                    </span>
                                </SlideUp>
                                <SlideUp>
                                    <span className="text-2xl font-bold uppercase md:max-w-2/4">
                                        Solutions de stratégie de marque
                                    </span>
                                </SlideUp>
                            </div>
                            <div className="space-y-6">
                                <SlideUp>
                                    <p className="text-lg text-muted-foreground md:text-xl">
                                        We are passionate about our work and the
                                        positive impact it has on our clients.
                                        With over 12 years' experience, we have
                                        consistently provided excellent web
                                        solutions, offering our clients a
                                        first-class experience.
                                    </p>
                                </SlideUp>
                                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Brand strategy</li>
                                            <li>+ Video production</li>
                                            <li>+ Research and testing</li>
                                            <li>+ Usability consulting</li>
                                        </ul>
                                    </SlideUp>
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Brand strategy</li>
                                            <li>+ Video production</li>
                                            <li>+ Research and testing</li>
                                            <li>+ Usability consulting</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-5">
                            <SlideUp className="md:col-span-3">
                                <img
                                    src="/images/teams/branding.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                            <SlideUp className="col-span-2">
                                <img
                                    src="/images/teams/branding-02.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                        </div>
                    </div>

                    <div className="space-y-16 py-24">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <SlideUp>
                                    <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                                        02
                                    </span>
                                </SlideUp>
                                <SlideUp>
                                    <span className="text-2xl font-bold uppercase md:max-w-2/4">
                                        Développement de sites web
                                    </span>
                                </SlideUp>
                            </div>
                            <div className="space-y-6">
                                <SlideUp>
                                    <p className="text-lg text-muted-foreground md:text-xl">
                                        We are passionate about our work and the
                                        positive impact it has on our clients.
                                        With over 12 years' experience, we have
                                        consistently provided excellent web
                                        solutions, offering our clients a
                                        first-class experience.
                                    </p>
                                </SlideUp>
                                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Brand strategy</li>
                                            <li>+ Video production</li>
                                            <li>+ Research and testing</li>
                                            <li>+ Usability consulting</li>
                                        </ul>
                                    </SlideUp>
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Brand strategy</li>
                                            <li>+ Video production</li>
                                            <li>+ Research and testing</li>
                                            <li>+ Usability consulting</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-5">
                            <SlideUp className="md:col-span-3">
                                <img
                                    src="/images/teams/branding.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                            <SlideUp className="col-span-2">
                                <img
                                    src="/images/teams/branding-02.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                        </div>
                    </div>

                    <div className="space-y-16 py-24">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                                <SlideUp>
                                    <span className="inline-block bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-7xl font-bold text-transparent md:text-9xl">
                                        03
                                    </span>
                                </SlideUp>
                                <SlideUp>
                                    <span className="text-2xl font-bold uppercase md:max-w-2/4">
                                        Solutions de commerce électronique
                                    </span>
                                </SlideUp>
                            </div>
                            <div className="space-y-6">
                                <SlideUp>
                                    <p className="text-lg text-muted-foreground md:text-xl">
                                        We are passionate about our work and the
                                        positive impact it has on our clients.
                                        With over 12 years' experience, we have
                                        consistently provided excellent web
                                        solutions, offering our clients a
                                        first-class experience.
                                    </p>
                                </SlideUp>
                                <div className="flex flex-col gap-6 md:flex-row md:gap-16">
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Brand strategy</li>
                                            <li>+ Video production</li>
                                            <li>+ Research and testing</li>
                                            <li>+ Usability consulting</li>
                                        </ul>
                                    </SlideUp>
                                    <SlideUp>
                                        <ul className="space-y-2 text-lg font-medium">
                                            <li>+ Brand strategy</li>
                                            <li>+ Video production</li>
                                            <li>+ Research and testing</li>
                                            <li>+ Usability consulting</li>
                                        </ul>
                                    </SlideUp>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-5">
                            <SlideUp className="md:col-span-3">
                                <img
                                    src="/images/teams/branding.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                            <SlideUp className="col-span-2">
                                <img
                                    src="/images/teams/branding-02.webp"
                                    alt="Branding"
                                    className="w-full md:h-96"
                                />
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
