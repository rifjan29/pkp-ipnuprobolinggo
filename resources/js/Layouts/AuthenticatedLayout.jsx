import { AppSidebar } from '@/Components/app-sidebar';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { SiteHeader } from '@/Components/site-header';
import { SidebarInset, SidebarProvider } from '@/Components/ui/sidebar';
import { Toaster } from '@/Components/ui/sonner';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
         (<SidebarProvider>
                <AppSidebar user={user} />
                <SidebarInset>
                    <SiteHeader />
                    <Toaster richColors position="top-right"  />
                    <main>{children}</main>
                </SidebarInset>
        </SidebarProvider>)

    );
}
