import SlideUp from '@/components/animations/slide-up';
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
        <section className="bg-slate-100 py-16 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                    <div className="space-y-4 md:col-span-8">
                        <SlideUp>
                            <h2 className="text-3xl font-bold uppercase md:text-5xl">
                                Vos Reponses
                            </h2>
                        </SlideUp>
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
                                    >
                                        <AccordionTrigger className="text-xl font-bold">
                                            {response.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-lg text-muted-foreground">
                                            {response.response}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </SlideUp>
                    </div>
                    <div className="flex flex-col gap-6 md:col-span-4">
                        <SlideUp>
                            <div className="flex flex-col space-y-6 rounded-xl bg-primary p-6 shadow-lg">
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
                        <SlideUp>
                            <div className="flex flex-col space-y-6 rounded-xl border p-6 shadow-lg">
                                <h3 className="text-xl font-medium">
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
                                        className="flex-1"
                                    />
                                    <Button type="submit" variant={'ghost'}>
                                        <GoPaperAirplane className="size-5 text-primary" />
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
