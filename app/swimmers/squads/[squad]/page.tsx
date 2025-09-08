import React from 'react';
import { notFound } from 'next/navigation';
import { SWIMMERS } from '../../../constants';
import SquadClientPage from './client-page';

interface SquadPageProps {
  params: {
    squad: string;
  };
}

// Export metadata generation functions
export { generateMetadata, generateStaticParams } from './metadata';

const SquadPage: React.FC<SquadPageProps> = async ({ params }) => {
  const { squad } = await params;
  const squadType = squad as 'learn-to-swim' | 'development' | 'performance';
  
  // Validate squad type
  if (!['learn-to-swim', 'development', 'performance'].includes(squadType)) {
    notFound();
  }

  // Filter swimmers by squad
  const swimmers = SWIMMERS.filter(swimmer => swimmer.squad === squadType);

  return <SquadClientPage swimmers={swimmers} squadType={squadType} />;
};

export default SquadPage;
