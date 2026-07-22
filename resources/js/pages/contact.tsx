import SlideUp from '@/components/animations/slide-up';
import { Checkbox } from '@/components/checkbox';
import PageHeader from '@/components/fronts/page-header';
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
            <PageHeader
                eyebrow="Contact"
                title="Discutons de votre projet"
                description="Tout ce qui touche au design, nous nous en occupons. Parlez-nous de votre vision et nous vous répondrons rapidement."
            />
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex flex-col gap-6">
                            <SlideUp>
                                <div className="flex flex-col space-y-6 rounded-2xl bg-gradient-to-br from-primary to-indigo-600 p-8 shadow-xl shadow-primary/25">
                                    <img
                                        src="/images/teams/contact-avatar.jpg"
                                        className="size-24 rounded-full ring-4 ring-white/30"
                                        alt="Contact avatar"
                                    />
                                    <h3 className="font-heading text-3xl font-bold text-slate-50">
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
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <SlideUp>
                                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-10">
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
                                                            message={
                                                                errors['name']
                                                            }
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
                                                                errors[
                                                                    'company'
                                                                ]
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
                                                        Parlez-nous de votre
                                                        projet
                                                    </Label>
                                                    <Textarea
                                                        required
                                                        className="h-36"
                                                        name="message"
                                                    ></Textarea>
                                                    <InputError
                                                        message={
                                                            errors['message']
                                                        }
                                                    />
                                                </div>
                                                <Button className="group rounded-full bg-gradient-to-r from-primary to-indigo-500 px-8 py-6 text-lg font-bold shadow-md shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40">
                                                    Soumettre
                                                    <GoPaperAirplane className="transition-transform duration-200 group-hover:translate-x-1" />
                                                </Button>
                                            </>
                                        )}
                                    </Form>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
