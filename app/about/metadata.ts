import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Silverfin Academy - Uganda\'s Premier Swimming Club',
  description: 'Learn about Silverfin Academy\'s 10+ years of excellence in aquatic sports. Discover our mission, world-class facilities, expert coaching team, and commitment to developing champions in Uganda.',
  keywords: [
    'Silverfin Academy',
    'swimming club Uganda',
    'aquatic sports',
    'swimming coaches',
    'swimming facilities',
    'swimming training',
    'Uganda swimming',
    'competitive swimming'
  ],
  openGraph: {
    title: 'About Silverfin Academy - Uganda\'s Leading Swimming Club',
    description: 'Discover our story, mission, and commitment to excellence in aquatic sports training and athlete development.',
    type: 'website',
    images: [
      {
        url: '/about-images/group.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverfin Academy swimming team and facilities',
      },
    ],
  },
};
