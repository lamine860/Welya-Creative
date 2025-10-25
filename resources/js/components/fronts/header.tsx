import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export default function Header() {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);
    const navLinks = [
        { name: 'Accueil', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'À propos', href: '#' },
        { name: 'Blog', href: '#' },
    ];
    return (
        <header className="sticky z-40 flex items-center overflow-hidden bg-white px-6 py-6 md:top-0 md:mx-auto md:px-8  dark:bg-slate-800">
            <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
                <Link href="" className="flex items-center">
                    <AppLogo />
                </Link>
                <div className="hidden md:flex">
                    <nav>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="mr-3 rounded-md px-3 py-2 uppercase font-semibold text-sm text-slate-700 transition duration-200 hover:text-primary dark:text-slate-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div
                    className={cn(
                        'fixed top-0 left-0 z-50 min-h-screen w-full -translate-x-full bg-slate-950 md:hidden',
                        {
                            'translate-x-0': mobileMenuOpen,
                            'transition-transform duration-300 ease-in-out': true,
                        },
                    )}
                >
                    <div className="flex items-center justify-end p-5">
                        <Button
                            className="md:hidden"
                            variant={'ghost'}
                            onClick={() => toggleMobileMenu(false)}
                        >
                            <IoIosCloseCircleOutline className="size-8 text-slate-50" />
                        </Button>
                    </div>
                    <nav className="flex flex-col items-center justify-center space-y-4 py-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="rounded-md px-3 py-2 text-2xl font-semibold text-slate-50 uppercase"
                                onClick={() => toggleMobileMenu(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Button
                    className="md:hidden"
                    variant={'ghost'}
                    onClick={() => toggleMobileMenu(true)}
                >
                    <HiDotsHorizontal className="size-8" />
                </Button>
            </div>
        </header>
    );
}
