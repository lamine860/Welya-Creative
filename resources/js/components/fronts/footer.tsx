import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { contact, home, projects, services } from '@/routes';
import blog from '@/routes/blog';
import { Link } from '@inertiajs/react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    const linkClass =
        'text-muted-foreground transition-colors duration-200 hover:text-primary';
    const socials = [
        { icon: FaFacebook, label: 'Facebook' },
        { icon: FaLinkedin, label: 'LinkedIn' },
        { icon: FaXTwitter, label: 'X' },
    ];

    return (
        <footer className="border-t border-border/60 bg-slate-200 py-16 dark:bg-slate-800">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <Link href={home()} className="mb-3 flex items-center">
                            <AppLogo />
                        </Link>
                        <p className="text-muted-foreground md:max-w-2/3">
                            Welya Creative est une agence digital qui fournit
                            des services de branding, d'UX/UI et de conception
                            de produits dans le monde entier.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className="mb-1 text-sm font-bold tracking-wide text-foreground uppercase">
                            Entreprise
                        </li>
                        <li>
                            <Link href={projects()} className={linkClass}>
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href={services()} className={linkClass}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href={contact()} className={linkClass}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li className="mb-1 text-sm font-bold tracking-wide text-foreground uppercase">
                            Ressources
                        </li>
                        <li>
                            <Link href={blog.index()} className={linkClass}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <a href="" className={linkClass}>
                                Carrière
                            </a>
                        </li>
                        <li>
                            <a href="" className={linkClass}>
                                FAQ
                            </a>
                        </li>
                    </ul>
                    <ul className="flex items-start gap-2">
                        {socials.map(({ icon: Icon, label }) => (
                            <li key={label}>
                                <Button
                                    variant={'outline'}
                                    size={'icon'}
                                    aria-label={label}
                                    className="rounded-full transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Icon />
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row">
                    <p>
                        © {new Date().getFullYear()} Welya Creative. Tous droits
                        réservés.
                    </p>
                    <p>Conçu avec passion à Conakry.</p>
                </div>
            </div>
        </footer>
    );
}
