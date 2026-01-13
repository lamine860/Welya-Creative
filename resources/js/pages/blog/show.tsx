import { Button } from '@/components/button';
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
            <Head title="Blog" />
            <Head title="Blog" />
            <section className="py-16">
                <div className="mx-auto max-w-5xl space-y-6 px-4 md:px-0">
                    <h1 className="text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
                        {post.title}
                    </h1>
                    <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
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
                    <p className="text-xl text-muted-foreground">
                        {post.excerpt}
                    </p>
                    <img
                        src={post.banner_url}
                        alt={post.title}
                        className="w-full rounded"
                    />
                    <div
                        className="prose prose-xl prose-slate dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5">
                            {post.tags.map((tag) => (
                                <Button variant={'link'} key={tag.id}>
                                    {tag.name.fr}
                                </Button>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <span className="text-muted-foreground">
                                Partager ce article
                            </span>
                            {socials.map(({ label, icon: Icon }) => (
                                <Button
                                    variant={'link'}
                                    key={label}
                                    size={'icon-lg'}
                                >
                                    <Icon className="size-6" />
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
