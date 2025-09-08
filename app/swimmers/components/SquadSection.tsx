import React from 'react';
import Link from 'next/link';
import { Swimmer } from '../../types';
import { SwimmerCard } from './SwimmerCard';
import { ArrowRight } from 'lucide-react';

interface SquadSectionProps {
  title: string;
  description: string;
  swimmers: Swimmer[];
  squadType: 'learn-to-swim' | 'development' | 'performance';
  maxDisplay?: number;
  showViewAll?: boolean;
}

export const SquadSection: React.FC<SquadSectionProps> = ({
  title,
  description,
  swimmers,
  squadType,
  maxDisplay = 8,
  showViewAll = true
}) => {
  const getSquadColor = (squad: string) => {
    switch (squad) {
      case 'learn-to-swim':
        return 'from-green-500 to-green-600';
      case 'development':
        return 'from-blue-500 to-blue-600';
      case 'performance':
        return 'from-purple-500 to-purple-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const displayedSwimmers = swimmers.slice(0, maxDisplay);
  const hasMore = swimmers.length > maxDisplay;

  return (
    <section className="mb-16">
      <div className={`bg-gradient-to-r ${getSquadColor(squadType)} text-white rounded-lg p-6 mb-8`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{title}</h2>
        <p className="text-white/90 text-lg max-w-3xl">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
            {swimmers.length} swimmer{swimmers.length !== 1 ? 's' : ''}
          </span>
          
          {hasMore && showViewAll && (
            <Link
              href={`/swimmers/squads/${squadType}`}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
      
      {swimmers.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedSwimmers.map((swimmer) => (
              <SwimmerCard key={swimmer.id} swimmer={swimmer} />
            ))}
          </div>
          
          {hasMore && showViewAll && (
            <div className="text-center mt-8">
              <Link
                href={`/swimmers/squads/${squadType}`}
                className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-200 font-medium"
              >
                View All {swimmers.length} {title} Swimmers
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">No swimmers in this squad currently.</p>
          <p className="text-gray-400 text-sm mt-2">Check back soon for updates!</p>
        </div>
      )}
    </section>
  );
};
