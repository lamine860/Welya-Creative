import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
export interface Project {
    id: number;
    title: string;
    slug: string;
    industry: string;
    customer: string;
    year: string;
    description: string;
    challenge: string;
    mission: string;
    solutions: string;
    results: boolean;
    created_at: string;
    updated_at: string;
    gallery: Gallery[];
    [key: string]: unknown; // This allows for additional properties...
}
export interface Gallery {
    id: number;
    url: string;
    thumb: string;
}

export interface Testimony {
    id: string;
    name: string;
    position: string;
    company: string;
    message: string;
    avatar: string;
    is_published: boolean;
}

export interface Post {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    banner_url: string;
    content: string;
    url: string;
    created_at;
    updated_at;
    author: {
        id: number;
        name: string;
        email: string;
    };
    category: {
        id: number;
        name: string;
        description: string;
    };
    tags: {
        id: number;
        name: { fr: string; en: string };
        slug: { fr: string; en: string };
    }[];
}
