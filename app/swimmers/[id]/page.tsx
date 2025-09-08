import React from 'react';
import { notFound } from 'next/navigation';
import { SWIMMERS } from '../../constants';
import SwimmerClientPage from './client-page';

interface SwimmerPageProps {
  params: {
    id: string;
  };
}

// Export metadata generation functions
export { generateMetadata, generateStaticParams } from './metadata';

const SwimmerPage: React.FC<SwimmerPageProps> = async ({ params }) => {
  const { id } = await params;
  
  // Find the swimmer by ID
  const swimmer = SWIMMERS.find(s => s.id === id);

  if (!swimmer) {
    notFound();
  }

  return <SwimmerClientPage swimmer={swimmer} />;
};

export default SwimmerPage;
