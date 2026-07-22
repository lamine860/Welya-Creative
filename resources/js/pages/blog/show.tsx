import { Button } from '@/components/button';
import PageHeader from '@/components/fronts/page-header';
import FrontLayout from '@/layouts/front-layout';
import { formatDate } from '@/lib/utils';
import { Post } from '@/types';
import { Head } from '@inertiajs/react';
import { Calendar1, User } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

type Props = {
    post: Post;
};

const socials = [
    {
        label: 'Facebook',
        icon: FaFacebook,
        url: '',
    },
    {
        label: 'X-Twitter',
        icon: FaTwitter,
        url: '',
    },
    {
        label: 'LinkedIn',
        icon: FaLinkedin,
        url: '',
    },
];

export default function BlogShow({ post }: Props) {
    return (
        <FrontLayout>
            <Head title={post.title} />
            <PageHeader eyebrow="Article" title={post.title}>
                <div className="flex items-center space-x-4 text-sm">
                    <span className="inline-flex items-center gap-x-1 text-muted-foreground">
                        <User className="size-4" />
                        {post.author?.name}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="inline-flex items-center gap-x-1 text-muted-foreground">
                        <Calendar1 className="size-4" />
                        {formatDate(post.created_at)}
                    </span>
                </div>
            </PageHeader>
            <section className="pb-24">
                <div className="mx-auto max-w-3xl space-y-8 px-4 md:px-0">
                    <p className="text-xl text-muted-foreground">
                        {post.excerpt}
                    </p>
                    <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                        <img
                            src={post.banner_url}
                            alt={post.title}
                            className="w-full"
                        />
                    </div>
                    <div
                        className="prose prose-xl prose-slate dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 md:flex-row">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase"
                                >
                                    {tag.name.fr}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="mr-1 text-sm text-muted-foreground">
                                Partager cet article
                            </span>
                            {socials.map(({ label, icon: Icon }) => (
                                <Button
                                    variant={'outline'}
                                    key={label}
                                    size={'icon'}
                                    aria-label={label}
                                    className="rounded-full transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                    <Icon className="size-5" />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
