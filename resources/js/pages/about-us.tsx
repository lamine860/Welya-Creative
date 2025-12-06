import SlideUp from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import FrontLayout from '@/layouts/front-layout';
import { contact } from '@/routes';
import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <FrontLayout>
            <Head title="Aprops de nous" />
            <section className="min-h-screen py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <SlideUp className="md:max-w-5xl">
                        <h1 className="text-4xl leading-snug font-bold uppercase md:text-7xl">
                            Un design qui fait avancer les marques
                        </h1>
                    </SlideUp>
                    <SlideUp className="md:max-w-3xl">
                        <p className="text-lg font-medium text-muted-foreground md:text-xl"></p>
                    </SlideUp>
                    <SlideUp>
                        <img
                            className="mt-12 h-8/12 w-full rounded-xl shadow"
                            src="/images/about-header.jpg"
                            alt="Apropos de Welya Creative image de l'equipe groupe"
                        />
                    </SlideUp>
                    <div className="pt-20 md:mx-auto md:max-w-5xl">
                        <SlideUp>
                            <h2 className="mb-5 text-2xl font-bold uppercase md:text-3xl">
                                Apropos de Welya Creative
                            </h2>
                        </SlideUp>
                        <div className="space-y-3 text-xl text-muted-foreground">
                            <SlideUp>
                                <p>
                                    Chez WELYA CREATIVE , nous croyons en la
                                    puissance de la créativité et de
                                    l'innovation pour transformer des idées en
                                    réalités inspirantes. Fondée pour répondre
                                    aux besoins croissants des entreprises et
                                    des particuliers dans un monde de plus en
                                    plus connecté, notre agence créative et
                                    digitale se positionne comme votre
                                    partenaire incontournable pour relever les
                                    défis numériques et amplifier votre impact.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    Nous sommes animés par une mission claire :
                                    fournir des solutions numériques sur mesure
                                    qui propulsent les marques vers de nouveaux
                                    sommets . Qu'il s'agisse de marketing
                                    digital, de design, ou de développement web
                                    et mobile, de Gestion de projet digitaux et
                                    du Conseils, chaque projet que nous
                                    entreprenons est conçu pour créer une valeur
                                    durable et tangible.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    <strong>Créativité Illimitée </strong>: Nous
                                    explorons sans cesse de nouvelles idées pour
                                    offrir des concepts innovants et uniques car
                                    nous croyons en la puissance des idées pour
                                    résoudre les défis les plus complexes.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    <strong>Excellence : </strong> La qualité
                                    est au cœur de tout ce que nous faisons.
                                    Nous nous efforçons de dépasser les attentes
                                    à chaque étape. Collaboration : Nous croyons
                                    que les meilleures solutions naissent d'une
                                    collaboration étroite avec nos véritables
                                    clients et nos collaborateurs.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    <strong>Intégrité :</strong> Nous agissons
                                    avec honnêteté, transparence et respect
                                    envers nos clients, notre équipe et nos
                                    partenaires.
                                </p>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="pt-20 md:mx-auto md:max-w-5xl">
                        <SlideUp>
                            <h2 className="mb-5 text-2xl font-bold uppercase md:text-3xl">
                                Qui sommes-nous ?
                            </h2>
                        </SlideUp>
                        <div className="space-y-3 text-xl text-muted-foreground">
                            <SlideUp>
                                <p>
                                    WELYA CREATIVE est une équipe jeune,
                                    dynamique et passionnée du digital et des
                                    nouvelles technologies. Nous allions
                                    créativité, technologie et de l’Innovation
                                    pour donner vie à vos ambitions. Nos
                                    bureaux, situés au cœur de la Guinée,
                                    attirent notre engagement à servir une
                                    clientèle locale et internationale avec un
                                    haut niveau de professionnalisme et de
                                    passion.
                                </p>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="pt-20 md:mx-auto md:max-w-5xl">
                        <SlideUp>
                            <h2 className="mb-5 text-2xl font-bold uppercase md:text-3xl">
                                Pourquoi nous choisir ?
                            </h2>
                        </SlideUp>
                        <div className="space-y-3 text-xl text-muted-foreground">
                            <SlideUp>
                                <p>
                                    <strong>Un guichet unique :</strong> De
                                    l’idée à la conception jusqu’au
                                    développement de solutions numériques
                                    complexes, nous couvrons tous vos besoins en
                                    matière de communication et de technologie.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    <strong>
                                        Une approche centrée sur le client :
                                    </strong>
                                    Nous prenons le temps de comprendre les
                                    défis de nos clients et leurs objectifs pour
                                    concevoir des solutions adaptées à leurs
                                    besoins.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    <strong>
                                        Une passion pour l'innovation :
                                    </strong>
                                    Nous utilisons des outils et des
                                    méthodologies de pointe pour vous offrir un
                                    avantage concurrentiel.
                                </p>
                            </SlideUp>
                            <SlideUp>
                                <p>
                                    <strong>Des résultats mesurables :</strong>{' '}
                                    Nos services sont axés sur la performance,
                                    avec des résultats concrets pour votre
                                    entreprise.
                                </p>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="pt-20 md:mx-auto md:max-w-5xl">
                        <SlideUp>
                            <h2 className="mb-5 text-2xl font-bold uppercase md:text-3xl">
                                Notre Vision
                            </h2>
                        </SlideUp>
                        <div className="space-y-3 text-xl text-muted-foreground">
                            <SlideUp>
                                <p>
                                    Notre vision est de devenir une agence
                                    leader en Afrique et au-delà, reconnue pour
                                    son expertise, son approche collaborative et
                                    sa capacité à transformer des marques grâce
                                    à la créativité et à l'innovation.
                                </p>
                            </SlideUp>
                        </div>
                        <div className="mt-8 mb-5 flex items-center justify-center">
                            <SlideUp>
                                <Button
                                    variant={'link'}
                                    className="mx-auto text-2xl"
                                >
                                    <Link href={contact()}>
                                        Rejoignez-nous dans l'aventure !
                                    </Link>
                                </Button>
                            </SlideUp>
                        </div>
                        <SlideUp>
                            <p className="text-xl text-muted-foreground">
                                Chez WELYA CRÉATIVE , nous ne faisons pas que
                                réaliser des projets, nous construisons des
                                relations durables et nous créons des histoires.
                                Alors ensemble, écrivons l'histoire de votre
                                succès.
                            </p>
                        </SlideUp>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
