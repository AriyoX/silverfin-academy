import React from 'react';
import { Users, Target, Trophy, Clock } from 'lucide-react';

export const SwimmersHeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Swimmers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
            Meet the talented athletes who make Silverfin Academy a center of swimming excellence. 
            From beginners taking their first strokes to elite performers competing internationally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold mb-1">150+</div>
            <div className="text-white/80 text-sm">Active Swimmers</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Target className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold mb-1">3</div>
            <div className="text-white/80 text-sm">Training Squads</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold mb-1">92</div>
            <div className="text-white/80 text-sm">Medals Won</div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold mb-1">15</div>
            <div className="text-white/80 text-sm">National Records</div>
          </div>
        </div>
      </div>
    </section>
  );
};
