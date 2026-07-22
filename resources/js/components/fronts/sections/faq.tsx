import SlideUp from '@/components/animations/slide-up';
import SectionHeading from '@/components/fronts/section-heading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoPaperAirplane } from 'react-icons/go';

const responses = [
    {
        question: 'Why not just hire a full-time designer?',
        response:
            'We give you the best of both worlds, top-tier design without the long timelines, high costs, or overhead. Our service is flexible, fast, and tailored to modern teams who want results without the wait.',
    },
    {
        question: 'How do we request designs?',
        response:
            'Just send us a message with what you need, no complicated tools or platforms. Whether it’s a quick update or a full product design, we’ll handle it from there and keep things seamless.',
    },
    {
        question: 'How do we request designs?',
        response:
            'Just send us a message with what you need, no complicated tools or platforms. Whether it’s a quick update or a full product design, we’ll handle it from there and keep things seamless.',
    },
    {
        question: 'How do we request designs?',
        response:
            'Just send us a message with what you need, no complicated tools or platforms. Whether it’s a quick update or a full product design, we’ll handle it from there and keep things seamless.',
    },
    {
        question: 'How do we request designs?',
        response:
            'Just send us a message with what you need, no complicated tools or platforms. Whether it’s a quick update or a full product design, we’ll handle it from there and keep things seamless.',
    },
    {
        question: 'How do we request designs?',
        response:
            'Just send us a message with what you need, no complicated tools or platforms. Whether it’s a quick update or a full product design, we’ll handle it from there and keep things seamless.',
    },
    {
        question: 'How do we request designs?',
        response:
            'Just send us a message with what you need, no complicated tools or platforms. Whether it’s a quick update or a full product design, we’ll handle it from there and keep things seamless.',
    },
];
export default function Faq() {
    return (
        <section className="bg-slate-100 py-24 md:py-32 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
                    <div className="space-y-8 md:col-span-8">
                        <SectionHeading
                            eyebrow="FAQ"
                            title="Vos Réponses"
                            description="Les questions les plus fréquentes, réunies au même endroit."
                        />
                        <SlideUp>
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {responses.map((response, index) => (
                                    <AccordionItem
                                        value={`item-${index + 1}`}
                                        key={index}
                                        className="border-b border-border/60"
                                    >
                                        <AccordionTrigger className="py-5 text-lg font-bold hover:no-underline md:text-xl [&[data-state=open]]:text-primary">
                                            {response.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base text-muted-foreground md:text-lg">
                                            {response.response}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </SlideUp>
                    </div>
                    <div className="flex flex-col gap-8 md:col-span-4">
                        <SlideUp>
                            <div className="flex flex-col space-y-6 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 p-8 shadow-xl shadow-primary/25">
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
                                            <span className="text-slate-100">
                                                hello@welyacreative.com
                                            </span>
                                        </div>
                                        <GoPaperAirplane className="size-5 text-slate-200" />
                                    </a>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="flex flex-col space-y-5 rounded-2xl border border-border/60 bg-card p-8 shadow-sm">
                                <h3 className="text-xl font-semibold">
                                    Des informations dans votre boîte e-mail
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Inscrivez-vous à notre newsletter pour
                                    prendre des décisions commerciales plus
                                    judicieuses.
                                </p>
                                <div className="flex justify-between gap-2">
                                    <Input
                                        name="email"
                                        placeholder="moi@domaine.com"
                                        className="flex-1 rounded-full"
                                    />
                                    <Button
                                        type="submit"
                                        size="icon"
                                        className="rounded-full"
                                    >
                                        <GoPaperAirplane className="size-5" />
                                    </Button>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    );
}
