import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Swimmers | Silverfin Academy',
  description: 'Meet our talented swimmers across all programs - from learn to swim beginners to elite performance athletes. Discover their achievements, personal bests, and competition results.',
  keywords: [
    'silverfin swimmers',
    'uganda swimming athletes',
    'swimming academy members',
    'competitive swimmers uganda',
    'swimming training results',
    'athlete profiles'
  ],
  openGraph: {
    title: 'Our Swimmers | Silverfin Academy',
    description: 'Meet our talented swimmers across all programs - from learn to swim beginners to elite performance athletes. Discover their achievements, personal bests, and competition results.',
    type: 'website',
    url: 'https://silverfinacademy.com/swimmers',
    images: [
      {
        url: '/hero-images/swimmer_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverfin Academy Swimmers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Swimmers | Silverfin Academy',
    description: 'Meet our talented swimmers across all programs - from learn to swim beginners to elite performance athletes. Discover their achievements, personal bests, and competition results.',
    images: ['/hero-images/swimmer_1.jpg']
  }
};
