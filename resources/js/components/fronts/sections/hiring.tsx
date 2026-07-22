import SlideUp from '@/components/animations/slide-up';
import { Eyebrow } from '@/components/fronts/section-heading';
import { LucideFingerprint } from 'lucide-react';
import { FaHashtag, FaLock } from 'react-icons/fa';
import { MdOutlineHighQuality } from 'react-icons/md';

const features = [
    {
        icon: FaLock,
        color: 'bg-amber-500',
        title: 'Tarification prévisible',
        text: "Un forfait mensuel unique pour un nombre illimité de demandes de conception. Pas de frais supplémentaires ni de coûts cachés.",
    },
    {
        icon: FaHashtag,
        color: 'bg-cyan-500',
        title: "Délai d'exécution rapide",
        text: 'Recevez vos créations dans les 24 à 48 heures. Vous avez besoin de modifications ? Nous nous en occuperons immédiatement.',
    },
    {
        icon: MdOutlineHighQuality,
        color: 'bg-emerald-500',
        title: 'Qualité supérieure',
        text: 'Une qualité de conception haut de gamme à portée de main, quand vous en avez besoin.',
    },
    {
        icon: MdOutlineHighQuality,
        color: 'bg-pink-500',
        title: 'Échelle à tout moment',
        text: 'Augmentez ou diminuez selon vos besoins, et mettez en pause ou annulez à tout moment.',
    },
    {
        icon: LucideFingerprint,
        color: 'bg-primary',
        title: "Unique et rien qu'à vous",
        text: 'Chaque modèle est spécialement conçu pour vous et vous appartient à 100 %.',
    },
];

export default function Hiring() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-24"
            style={{ backgroundImage: "url('/images/teams/team-group.jpg')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-primary/40" />
            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-0">
                <div className="flex flex-col gap-5 md:max-w-2xl">
                    <SlideUp>
                        <Eyebrow dark>Pourquoi nous</Eyebrow>
                    </SlideUp>
                    <SlideUp>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-50 uppercase md:text-5xl">
                            Pourquoi choisir Wely Creative ?
                        </h2>
                    </SlideUp>
                    <SlideUp>
                        <p className="text-lg text-slate-200 md:text-xl">
                            Bénéficiez d'un design fiable et de haute qualité
                            sans avoir à embaucher du personnel interne ou à
                            faire appel à des freelances.
                        </p>
                    </SlideUp>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {features.map((feature, index) => (
                        <SlideUp key={index} delay={index * 0.05}>
                            <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">
                                <span
                                    className={`flex size-12 items-center justify-center rounded-2xl ${feature.color} shadow-lg`}
                                >
                                    <feature.icon className="size-5 text-white" />
                                </span>
                                <h3 className="text-lg font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-200">
                                    {feature.text}
                                </p>
                            </div>
                        </SlideUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
