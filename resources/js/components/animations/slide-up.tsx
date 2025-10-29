import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';

// Enregistrement du plugin ScrollTrigger une seule fois
gsap.registerPlugin(ScrollTrigger);

const SlideUp = ({
    children,
    delay = 0,
    className = '',
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) => {
    // 1. Créer une référence pour cibler l'élément DOM
    const elementRef = useRef(null);

    useLayoutEffect(() => {
        // 2. Le contexte GSAP pour gérer la destruction des animations
        const ctx = gsap.context(() => {
            // 3. Définir l'animation avec ScrollTrigger
            gsap.from(elementRef.current, {
                opacity: 0,
                y: 50,
                duration: 1.2,
                delay: delay, // Permet d'ajouter un délai
                ease: 'power3.out',

                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top 80%', // Démarre lorsque l'élément est à 80% du haut du viewport
                    toggleActions: 'play none none none',
                    once: true, // IMPORTANT : Assure que l'animation ne se joue qu'une seule fois
                },
            });
        }, elementRef); // Lier le contexte à l'élément de référence

        // 4. Nettoyage : Détruire les animations ScrollTrigger lors du démontage du composant
        return () => ctx.revert();
    }, [delay]); // Re-déclencher si le delay change (optionnel)

    // 5. Attacher la référence à l'élément principal
    return (
        <div ref={elementRef} className={className}>
            {children}
        </div>
    );
};

export default SlideUp;
