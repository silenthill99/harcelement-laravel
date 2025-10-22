export interface PaginatedProps<T> {
    data: T[],
    links: {
        label: string;
        url: string;
        active: boolean;
    }[]
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
}
