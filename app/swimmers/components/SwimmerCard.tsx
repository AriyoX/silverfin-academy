import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swimmer } from '../../types';
import { Clock, Calendar, Trophy, ExternalLink } from 'lucide-react';

interface SwimmerCardProps {
  swimmer: Swimmer;
}

export const SwimmerCard: React.FC<SwimmerCardProps> = ({ swimmer }) => {
  const getSquadColor = (squad: string) => {
    switch (squad) {
      case 'learn-to-swim':
        return 'bg-green-100 text-green-800';
      case 'development':
        return 'bg-blue-100 text-blue-800';
      case 'performance':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getSquadLabel = (squad: string) => {
    switch (squad) {
      case 'learn-to-swim':
        return 'Learn to Swim';
      case 'development':
        return 'Development';
      case 'performance':
        return 'Performance';
      default:
        return squad;
    }
  };

  const bestTime = swimmer.personalBests.length > 0 ? swimmer.personalBests[0] : null;
  const recentGala = swimmer.galas.length > 0 ? swimmer.galas[0] : null;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <Image
          src={swimmer.imageUrl}
          alt={swimmer.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSquadColor(swimmer.squad)}`}>
            {getSquadLabel(swimmer.squad)}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{swimmer.name}</h3>
          <span className="text-sm text-gray-500">Age {swimmer.age}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{swimmer.bio}</p>
        
        <div className="space-y-2 mb-4">
          {bestTime && (
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span className="font-medium">{bestTime.event}:</span>
              <span className="ml-1">{bestTime.time}</span>
            </div>
          )}
          
          {recentGala && (
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              <span>{recentGala.name}</span>
            </div>
          )}
          
          {swimmer.achievements.length > 0 && (
            <div className="flex items-center text-xs text-gray-500">
              <Trophy className="w-3 h-3 mr-1" />
              <span className="line-clamp-1">{swimmer.achievements[0]}</span>
            </div>
          )}
        </div>
        
        <div className="flex gap-2">
          <Link
            href={`/swimmers/${swimmer.id}`}
            className="flex-1 bg-primary text-white text-center py-2 px-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View Profile
          </Link>
          
          {swimmer.profileUrl && (
            <a
              href={swimmer.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200 transition-colors"
              title="External Profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
