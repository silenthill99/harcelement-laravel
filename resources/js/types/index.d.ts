export interface PaginatedProps<T> {
    data: T[];
    links: {
        label: string;
        url: string | null;
        active: boolean;
    }[];
    current_page: number;
    first_page_url: string;
    from: number | null;
    last_page: number;
    last_page_url: string;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export interface Video {
    id: number;
    title: string;
    link: string;
    created_at: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
    flash?: {
        success?: string;
    }
}
