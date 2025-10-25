import { ImagesSlider } from '@/components/ui/images-slider';
import { motion } from 'motion/react';

export default function Hero() {
    const images = [
        '/images/hero-slide-01.jpg',
        '/images/hero-slide-02.jpg',
        '/images/hero-slide-03.jpg',
    ];
    return (
        <section className="h-[70vh] w-full overflow-hidden">
            <ImagesSlider className="md:order-2 md:col-span-3" images={images}>
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
                    <h1 className="hero-title">
                        Élevez votre marque, transformez votre expérience
                    </h1>
                    <p className="hero-subtitle">
                        Agence de branding et de conception UI/UX de pointe pour
                        les entreprises qui veulent se démarquer.
                    </p>
                </motion.div>
            </ImagesSlider>
        </section>
    );
}
