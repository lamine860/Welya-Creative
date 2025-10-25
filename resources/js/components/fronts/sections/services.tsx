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
        <section className="mx-auto max-w-7xl px-4 py-20 md:px-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="mb-10 space-y-6 md:mb-0">
                    <span className="section-caption">Services</span>
                    <h2 className="text-3xl font-bold uppercase md:text-5xl">
                        Nous proposons
                    </h2>
                    <p className="subtitle">
                        Tout ce qui touche au design, nous nous en occupons.
                    </p>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {services.map((service, index) => (
                        <AccordionItem value={`item-${index + 1}`} key={index}>
                            <AccordionTrigger className="text-xl font-bold">
                                {service.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-lg">
                                {service.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
