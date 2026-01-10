import FrontLayout from '@/layouts/front-layout';
import { Post } from '@/types';
import { Head } from '@inertiajs/react';

type Props = {
    posts: Post;
};

export default function BlogShow({ posts }: Props) {
    console.log(posts);
    return (
        <FrontLayout>
            <Head title="Blog" />
            <div className="mx-auto max-w-7xl px-4 md:px-0">
                {/* <SlideUp>
                    <Blog8 {...demoData} />
                </SlideUp> */}
            </div>
        </FrontLayout>
    );
}
