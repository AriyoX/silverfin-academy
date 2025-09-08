import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swimmer } from '../../../types';
import { Calendar, Clock, MapPin, Award, ExternalLink, ArrowLeft, Target } from 'lucide-react';

interface SwimmerProfileProps {
  swimmer: Swimmer;
}

export const SwimmerProfile: React.FC<SwimmerProfileProps> = ({ swimmer }) => {
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

  const getSquadLabel = (squad: string) => {
    switch (squad) {
      case 'learn-to-swim':
        return 'Learn to Swim';
      case 'development':
        return 'Development Squad';
      case 'performance':
        return 'Performance Squad';
      default:
        return squad;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${getSquadColor(swimmer.squad)} text-white py-16`}>
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <Link
              href="/swimmers"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Swimmers
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {getSquadLabel(swimmer.squad)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{swimmer.name}</h1>
              <p className="text-xl text-white/90 mb-6">{swimmer.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold">Age {swimmer.age}</div>
                  <div className="text-white/80 text-sm">Years Old</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{swimmer.personalBests.length}</div>
                  <div className="text-white/80 text-sm">Personal Bests</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{swimmer.galas.length}</div>
                  <div className="text-white/80 text-sm">Competitions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{swimmer.achievements.length}</div>
                  <div className="text-white/80 text-sm">Achievements</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden border-4 border-white/20">
                  <Image
                    src={swimmer.imageUrl}
                    alt={swimmer.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Personal Bests */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Personal Best Times
              </h2>
              
              {swimmer.personalBests.length > 0 ? (
                <div className="space-y-4">
                  {swimmer.personalBests.map((time, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">{time.event}</h3>
                          <p className="text-sm text-gray-500">
                            {time.venue} • {new Date(time.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">{time.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No personal best times recorded yet.</p>
              )}
            </div>

            {/* Competition History */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-primary" />
                Competition History
              </h2>
              
              {swimmer.galas.length > 0 ? (
                <div className="space-y-6">
                  {swimmer.galas.map((gala) => (
                    <div key={gala.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{gala.name}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {gala.venue}
                            <Calendar className="w-4 h-4 ml-4 mr-1" />
                            {new Date(gala.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      
                      {gala.results && gala.results.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-medium text-gray-900 mb-2">Results:</h4>
                          <div className="space-y-2">
                            {gala.results.map((result, index) => (
                              <div key={index} className="flex justify-between items-center bg-gray-50 rounded p-3">
                                <div>
                                  <span className="font-medium">{result.event}</span>
                                  <span className="text-gray-500 ml-2">{result.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                                    result.position <= 3 
                                      ? 'bg-yellow-100 text-yellow-800' 
                                      : 'bg-gray-100 text-gray-800'
                                  }`}>
                                    {result.position === 1 ? '🥇' : 
                                     result.position === 2 ? '🥈' : 
                                     result.position === 3 ? '🥉' : `${result.position}th`}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No competition history recorded yet.</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{swimmer.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Squad:</span>
                  <span className="font-medium">{getSquadLabel(swimmer.squad)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Joined:</span>
                  <span className="font-medium">{new Date(swimmer.joinedDate).toLocaleDateString()}</span>
                </div>
                {swimmer.favoriteStroke && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Favorite Stroke:</span>
                    <span className="font-medium">{swimmer.favoriteStroke}</span>
                  </div>
                )}
              </div>
              
              {swimmer.profileUrl && (
                <div className="mt-4 pt-4 border-t">
                  <a
                    href={swimmer.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Full Profile
                  </a>
                </div>
              )}
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary" />
                Achievements
              </h3>
              
              {swimmer.achievements.length > 0 ? (
                <div className="space-y-2">
                  {swimmer.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No achievements recorded yet.</p>
              )}
            </div>

            {/* Goals */}
            {swimmer.goals && swimmer.goals.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Goals
                </h3>
                <div className="space-y-2">
                  {swimmer.goals.map((goal, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
