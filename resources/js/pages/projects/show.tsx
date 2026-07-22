import SlideUp from '@/components/animations/slide-up';
import PageHeader from '@/components/fronts/page-header';
import { Button } from '@/components/ui/button';
import FrontLayout from '@/layouts/front-layout';
import { Project } from '@/types';
import { Head } from '@inertiajs/react';
import { GoPaperAirplane } from 'react-icons/go';

type Props = {
    project: Project;
};
export default function ProjectShow({ project }: Props) {
    return (
        <FrontLayout>
            <Head title={project.title} />
            <PageHeader
                eyebrow="Étude de cas"
                title={project.title}
                description={project.description}
            />
            <section className="pb-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp>
                        <img
                            src="/images/projects/nimba-food-mockup-desktop-01.jpg"
                            alt="Nimba mobile mock up"
                            className="mb-6 w-full max-w-5xl rounded-2xl ring-1 ring-black/5"
                        />
                    </SlideUp>
                    <SlideUp>
                        <h3 className="title-3">Le challenge</h3>
                    </SlideUp>

                    <div className="space-y-6 py-6">
                        <SlideUp>
                            <div
                                className="prose prose-xl prose-slate dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html: project.challenge,
                                }}
                            />
                        </SlideUp>
                        <SlideUp>
                            <h3 className="title-3">Notre mission</h3>
                        </SlideUp>
                        <SlideUp>
                            <div
                                className="prose prose-xl prose-slate dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html: project.mission,
                                }}
                            />
                        </SlideUp>
                        <SlideUp>
                            <h3 className="title-3">Solutions apportées</h3>
                        </SlideUp>
                        <SlideUp>
                            <div
                                className="prose prose-xl prose-slate dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html: project.solutions,
                                }}
                            />
                        </SlideUp>
                        <SlideUp>
                            <h3 className="title-3">Résultats obtenus</h3>
                        </SlideUp>
                        <SlideUp>
                            <div
                                className="prose prose-xl prose-slate dark:prose-invert"
                                dangerouslySetInnerHTML={{
                                    __html: project.results,
                                }}
                            />
                        </SlideUp>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {project.gallery.map((media) => (
                            <SlideUp key={media.id}>
                                <img
                                    src={media.url}
                                    alt={project.title}
                                    className="mb-6 w-full max-w-5xl rounded-2xl ring-1 ring-black/5"
                                />
                            </SlideUp>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2 space-y-4">
                            <SlideUp>
                                <span className="paragraph">
                                    • Concevons votre prochain produit ensemble
                                </span>
                            </SlideUp>
                            <SlideUp>
                                <h3 className="title-3 max-w-3xl">
                                    Une conception qui résout les problèmes
                                    réels et ravit les utilisateurs.
                                </h3>
                            </SlideUp>
                            <SlideUp>
                                <p className="paragraph">
                                    Nous aidons les startups et les équipes
                                    établies à transformer des problèmes
                                    complexes en expériences numériques fluides.
                                    Que vous partiez de zéro ou que vous
                                    amélioriez un produit existant, nous vous
                                    apportons clarté, créativité et exécution.
                                </p>
                            </SlideUp>
                        </div>
                        <SlideUp>
                            <div className="flex w-full flex-col space-y-6 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 p-8 shadow-xl shadow-primary/25">
                                <img
                                    src="/images/teams/contact-avatar.jpg"
                                    className="size-20 rounded-full ring-4 ring-white/30"
                                    alt="Contact avatar"
                                />
                                <h3 className="font-heading text-2xl font-bold text-slate-50">
                                    Réservez un rapide appel d'intro
                                </h3>
                                <Button
                                    className="rounded-full bg-white py-6 font-bold text-primary hover:bg-white/90"
                                    variant={'outline'}
                                >
                                    Réserver un appel
                                </Button>
                                <div className="flex flex-col gap-1">
                                    <a
                                        href="mailto:contact@welyacrative.com"
                                        className="flex items-center justify-between gap-x-1"
                                    >
                                        <div>
                                            <p className="text-sm text-slate-200">
                                                Vous préférez les e-mails ?
                                            </p>
                                            <span className="text-slate-200">
                                                hello@welyacreative.com
                                            </span>
                                        </div>
                                        <GoPaperAirplane className="size-5 text-slate-200" />
                                    </a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
