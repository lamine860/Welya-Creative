import SlideUp from '@/components/animations/slide-up';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 'post-1',
        title: 'Building Modern UIs: A Deep Dive into Shadcn and React Components',
        summary:
            'Join us for an in-depth exploration of building modern user interfaces using shadcn/ui and React. Learn best practices and advanced techniques.',
        label: 'Web Design',
        author: 'Sarah Chen',
        published: '15 Feb 2024',
        url: 'https://shadcnblocks.com',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
        tags: ['Web Design', 'UI Development'],
    },
    {
        id: 'post-2',
        title: 'Mastering Tailwind CSS: From Basics to Advanced Techniques',
        summary:
            'Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.',
        label: 'Web Design',
        author: 'Michael Park',
        published: '22 Feb 2024',
        url: 'https://shadcnblocks.com',
        image: 'https://www.shadcnblocks.com/images/block/placeholder-dark-1.svg',
        tags: ['Web Design', 'CSS'],
    },
];

export default function Blog() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <SlideUp>
                    <h2 className="mb-4 text-3xl font-bold uppercase md:text-5xl">
                        Conseils & Tendances digitales
                    </h2>
                </SlideUp>
                <SlideUp>
                    <p className="text-lg font-medium text-muted-foreground md:max-w-lg md:text-xl">
                        Analyses, conseils et tendances du digital pour aider
                        les marques à mieux se positionner et à grandir.
                    </p>
                </SlideUp>
                <SlideUp>
                    <div className="grid pt-16 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                        {posts.map((post) => (
                            <Card
                                key={post.id}
                                className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12"
                            >
                                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                    <div className="sm:col-span-5">
                                        <div className="mb-4 md:mb-6">
                                            <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
                                                {post.tags?.map((tag) => (
                                                    <span key={tag}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                className="hover:underline"
                                            >
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-4 text-muted-foreground md:mt-5">
                                            {post.summary}
                                        </p>
                                        <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                                            <span className="text-muted-foreground">
                                                {post.author}
                                            </span>
                                            <span className="text-muted-foreground">
                                                •
                                            </span>
                                            <span className="text-muted-foreground">
                                                {post.published}
                                            </span>
                                        </div>
                                        <div className="mt-6 flex items-center space-x-2 md:mt-8">
                                            <a
                                                href={post.url}
                                                target="_blank"
                                                className="inline-flex items-center font-semibold hover:underline md:text-base"
                                            >
                                                <span>Read more</span>
                                                <ArrowRight className="ml-2 size-4 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="order-first sm:order-last sm:col-span-5">
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            className="block"
                                        >
                                            <div className="aspect-[16/9] overflow-clip rounded-lg border border-border">
                                                <img
                                                    src={post.image}
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
                </SlideUp>
            </div>
        </section>
    );
}
