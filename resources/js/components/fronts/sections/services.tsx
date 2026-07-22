import SlideUp from '@/components/animations/slide-up';
import SectionHeading from '@/components/fronts/section-heading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
    {
        title: 'Design UX/UI',
        content: `Nous concevons des expériences utilisateur intuitives, axées sur la conversion, et des interfaces élégantes et épurées que les utilisateurs adorent. De la recherche et des wireframes aux prototypes haute fidélité, nous réalisons des produits numériques qui semblent simples d'utilisation et fonctionnent parfaitement sur tous les appareils.`,
    },
    {
        title: 'Design Web',
        content: `Nous concevons des expériences utilisateur intuitives, axées sur la conversion, et des interfaces élégantes et épurées que les utilisateurs adorent. De la recherche et des wireframes aux prototypes haute fidélité, nous réalisons des produits numériques qui semblent simples d'utilisation et fonctionnent parfaitement sur tous les appareils.`,
    },
    {
        title: 'Branding',
        content: `Nous concevons des expériences utilisateur intuitives, axées sur la conversion, et des interfaces élégantes et épurées que les utilisateurs adorent. De la recherche et des wireframes aux prototypes haute fidélité, nous réalisons des produits numériques qui semblent simples d'utilisation et fonctionnent parfaitement sur tous les appareils.`,
    },
    {
        title: 'Developpement',
        content: `Nous concevons des expériences utilisateur intuitives, axées sur la conversion, et des interfaces élégantes et épurées que les utilisateurs adorent. De la recherche et des wireframes aux prototypes haute fidélité, nous réalisons des produits numériques qui semblent simples d'utilisation et fonctionnent parfaitement sur tous les appareils.`,
    },
];

export default function Services() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-0 md:py-28">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                <div className="md:sticky md:top-28 md:self-start">
                    <SectionHeading
                        eyebrow="Nos expertises"
                        title="Nous proposons"
                        description="Tout ce qui touche au design, nous nous en occupons."
                    />
                </div>
                <SlideUp>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        {services.map((service, index) => (
                            <AccordionItem
                                value={`item-${index + 1}`}
                                key={index}
                                className="border-b border-border/60"
                            >
                                <AccordionTrigger className="py-6 text-xl font-bold hover:no-underline [&[data-state=open]]:text-primary">
                                    <span className="flex items-center gap-4">
                                        <span className="font-heading text-sm font-semibold text-primary/60">
                                            0{index + 1}
                                        </span>
                                        {service.title}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pl-10 text-lg text-muted-foreground">
                                    {service.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </SlideUp>
            </div>
        </section>
    );
}
