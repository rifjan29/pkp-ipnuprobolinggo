import React from 'react';
import { usePage } from '@inertiajs/react';
import Footer from '@/Components/frontend/footer';
import Topbar from '@/Components/frontend/topbar';

export default function FrontendLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar auth={auth} />
      <main className="flex-grow dark:bg-gray-800 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
