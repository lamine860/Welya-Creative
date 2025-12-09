import Footer from '@/components/fronts/footer';
import Header from '@/components/fronts/header';
import { Toaster } from '@/components/sonner';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface FrontLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: FrontLayoutProps) => (
    <>
        <Head title="Welcome">
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
                href="https://fonts.bunny.net/css?family=inter:400,500,600"
                rel="stylesheet"
            />
        </Head>
        <div className="min-h-screen w-full bg-slate-100 text-foreground dark:bg-slate-900">
            <Header />
            <main {...props}>{children}</main>
            <Toaster />
            <Footer />
        </div>
    </>
);
