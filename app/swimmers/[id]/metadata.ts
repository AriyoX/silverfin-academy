import type { Metadata } from 'next';
import { SWIMMERS } from '../../constants';

interface SwimmerPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: SwimmerPageProps): Promise<Metadata> {
  const { id } = await params;
  const swimmer = SWIMMERS.find(s => s.id === id);

  if (!swimmer) {
    return {
      title: 'Swimmer Not Found | Silverfin Academy',
      description: 'The requested swimmer profile could not be found.'
    };
  }

  const squadLabel = swimmer.squad === 'learn-to-swim' ? 'Learn to Swim' :
                    swimmer.squad === 'development' ? 'Development Squad' : 'Performance Squad';

  return {
    title: `${swimmer.name} | ${squadLabel} | Silverfin Academy`,
    description: `Meet ${swimmer.name}, age ${swimmer.age}, from our ${squadLabel}. ${swimmer.bio} View their personal bests, competition results, and achievements.`,
    keywords: [
      swimmer.name.toLowerCase(),
      'silverfin swimmer',
      'uganda swimming',
      squadLabel.toLowerCase(),
      'swimmer profile',
      'swimming achievements'
    ],
    openGraph: {
      title: `${swimmer.name} | Silverfin Academy`,
      description: `Meet ${swimmer.name}, age ${swimmer.age}, from our ${squadLabel}. ${swimmer.bio}`,
      type: 'profile',
      url: `https://silverfinacademy.com/swimmers/${swimmer.id}`,
      images: [
        {
          url: swimmer.imageUrl,
          width: 400,
          height: 400,
          alt: swimmer.name
        }
      ]
    },
    twitter: {
      card: 'summary',
      title: `${swimmer.name} | Silverfin Academy`,
      description: `Meet ${swimmer.name}, age ${swimmer.age}, from our ${squadLabel}.`,
      images: [swimmer.imageUrl]
    }
  };
}

export async function generateStaticParams() {
  return SWIMMERS.map((swimmer) => ({
    id: swimmer.id,
  }));
}
