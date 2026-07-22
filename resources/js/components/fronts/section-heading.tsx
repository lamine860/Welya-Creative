import SlideUp from '@/components/animations/slide-up';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

export function Eyebrow({
    children,
    dark = false,
    className,
}: {
    children: ReactNode;
    dark?: boolean;
    className?: string;
}) {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase',
                dark
                    ? 'border-white/20 bg-white/10 text-white'
                    : 'border-primary/20 bg-primary/5 text-primary',
                className,
            )}
        >
            <span className="size-1.5 rounded-full bg-gradient-to-r from-primary to-indigo-500" />
            {children}
        </span>
    );
}

interface SectionHeadingProps {
    eyebrow?: string;
    title: ReactNode;
    description?: ReactNode;
    align?: 'left' | 'center';
    dark?: boolean;
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'left',
    dark = false,
    className,
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                'flex flex-col gap-5',
                align === 'center' && 'items-center text-center',
                className,
            )}
        >
            {eyebrow && (
                <SlideUp>
                    <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
                </SlideUp>
            )}
            <SlideUp>
                <h2
                    className={cn(
                        'font-heading text-3xl font-bold tracking-tight uppercase md:text-5xl',
                        dark ? 'text-slate-50' : 'text-foreground',
                    )}
                >
                    {title}
                </h2>
            </SlideUp>
            {description && (
                <SlideUp>
                    <p
                        className={cn(
                            'max-w-2xl text-lg',
                            dark ? 'text-slate-200' : 'text-muted-foreground',
                            align === 'center' && 'mx-auto',
                        )}
                    >
                        {description}
                    </p>
                </SlideUp>
            )}
        </div>
    );
}
