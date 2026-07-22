import SlideUp from '@/components/animations/slide-up';
import { Eyebrow } from '@/components/fronts/section-heading';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface PageHeaderProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    className?: string;
    children?: ReactNode;
}

export default function PageHeader({
    eyebrow,
    title,
    description,
    className,
    children,
}: PageHeaderProps) {
    return (
        <section
            className={cn(
                'relative overflow-hidden pt-16 pb-10 md:pt-20',
                className,
            )}
        >
            <div className="pointer-events-none absolute -top-24 left-1/3 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <div className="flex flex-col gap-6">
                    {eyebrow && (
                        <SlideUp>
                            <Eyebrow>{eyebrow}</Eyebrow>
                        </SlideUp>
                    )}
                    <SlideUp>
                        <h1 className="max-w-4xl font-heading text-4xl font-extrabold tracking-tight uppercase md:text-6xl">
                            {title}
                        </h1>
                    </SlideUp>
                    {description && (
                        <SlideUp>
                            <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
                                {description}
                            </p>
                        </SlideUp>
                    )}
                    {children}
                </div>
            </div>
        </section>
    );
}
