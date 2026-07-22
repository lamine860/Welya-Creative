import SlideUp from '@/components/animations/slide-up';
import SectionHeading from '@/components/fronts/section-heading';
import { formatDate } from '@/lib/utils';
import { Post } from '@/types';
import { usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
    const { posts } = usePage<{
        posts: Post[];
    }>().props;
    if (!posts || posts.length === 0) return null;
    return (
        <section className="py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <SectionHeading
                    eyebrow="Blog"
                    title="Conseils & Tendances digitales"
                    description="Analyses, conseils et tendances du digital pour aider les marques à mieux se positionner et à grandir."
                />
                <SlideUp>
                    <div className="grid gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <a
                                key={post.id}
                                href={post.url}
                                target="_blank"
                                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase"
                                            >
                                                {tag.name.fr}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-semibold transition-colors group-hover:text-primary md:text-xl">
                                        {post.title}
                                    </h3>
                                    <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-sm">
                                        <span className="text-muted-foreground">
                                            {post.author.name} ·{' '}
                                            {formatDate(post.created_at)}
                                        </span>
                                        <span className="inline-flex items-center font-semibold text-primary">
                                            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </SlideUp>
            </div>
        </section>
    );
}
