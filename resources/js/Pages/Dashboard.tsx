import { Head } from '@inertiajs/react';
import {BreadcrumbItem} from "@/types";
import {dashboard} from "@/routes";
import AppLayout from "@/Layouts/AppLayout";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Dashboard",
        href: dashboard().url
    }
]

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

        </AppLayout>
    );
}
