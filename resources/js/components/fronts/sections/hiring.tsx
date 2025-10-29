import SlideUp from '@/components/animations/slide-up';
import { LucideFingerprint } from 'lucide-react';
import { FaHashtag, FaLock } from 'react-icons/fa';
import { MdOutlineHighQuality } from 'react-icons/md';

export default function Hiring() {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat py-16"
            style={{ backgroundImage: "url('/images/teams/team-group.jpg')" }}
        >
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="md:max-w-xl">
                    <SlideUp>
                        <h2 className="mb-6 text-3xl font-bold text-slate-50 uppercase md:px-0 md:text-5xl">
                            Pourquoi choisir Wely Creative ?
                        </h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-xl text-slate-100">
                            Bénéficiez d'un design fiable et de haute qualité
                            sans avoir à embaucher du personnel interne ou à
                            faire appel à des freelances.
                        </p>
                    </SlideUp>
                </div>
                <div className="relative mt-10 grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div className="bg-opacity-10 flex flex-col gap-3 rounded-md border border-white bg-white/50 bg-clip-padding p-4 backdrop-blur-2xl dark:border-slate-500 dark:bg-slate-900/80">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-amber-600">
                            <FaLock className="size-4 text-slate-50" />
                        </span>
                        <h2 className="text-xl">Tarification prévisible</h2>
                        <p className="text-sm text-foreground">
                            Un forfait mensuel unique pour un nombre illimité de
                            demandes de conception. Pas de frais supplémentaires
                            ni de coûts cachés.
                        </p>
                    </div>
                    <div className="bg-opacity-10 flex flex-col gap-3 rounded-md border border-white bg-white/50 bg-clip-padding p-4 backdrop-blur-2xl dark:border-slate-500 dark:bg-slate-900/80">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-600">
                            <FaHashtag className="size-4 text-slate-50" />
                        </span>
                        <h2 className="text-xl">Délai d'exécution rapide</h2>
                        <p className="text-sm text-foreground">
                            Recevez vos créations dans les 24 à 48 heures. Vous
                            avez besoin de modifications ? Nous nous en
                            occuperons immédiatement.
                        </p>
                    </div>
                    <div className="bg-opacity-10 flex flex-col gap-3 rounded-md border border-white bg-white/50 bg-clip-padding p-4 backdrop-blur-2xl dark:border-slate-500 dark:bg-slate-900/80">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600">
                            <MdOutlineHighQuality className="size-4 text-slate-50" />
                        </span>
                        <h2 className="text-xl">Qualité supérieure</h2>
                        <p className="text-sm text-foreground">
                            Une qualité de conception haut de gamme à portée de
                            main, quand vous en avez besoin.
                        </p>
                    </div>
                    <div className="bg-opacity-10 flex flex-col gap-3 rounded-md border border-white bg-white/50 bg-clip-padding p-4 backdrop-blur-2xl dark:border-slate-500 dark:bg-slate-900/80">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-pink-600">
                            <MdOutlineHighQuality className="size-4 text-slate-50" />
                        </span>
                        <h2 className="text-xl">Échelle à tout moment</h2>
                        <p className="text-sm text-foreground">
                            Augmentez ou diminuez selon vos besoins, et mettez
                            en pause ou annulez à tout moment.
                        </p>
                    </div>
                    <div className="bg-opacity-10 flex flex-col gap-3 rounded-md border border-white bg-white/50 bg-clip-padding p-4 backdrop-blur-2xl dark:border-slate-500 dark:bg-slate-900/80">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-purple-600">
                            <LucideFingerprint className="size-4 text-slate-50" />
                        </span>
                        <h2 className="text-xl">Unique et rien qu'à vous</h2>
                        <p className="text-sm text-foreground">
                            Chaque modèle est spécialement conçu pour vous et
                            vous appartient à 100 %.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
