import SlideUp from '@/components/animations/slide-up';
import { Input } from '@/components/input';
import { RadioGroup, RadioGroupItem } from '@/components/radio-group';
import { Textarea } from '@/components/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import FrontLayout from '@/layouts/front-layout';
import { Form, Head } from '@inertiajs/react';
import { GoPaperAirplane } from 'react-icons/go';

export default function Projects() {
    return (
        <FrontLayout>
            <Head title="Contact" />
            <section className="min-h-screen pt-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid space-y-10 md:grid-cols-3 md:gap-12">
                        <div className="flex flex-col gap-6">
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
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <SlideUp>
                                <h1 className="mb-4 text-2xl font-bold uppercase md:text-4xl">
                                    let’s talk
                                </h1>
                            </SlideUp>
                            <SlideUp>
                                <p className="text-lg font-medium text-muted-foreground">
                                    All things design, we got you covered.
                                </p>
                            </SlideUp>

                            <div className="mt-12">
                                <Form
                                    action="contact"
                                    method="post"
                                    className="space-y-5"
                                >
                                    <div className="flex flex-col items-center gap-x-6 gap-y-5 sm:flex-row [&>*]:w-full">
                                        <div className="flex flex-col gap-3">
                                            <Label className="font-medium">
                                                Nom
                                            </Label>
                                            <Input type="text" required />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Label>E-mail</Label>
                                            <Input type="email" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-x-6 gap-y-5 sm:flex-row [&>*]:w-full">
                                        <div className="flex flex-col gap-3">
                                            <Label className="font-medium">
                                                Numéro de téléphone
                                            </Label>
                                            <div className="relative mt-2">
                                                <div className="absolute inset-y-0 left-3 my-auto flex h-6 items-center border-r pr-2">
                                                    <select className="h-full rounded-lg bg-transparent text-sm outline-none">
                                                        <option>US</option>
                                                        <option>ES</option>
                                                        <option>MR</option>
                                                    </select>
                                                </div>
                                                <input
                                                    type="number"
                                                    placeholder="+1 (555) 000-000"
                                                    required
                                                    className="w-full appearance-none rounded-lg border bg-transparent py-2 pr-3 pl-[4.5rem] shadow-sm outline-none focus:border-indigo-600"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Label className="font-medium">
                                                Entreprise
                                            </Label>
                                            <Input type="text" required />
                                        </div>
                                    </div>
                                    <RadioGroup
                                        defaultValue="option-one"
                                        className="py-3"
                                    >
                                        <p className="mb-1 font-medium text-muted-foreground">
                                            Je suis intéressé(e) par
                                        </p>
                                        <div className="flew-wrap flex items-center gap-3">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="option-one"
                                                    id="option-one"
                                                />
                                                <Label htmlFor="option-one">
                                                    UX UI DESIGN
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="option-two"
                                                    id="option-two"
                                                />
                                                <Label htmlFor="option-two">
                                                    Web Design
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="option-two"
                                                    id="option-two"
                                                />
                                                <Label htmlFor="option-two">
                                                    App Design
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="option-two"
                                                    id="option-two"
                                                />
                                                <Label htmlFor="option-two">
                                                    Branding
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="option-two"
                                                    id="option-two"
                                                />
                                                <Label htmlFor="option-two">
                                                    Autre
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem
                                                    value="option-two"
                                                    id="option-two"
                                                />
                                                <Label htmlFor="option-two">
                                                    Developpement
                                                </Label>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                    <div className="flex flex-col gap-3">
                                        <Label className="font-medium">
                                            Parlez-nous de votre projet
                                        </Label>
                                        <Textarea
                                            required
                                            className="h-36"
                                        ></Textarea>
                                    </div>
                                    <Button className="">Soumettre</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section bg-slate-100 py-16 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-0">

                </div>
            </section> */}
        </FrontLayout>
    );
}
