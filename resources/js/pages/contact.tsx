import SlideUp from '@/components/animations/slide-up';
import { Checkbox } from '@/components/checkbox';
import { Input } from '@/components/input';
import InputError from '@/components/input-error';
import { Textarea } from '@/components/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import FrontLayout from '@/layouts/front-layout';
import { contact_store } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { GoPaperAirplane } from 'react-icons/go';
import { toast } from 'sonner';

interface Props {
    status: string | null;
}
export default function Projects({ status }: Props) {
    useEffect(() => {
        if (status) {
            toast.success(status);
        }
    });
    return (
        <FrontLayout>
            <Head title="Contact" />
            <section className="min-h-screen py-16">
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
                                    Tout ce qui touche au design, nous nous en
                                    occupons.
                                </p>
                            </SlideUp>

                            <SlideUp className="mt-12">
                                <Form
                                    action={contact_store()}
                                    className="space-y-5"
                                    resetOnSuccess
                                >
                                    {({ errors }) => (
                                        <>
                                            <div className="flex flex-col items-center gap-x-6 gap-y-5 sm:flex-row [&>*]:w-full">
                                                <div className="flex flex-col gap-3">
                                                    <Label className="font-medium">
                                                        Nom
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        required
                                                        name="name"
                                                    />
                                                    <InputError
                                                        message={errors['name']}
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <Label>E-mail</Label>
                                                    <Input
                                                        type="email"
                                                        required
                                                        name="email"
                                                    />
                                                    <InputError
                                                        message={
                                                            errors['email']
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center gap-x-6 gap-y-5 sm:flex-row [&>*]:w-full">
                                                <div className="flex flex-col gap-3">
                                                    <Label className="font-medium">
                                                        Numéro de téléphone
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        placeholder="+224 622 000 000"
                                                        required
                                                        name="phone_number"
                                                    />
                                                    <InputError
                                                        message={
                                                            errors[
                                                                'phone_number'
                                                            ]
                                                        }
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <Label className="font-medium">
                                                        Entreprise
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        required
                                                        name="company"
                                                    />
                                                    <InputError
                                                        message={
                                                            errors['company']
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <p className="mb-1 font-medium">
                                                Je suis intéressé(e) par
                                            </p>
                                            <div className="grid grid-cols-2 gap-3 py-2">
                                                <div className="flex items-start gap-3">
                                                    <Checkbox
                                                        id="ux-ui-design"
                                                        name="interest[]"
                                                        value="ux ui design"
                                                    />
                                                    <Label htmlFor="ux-ui-design">
                                                        UX UI Design
                                                    </Label>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Checkbox
                                                        id="web-design"
                                                        name="interest[]"
                                                        value="web design"
                                                    />
                                                    <Label htmlFor="web-design">
                                                        Web Design
                                                    </Label>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Checkbox
                                                        id="app-design"
                                                        name="interest[]"
                                                        value="app design"
                                                    />
                                                    <Label htmlFor="app-design">
                                                        Web Design
                                                    </Label>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Checkbox
                                                        id="branding"
                                                        name="interest[]"
                                                        value="branding"
                                                    />
                                                    <Label htmlFor="branding">
                                                        Branding
                                                    </Label>
                                                </div>
                                                <div className="flex items-start gap-3">
                                                    <Checkbox
                                                        id="marketing digital"
                                                        name="interest[]"
                                                        value="marketing digital"
                                                    />
                                                    <Label htmlFor="marketing digital">
                                                        Marketing Digital
                                                    </Label>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Label className="font-medium">
                                                    Parlez-nous de votre projet
                                                </Label>
                                                <Textarea
                                                    required
                                                    className="h-36"
                                                    name="message"
                                                ></Textarea>
                                                <InputError
                                                    message={errors['message']}
                                                />
                                            </div>
                                            <Button className="text-lg">
                                                Soumettre
                                            </Button>
                                        </>
                                    )}
                                </Form>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
