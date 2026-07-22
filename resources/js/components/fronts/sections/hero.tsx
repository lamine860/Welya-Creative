import SlideUp from '@/components/animations/slide-up';
import { Button } from '@/components/ui/button';
import { ImagesSlider } from '@/components/ui/images-slider';
import { contact, projects } from '@/routes';
import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import { FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export default function Hero() {
    const images = [
        '/images/hero-slide-01.jpg',
        '/images/hero-slide-02.jpg',
        '/images/hero-slide-03.jpg',
    ];
    return (
        <section className="h-[85vh] max-h-[900px] min-h-[600px] w-full overflow-hidden">
            <ImagesSlider
                className="md:order-2 md:col-span-3"
                images={images}
                overlayClassName="bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/40"
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -80,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="relative z-50 mx-auto flex w-full max-w-7xl flex-col px-4 md:px-0"
                >
                    <SlideUp>
                        <span className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-100 backdrop-blur-md">
                            <HiSparkles className="text-primary-foreground" />
                            Agence créative digitale
                        </span>
                    </SlideUp>
                    <SlideUp>
                        <h1 className="hero-title max-w-3xl text-slate-50">
                            Élevez votre marque,{' '}
                            <span className="text-gradient">
                                transformez votre expérience
                            </span>
                        </h1>
                    </SlideUp>
                    <SlideUp delay={0.3}>
                        <p className="hero-subtitle max-w-lg font-medium text-slate-300">
                            Agence créative spécialisée en design digital,
                            branding et développement web. Nous aidons les
                            marques à se démarquer et à convertir.
                        </p>
                    </SlideUp>
                    <SlideUp delay={0.45}>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="group rounded-full bg-gradient-to-r from-primary to-indigo-500 px-8 py-6 text-base font-bold shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
                                asChild
                            >
                                <Link href={contact()}>
                                    Demander un devis
                                    <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white/30 bg-white/5 px-8 py-6 text-base font-semibold text-slate-50 backdrop-blur-md hover:bg-white/15 hover:text-white"
                                asChild
                            >
                                <Link href={projects()}>Voir nos projets</Link>
                            </Button>
                        </div>
                    </SlideUp>
                </motion.div>
            </ImagesSlider>
        </section>
    );
}
