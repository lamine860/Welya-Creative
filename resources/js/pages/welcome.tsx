import About from '@/components/fronts/sections/about';
import Brand from '@/components/fronts/sections/brand';
import Faq from '@/components/fronts/sections/faq';
import Hero from '@/components/fronts/sections/hero';
import Hiring from '@/components/fronts/sections/hiring';
import Projects from '@/components/fronts/sections/projects';
import Services from '@/components/fronts/sections/services';
import { Testimonials } from '@/components/fronts/sections/testimonials';
import FrontLayout from '@/layouts/front-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <FrontLayout>
            <Head title="Welcome" />
            <Hero />
            <Brand />
            <About />
            <Services />
            <Projects />
            <Hiring />
            <Testimonials/>
            <Faq/>
        </FrontLayout>
    );
}
