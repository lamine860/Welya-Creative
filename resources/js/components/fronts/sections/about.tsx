import SlideUp from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { projects, services } from '@/routes';
import { Link } from '@inertiajs/react';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineMedicalServices } from 'react-icons/md';

export default function About() {
    return (
        <section className="bg-slate-50 py-16 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    <div className="relative">
                        <SlideUp>
                            <img
                                className="mb-4 w-sm shadow transition duration-100 hover:shadow-lg md:mb-0 md:w-64"
                                src="/images/teams/team-2.jpg"
                                alt="Team"
                            />
                        </SlideUp>
                        <SlideUp
                            className="top-16 right-20 md:absolute"
                            delay={0.3}
                        >
                            <img
                                className="w-sm shadow transition duration-100 hover:shadow-lg md:w-76"
                                src="/images/teams/lamine-bah.jpg"
                                alt="Lamine Bah"
                            />
                        </SlideUp>
                    </div>
                    <div className="space-y-6 md:pb-8">
                        <SlideUp>
                            <h2 className="heading-2 md:max-w-4/5">
                                Nous fournissons des idées brillantes et
                                ajoutons le mot « succès » à votre marque.
                            </h2>
                        </SlideUp>
                        <SlideUp>
                            <p className="subtitle">
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
                            <div className="flex flex-col items-center gap-8 md:flex-row md:items-baseline">
                                <Button
                                    className={cn('rounded-full px-10 py-6')}
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
                                    className="rounded-full px-8 py-6"
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
