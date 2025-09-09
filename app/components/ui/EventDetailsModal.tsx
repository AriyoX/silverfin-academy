"use client"

import React from "react";
import Image from "next/image";
import { Event } from "../../types";

interface EventDetailsModalProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister?: (eventId: string) => void;
}

export function EventDetailsModal({ event, isOpen, onClose, onRegister }: EventDetailsModalProps) {
  if (!isOpen || !event) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeColor = (type: Event['type']) => {
    switch (type) {
      case 'competition': return 'bg-red-100 text-red-800 border-red-200';
      case 'gala': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'workshop': return 'bg-green-100 text-green-800 border-green-200';
      case 'training': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="relative">
          {event.imageUrl && (
            <div className="relative h-64 sm:h-80">
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize border ${getEventTypeColor(event.type)}`}>
                  {event.type}
                </span>
              </div>
            </div>
          )}
          
          {!event.imageUrl && (
            <div className="flex justify-between items-center p-6 border-b">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize border ${getEventTypeColor(event.type)}`}>
                {event.type}
              </span>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{event.description}</p>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Event Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-medium">Date & Time</div>
                    <div className="text-sm text-gray-600">{formatDate(event.date)} at {event.time}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium">Venue</div>
                    <div className="text-sm text-gray-600">{event.venue}</div>
                  </div>
                </div>

                {event.capacity && (
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Capacity</div>
                      <div className="text-sm text-gray-600">
                        {event.registered || 0} / {event.capacity} registered
                        {event.capacity - (event.registered || 0) > 0 && (
                          <span className="text-green-600 ml-2">
                            ({event.capacity - (event.registered || 0)} spots available)
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {event.participants && (
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <div className="font-medium">Participants</div>
                      <div className="text-sm text-gray-600">{event.participants} total participants</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              {event.highlights && event.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Highlights</h3>
                  <ul className="space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {event.results && event.results.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
                  <div className="space-y-3">
                    {event.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900">{result.category}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">{result.winner}</span> - {result.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
            {event.registrationOpen ? (
              <button
                onClick={() => {
                  onRegister?.(event.id);
                  onClose();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Register for Event
              </button>
            ) : (
              <div className="flex-1 bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold text-center">
                Registration Closed
              </div>
            )}
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
