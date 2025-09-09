"use client"

import React from "react";
import Image from "next/image";
import { Event } from "../../types";

interface EventCardProps {
  event: Event;
  showRegistration?: boolean;
  showDetails?: boolean;
  onRegister?: (eventId: string) => void;
  onViewDetails?: (eventId: string) => void;
}

export function EventCard({ 
  event, 
  showRegistration = true, 
  showDetails = true,
  onRegister,
  onViewDetails 
}: EventCardProps) {
  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'competition': return 'bg-red-100 text-red-800';
      case 'gala': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'training': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAvailabilityStatus = () => {
    if (!event.capacity) return null;
    const availability = event.capacity - (event.registered || 0);
    if (availability <= 0) return { text: 'Sold Out', color: 'text-red-600' };
    if (availability <= 5) return { text: `${availability} spots left`, color: 'text-orange-600' };
    return { text: `${availability} spots available`, color: 'text-green-600' };
  };

  const availabilityStatus = getAvailabilityStatus();

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden">
      {event.imageUrl && (
        <div className="relative h-48">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getEventTypeColor(event.type)}`}>
              {event.type}
            </span>
          </div>
          {!event.registrationOpen && (
            <div className="absolute top-4 right-4">
              <span className="text-sm text-white bg-black/50 px-2 py-1 rounded">
                Registration Closed
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6">
        {!event.imageUrl && (
          <div className="flex justify-between items-start mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getEventTypeColor(event.type)}`}>
              {event.type}
            </span>
            {!event.registrationOpen && (
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                Registration Closed
              </span>
            )}
          </div>
        )}

        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{formatDate(event.date)} at {event.time}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{event.venue}</span>
          </div>
          {availabilityStatus && (
            <div className="flex items-center">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className={`text-sm font-medium ${availabilityStatus.color}`}>
                {availabilityStatus.text}
              </span>
            </div>
          )}
          {event.participants && (
            <div className="flex items-center text-gray-700">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium">{event.participants} participants</span>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          {showRegistration && (
            <button 
              className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                event.registrationOpen 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!event.registrationOpen}
              onClick={() => onRegister?.(event.id)}
            >
              {event.registrationOpen ? 'Register' : 'Registration Closed'}
            </button>
          )}
          {showDetails && (
            <button 
              className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
              onClick={() => onViewDetails?.(event.id)}
            >
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
