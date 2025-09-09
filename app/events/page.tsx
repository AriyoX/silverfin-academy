import { Metadata } from 'next';
import { EventsPageContent } from './components';

export const metadata: Metadata = {
  title: 'Events | Silverfin Academy - Swimming Competitions & Galas',
  description: 'Discover upcoming swimming events, competitions, and galas at Silverfin Academy. Join our signature swimming events and witness world-class aquatic sports in Uganda.',
  keywords: [
    'Silverfin Academy events',
    'swimming competitions Uganda',
    'swimming galas',
    'aquatic events',
    'swimming tournaments',
    'Silverfin swimming gala',
    'Uganda swimming events',
    'competitive swimming events'
  ],
  openGraph: {
    title: 'Swimming Events & Competitions - Silverfin Academy',
    description: 'Experience the excitement of competitive swimming at Silverfin Academy events, featuring top swimmers from across the region.',
    type: 'website',
    images: [
      {
        url: '/hero-images/dubai_2.jpg',
        width: 1200,
        height: 630,
        alt: 'Silverfin Academy swimming competition event',
      },
    ],
  },
};

export default function EventsPage() {
  return <EventsPageContent />;
}
