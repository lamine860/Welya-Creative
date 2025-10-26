import AppLogo from '@/components/app-logo';
import { Link } from '@inertiajs/react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-slate-50 py-16 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <Link href="" className="flex items-center">
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
                            <a href="">Portfolio</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-1 text-muted-foreground">
                        <li>
                            <a href="">Blog</a>
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
