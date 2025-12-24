import SlideUp from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import FrontLayout from '@/layouts/front-layout';
import { Project } from '@/types';
import { GoPaperAirplane } from 'react-icons/go';

type Props = {
    project: Project;
};
export default function ProjectShow({ project }: Props) {
    return (
        <FrontLayout>
            <section className="min-h-[80vh] py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    {/* <SlideUp>
                        <div className="mb-6 flex flex-wrap items-center gap-4">
                            <span className="inline-block rounded-full border px-3 py-2 text-sm uppercase">
                                Branding
                            </span>
                            <span className="inline-block rounded-full border px-3 py-2 text-sm uppercase">
                                Design graphique
                            </span>
                            <span className="inline-block rounded-full border px-3 py-2 text-sm uppercase">
                                Site vitrine
                            </span>
                        </div>
                    </SlideUp> */}
                    <SlideUp>
                        <h1 className="mb-6 text-3xl font-bold uppercase md:text-5xl">
                            {project.title}
                        </h1>
                    </SlideUp>
                    <SlideUp>
                        <p className="mb-6 max-w-5xl text-xl text-muted-foreground">
                            {project.description}
                        </p>
                    </SlideUp>
                    <SlideUp>
                        <img
                            src="/images/projects/nimba-food-mockup-desktop-01.jpg"
                            alt="Nimba mobile mock up"
                            className="mb-6 w-full max-w-5xl rounded-xl"
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
                        <SlideUp>
                            <img
                                src="/images/projects/nimba-food/nimba-food-packaging-mockup.jpg"
                                alt="Nimba packaging mock up"
                                className="mb-6 w-full max-w-5xl rounded-xl"
                            />
                        </SlideUp>
                        <SlideUp>
                            <img
                                src="/images/projects/nimba-food/nimba-food-website-mockup.jpg"
                                alt="Nimba packaging mock up"
                                className="mb-6 w-full max-w-5xl rounded-xl"
                            />
                        </SlideUp>
                        <SlideUp>
                            <img
                                src="/images/projects/nimba-food/nimba-food-promotional-banner.jpg"
                                alt="Nimba packaging mock up"
                                className="mb-6 w-full max-w-5xl rounded-xl"
                            />
                        </SlideUp>
                        <SlideUp>
                            <img
                                src="/images/projects/nimba-food/nimba-food-mobile-mockup.jpg"
                                alt="Nimba packaging mock up"
                                className="mb-6 w-full max-w-5xl rounded-xl"
                            />
                        </SlideUp>
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
                            <div className="flex w-full flex-col space-y-6 rounded-xl bg-primary p-6 shadow-lg">
                                <img
                                    src="/images/teams/contact-avatar.jpg"
                                    className="size-24 rounded-full"
                                    alt="Contact avatar"
                                />
                                <h3 className="text-3xl font-bold text-slate-50">
                                    Réservez un rapide appel d'intro
                                </h3>
                                <Button
                                    className="rounded-full py-6 font-bold"
                                    variant={'outline'}
                                >
                                    Résver un appel
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
