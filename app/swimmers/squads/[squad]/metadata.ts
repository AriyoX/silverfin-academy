import type { Metadata } from 'next';
import { SWIMMERS } from '../../../constants';

interface SquadPageProps {
  params: {
    squad: string;
  };
}

export async function generateMetadata({ params }: SquadPageProps): Promise<Metadata> {
  const { squad } = await params;
  const squadType = squad as 'learn-to-swim' | 'development' | 'performance';
  
  const squadInfo = {
    'learn-to-swim': {
      title: 'Learn to Swim Squad',
      description: 'Meet our youngest swimmers (ages 4-10) building water confidence, learning basic strokes, and developing a love for the water.',
    },
    'development': {
      title: 'Development Squad',
      description: 'Our intermediate swimmers (ages 9-14) refining technique, building endurance, and preparing for competitive swimming.',
    },
    'performance': {
      title: 'Performance Squad',
      description: 'Elite swimmers (ages 13+) training at the highest level for national and international competition.',
    }
  };

  const info = squadInfo[squadType] || {
    title: 'Swimming Squad',
    description: 'Swimming squad at Silverfin Academy'
  };

  const swimmers = SWIMMERS.filter(swimmer => swimmer.squad === squadType);

  return {
    title: `${info.title} | Silverfin Academy`,
    description: `${info.description} View all ${swimmers.length} swimmers in our ${info.title.toLowerCase()}.`,
    keywords: [
      `${info.title.toLowerCase()}`,
      'silverfin swimmers',
      'uganda swimming',
      'swimming squad',
      'swimming training',
      'competitive swimming'
    ],
    openGraph: {
      title: `${info.title} | Silverfin Academy`,
      description: `${info.description} View all ${swimmers.length} swimmers in our ${info.title.toLowerCase()}.`,
      type: 'website',
      url: `https://silverfinacademy.com/swimmers/squads/${squadType}`,
      images: [
        {
          url: '/hero-images/swimmer_1.jpg',
          width: 1200,
          height: 630,
          alt: `${info.title} - Silverfin Academy`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${info.title} | Silverfin Academy`,
      description: `${info.description} View all ${swimmers.length} swimmers.`,
      images: ['/hero-images/swimmer_1.jpg']
    }
  };
}

export async function generateStaticParams() {
  return [
    { squad: 'learn-to-swim' },
    { squad: 'development' },
    { squad: 'performance' }
  ];
}
