import React from 'react';
import Link from 'next/link';
import { Logo } from './components/ui/Logo';
import { Button } from './components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <Logo size="lg" textClassName="text-primary" />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-secondary mb-4">Page Not Found</h2>
        <p className="text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to swimming excellence.
        </p>
        <Link href="/">
          <Button size="lg">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
