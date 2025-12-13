import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { blog, contact, home, projects, services } from '@/routes';
import { Link } from '@inertiajs/react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-slate-200 py-16 dark:bg-slate-800">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <Link href={home()} className="flex items-center">
                            <AppLogo />
                        </Link>
                        <p className="text-sm text-muted-foreground md:max-w-2/3">
                            Welya Creative est une agence digital qui fournit
                            des services de branding, d'UX/UI et de conception
                            de produits dans le monde entier.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-1 text-muted-foreground">
                        <li>
                            <Link href={projects()}>Portfolio</Link>
                        </li>
                        <li>
                            <Link href={services()}>Services</Link>
                        </li>
                        <li>
                            <Link href={contact()}>Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-1 text-muted-foreground">
                        <li>
                            <Link href={blog()}>Blog</Link>
                        </li>
                        <li>
                            <a href="">Carièrre</a>
                        </li>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                    </ul>
                    <ul className="flex items-center gap-1 text-muted-foreground">
                        <li>
                            <Button variant={'outline'} size={'icon'}>
                                <FaFacebook />
                            </Button>
                        </li>
                        <li>
                            <Button variant={'outline'} size={'icon'}>
                                <FaLinkedin />
                            </Button>
                        </li>
                        <li>
                            <Button variant={'outline'} size={'icon'}>
                                <FaXTwitter />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
