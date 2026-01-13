import { Card } from '@/components/ui/card';
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
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <section className="space-y-16 py-16">
                    <div className="text-center">
                        <h2 className="mx-auto mb-4 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
                            News
                        </h2>
                        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                            Conseils, stratégies et inspirations digitales.
                            Découvrez nos articles sur le web design, le
                            développement et le branding pour aider les
                            entreprises à construire une présence en ligne
                            performante et durable.
                        </p>
                    </div>

                    <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                        {posts.map((post) => (
                            <Card
                                key={post.id}
                                className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
                            >
                                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                    <div className="sm:col-span-5">
                                        <div className="mb-4 md:mb-6">
                                            <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                                                {post.tags.map((tag) => (
                                                    <span key={tag.id}>
                                                        {tag.name.fr}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                                            <a
                                                href={post.url}
                                                className="hover:underline"
                                            >
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-4 text-lg text-muted-foreground md:mt-5">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                                            <span className="text-muted-foreground">
                                                {post.author?.name}
                                            </span>
                                            <span className="text-muted-foreground">
                                                •
                                            </span>
                                            <span className="text-muted-foreground">
                                                {formatDate(post.created_at)}
                                            </span>
                                        </div>
                                        <div className="mt-6 flex items-center space-x-2 md:mt-8">
                                            <a
                                                href={post.url}
                                                className="inline-flex items-center font-semibold hover:underline md:text-base"
                                            >
                                                <span>Lire l’article</span>
                                                <ArrowRight className="ml-2 size-4 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="order-first sm:order-last sm:col-span-5">
                                        <a href="" className="block">
                                            <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                                                <img
                                                    src={post.banner_url}
                                                    alt={post.title}
                                                    className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </FrontLayout>
    );
}
