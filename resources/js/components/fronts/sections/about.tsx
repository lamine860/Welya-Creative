import SlideUp from '@/components/animations/slide-up';
import { Eyebrow } from '@/components/fronts/section-heading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { projects, services } from '@/routes';
import { Link } from '@inertiajs/react';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineMedicalServices } from 'react-icons/md';

export default function About() {
    return (
        <section className="bg-slate-50 py-20 md:py-28 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    <div className="relative">
                        <div className="pointer-events-none absolute -top-6 -left-6 -z-10 size-40 rounded-full bg-primary/10 blur-2xl" />
                        <SlideUp>
                            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                                <img
                                    className="mb-4 w-full transition-transform duration-500 hover:scale-105 md:mb-0 md:w-64"
                                    src="/images/teams/team-2.jpg"
                                    alt="Team"
                                />
                            </div>
                        </SlideUp>
                        <SlideUp
                            className="top-16 right-16 md:absolute"
                            delay={0.3}
                        >
                            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                                <img
                                    className="w-full transition-transform duration-500 hover:scale-105 md:w-72"
                                    src="/images/teams/lamine-bah.jpg"
                                    alt="Lamine Bah"
                                />
                            </div>
                        </SlideUp>
                    </div>
                    <div className="space-y-6 md:pb-8">
                        <SlideUp>
                            <Eyebrow>À propos de nous</Eyebrow>
                        </SlideUp>
                        <SlideUp>
                            <h2 className="heading-2 md:max-w-4/5 md:text-4xl">
                                Nous fournissons des idées brillantes et
                                ajoutons le mot{' '}
                                <span className="text-gradient inline">
                                    « succès »
                                </span>{' '}
                                à votre marque.
                            </h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="subtitle max-w-none text-lg">
                                Welya Creative est une agence de branding et de
                                conception UI/UX dédiée à aider les entreprises
                                à se démarquer dans un marché concurrentiel.
                                Notre équipe d'experts combine créativité et
                                stratégie pour créer des expériences de marque
                                mémorables qui résonnent avec votre public
                                cible.
                            </p>
                        </SlideUp>
                        <SlideUp>
                            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
                                <Button
                                    className={cn(
                                        'group rounded-full bg-gradient-to-r from-primary to-indigo-500 px-8 py-6 font-semibold shadow-md shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40',
                                    )}
                                    asChild
                                >
                                    <Link href={projects()}>
                                        <span>
                                            <FiEdit />
                                        </span>
                                        Voir nos expertises
                                    </Link>
                                </Button>
                                <Button
                                    className="rounded-full px-8 py-6 font-semibold"
                                    variant={'outline'}
                                    asChild
                                >
                                    <Link href={services()}>
                                        <span>
                                            <MdOutlineMedicalServices />
                                        </span>
                                        Nos Services
                                    </Link>
                                </Button>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
