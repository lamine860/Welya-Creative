import SlideUp from '@/components/animations/slide-up';
import PageHeader from '@/components/fronts/page-header';
import FrontLayout from '@/layouts/front-layout';
import { formatDate } from '@/lib/utils';
import { Post } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

type Props = {
    posts: Post[];
};

export default function BlogIndex({ posts }: Props) {
    return (
        <FrontLayout>
            <Head title="Blog" />
            <PageHeader
                eyebrow="Blog"
                title="News"
                description="Conseils, stratégies et inspirations digitales. Découvrez nos articles sur le web design, le développement et le branding pour aider les entreprises à construire une présence en ligne performante et durable."
            />
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <SlideUp key={post.id}>
                                <a
                                    href={post.url}
                                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img
                                            src={post.banner_url}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-3 flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag.id}
                                                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase"
                                                >
                                                    {tag.name.fr}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-lg font-semibold transition-colors group-hover:text-primary md:text-xl">
                                            {post.title}
                                        </h3>
                                        <p className="mt-3 line-clamp-3 flex-1 text-muted-foreground">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-sm">
                                            <span className="text-muted-foreground">
                                                {post.author?.name} ·{' '}
                                                {formatDate(post.created_at)}
                                            </span>
                                            <span className="inline-flex items-center font-semibold text-primary">
                                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </SlideUp>
                        ))}
                    </div>
                </div>
            </section>
        </FrontLayout>
    );
}
