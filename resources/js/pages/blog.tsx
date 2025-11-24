import SlideUp from '@/components/animations/slide-up';
import { Blog8 } from '@/components/blog8';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

const demoData = {
    heading: 'News',
    description:
        'Explore the latest insights and tutorials on modern web development, UI design and component-driven architecture.',
    posts: [
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
    ],
};

export default function Blog() {
    return (
        <FrontLayout>
            <Head title="Welcome" />
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                <SlideUp>
                    <Blog8 {...demoData} />
                </SlideUp>
            </div>
        </FrontLayout>
    );
}
