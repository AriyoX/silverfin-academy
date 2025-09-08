import Link from 'next/link';
import { Users } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Swimmer Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the swimmer you&apos;re looking for. They may have moved to a different squad or the link might be incorrect.
        </p>
        
        <div className="space-x-4">
          <Link
            href="/swimmers"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Swimmers
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
