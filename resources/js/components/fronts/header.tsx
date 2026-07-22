import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { aboutsUs, contact, home, projects, services } from '@/routes';
import blog from '@/routes/blog';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoIosCall, IoIosCloseCircleOutline } from 'react-icons/io';

export default function Header() {
    const [mobileMenuOpen, toggleMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { url: currentUrl } = usePage();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: home() },
        { name: 'Services', href: services() },
        { name: 'Portfolio', href: projects() },
        { name: 'À propos', href: aboutsUs() },
        { name: 'Blog', href: blog.index() },
    ];

    const isActive = (href: string) => {
        const path = currentUrl.split('?')[0];
        if (href === '/') return path === '/';
        return path === href || path.startsWith(`${href}/`);
    };

    return (
        <header className="sticky top-0 z-40 w-full px-4 pt-4 md:px-8">
            <div
                className={cn(
                    'mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-300 md:px-6',
                    scrolled
                        ? 'border-white/40 bg-white/70 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70'
                        : 'bg-white/40 backdrop-blur-md dark:bg-slate-900/40',
                )}
            >
                <Link
                    href={home()}
                    className="flex items-center transition-transform duration-200 hover:scale-[0.98]"
                >
                    <AppLogo />
                </Link>
                <div className="hidden md:flex">
                    <nav className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const active = isActive(link.href.url);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        'group relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200',
                                        active
                                            ? 'text-primary'
                                            : 'text-slate-700 hover:text-primary dark:text-slate-300',
                                    )}
                                >
                                    {link.name}
                                    <span
                                        className={cn(
                                            'absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300',
                                            active
                                                ? 'scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100',
                                        )}
                                    />
                                </Link>
                            );
                        })}
                        <Button
                            className={cn(
                                'ml-2 rounded-full bg-gradient-to-r from-primary to-indigo-500 px-6 py-5 font-bold shadow-md shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40',
                            )}
                            asChild
                        >
                            <Link href={contact()}>
                                <span>
                                    <IoIosCall />
                                </span>
                                Demander un devis
                            </Link>
                        </Button>
                    </nav>
                </div>
                <div
                    className={cn(
                        'fixed top-0 left-0 z-50 min-h-screen w-full -translate-x-full bg-slate-50/95 backdrop-blur-xl md:hidden dark:bg-slate-950/95',
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
                            <IoIosCloseCircleOutline className="size-8 dark:text-slate-50" />
                        </Button>
                    </div>
                    <nav className="flex flex-col items-center justify-center space-y-4 py-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'rounded-md px-3 py-2 text-2xl font-semibold transition-colors',
                                    isActive(link.href.url)
                                        ? 'text-primary'
                                        : 'dark:text-slate-50',
                                )}
                                onClick={() => toggleMobileMenu(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            className={cn(
                                'rounded-full bg-gradient-to-r from-primary to-indigo-500 px-8 py-6 text-lg font-bold shadow-md shadow-primary/30',
                            )}
                            asChild
                        >
                            <Link href={contact()}>
                                <span>
                                    <IoIosCall />
                                </span>
                                Demander un devis
                            </Link>
                        </Button>
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
