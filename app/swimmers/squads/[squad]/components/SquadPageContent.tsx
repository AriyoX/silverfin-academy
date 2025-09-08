import React from 'react';
import Link from 'next/link';
import { Swimmer } from '../../../../types';
import { SwimmerCard } from '../../../components/SwimmerCard';
import { ArrowLeft, Users, Clock, Target } from 'lucide-react';

interface SquadPageContentProps {
  swimmers: Swimmer[];
  squadType: 'learn-to-swim' | 'development' | 'performance';
}

export const SquadPageContent: React.FC<SquadPageContentProps> = ({
  swimmers,
  squadType
}) => {
  const getSquadInfo = (squad: string) => {
    switch (squad) {
      case 'learn-to-swim':
        return {
          title: 'Learn to Swim',
          description: 'Our youngest swimmers building water confidence, learning basic strokes, and developing a love for the water.',
          color: 'from-green-500 to-green-600',
          ageRange: '4-10 years',
          focus: 'Water confidence, safety, and fundamental skills',
          sessions: '2-3 sessions per week',
          goals: ['Water safety', 'Basic stroke technique', 'Confidence building', 'Fun and enjoyment']
        };
      case 'development':
        return {
          title: 'Development Squad',
          description: 'Intermediate swimmers refining technique, building endurance, and preparing for competitive swimming.',
          color: 'from-blue-500 to-blue-600',
          ageRange: '9-14 years',
          focus: 'Technique refinement and competitive preparation',
          sessions: '4-6 sessions per week',
          goals: ['Stroke refinement', 'Endurance building', 'Competition preparation', 'Team spirit']
        };
      case 'performance':
        return {
          title: 'Performance Squad',
          description: 'Elite swimmers training at the highest level for national and international competition.',
          color: 'from-purple-500 to-purple-600',
          ageRange: '13+ years',
          focus: 'High-performance training and competition',
          sessions: '7-9 sessions per week',
          goals: ['Elite performance', 'National competition', 'International standards', 'Professional development']
        };
      default:
        return {
          title: 'Swimming Squad',
          description: 'Swimmers training together towards their goals.',
          color: 'from-gray-500 to-gray-600',
          ageRange: 'All ages',
          focus: 'General swimming development',
          sessions: 'Various',
          goals: ['Swimming improvement']
        };
    }
  };

  const squadInfo = getSquadInfo(squadType);

  // Calculate some stats
  const totalSwimmers = swimmers.length;
  const averageAge = swimmers.length > 0 
    ? Math.round(swimmers.reduce((sum, swimmer) => sum + swimmer.age, 0) / swimmers.length)
    : 0;
  const totalAchievements = swimmers.reduce((sum, swimmer) => sum + swimmer.achievements.length, 0);
  const totalCompetitions = swimmers.reduce((sum, swimmer) => sum + swimmer.galas.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${squadInfo.color} text-white py-16`}>
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Link
              href="/swimmers"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Swimmers
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{squadInfo.title}</h1>
              <p className="text-xl text-white/90 mb-6">{squadInfo.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="font-medium">Age Range</span>
                  </div>
                  <div className="text-lg font-bold">{squadInfo.ageRange}</div>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">Training</span>
                  </div>
                  <div className="text-lg font-bold">{squadInfo.sessions}</div>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 mr-2" />
                  <span className="font-medium">Focus Areas</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {squadInfo.goals.map((goal, index) => (
                    <div key={index} className="text-sm">• {goal}</div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">{totalSwimmers}</div>
                <div className="text-white/80 text-sm">Total Swimmers</div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">{averageAge}</div>
                <div className="text-white/80 text-sm">Average Age</div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">{totalAchievements}</div>
                <div className="text-white/80 text-sm">Achievements</div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold mb-1">{totalCompetitions}</div>
                <div className="text-white/80 text-sm">Competitions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swimmers Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            All {squadInfo.title} Swimmers
          </h2>
          <p className="text-gray-600">
            Meet all {totalSwimmers} swimmers in our {squadInfo.title.toLowerCase()} program.
          </p>
        </div>
        
        {swimmers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {swimmers.map((swimmer) => (
              <SwimmerCard key={swimmer.id} swimmer={swimmer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">No swimmers in this squad currently.</p>
            <p className="text-gray-400 text-sm mt-2">Check back soon for updates!</p>
          </div>
        )}
      </div>
    </div>
  );
};
