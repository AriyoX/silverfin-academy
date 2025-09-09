"use client"

import React, { useState } from "react";
import { AnimatedSection } from "../../components/ui/AnimatedSection";
import { CALENDAR_EVENTS } from "../../constants";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: 'competition' | 'training' | 'gala' | 'workshop';
}

export function EventsCalendarSection() {
  const [selectedMonth, setSelectedMonth] = useState(2); // February (0-indexed)
  const [selectedYear] = useState(2025);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const getEventsForDate = (date: number) => {
    const dateString = `${selectedYear}-${(selectedMonth + 1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
    return CALENDAR_EVENTS.filter(event => event.date === dateString);
  };

  const getEventTypeColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'competition': return 'bg-red-500';
      case 'gala': return 'bg-purple-500';
      case 'workshop': return 'bg-green-500';
      case 'training': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);
    const firstDay = getFirstDayOfMonth(selectedMonth, selectedYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const events = getEventsForDate(day);
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1 relative bg-white hover:bg-gray-50 transition-colors">
          <div className="text-sm font-medium text-gray-900 mb-1">{day}</div>
          <div className="space-y-1">
            {events.slice(0, 2).map(event => (
              <div
                key={event.id}
                className={`text-xs text-white p-1 rounded truncate ${getEventTypeColor(event.type)}`}
                title={event.title}
              >
                {event.title}
              </div>
            ))}
            {events.length > 2 && (
              <div className="text-xs text-gray-500">+{events.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Events Calendar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with all our swimming events, competitions, and workshops
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {monthNames[selectedMonth]} {selectedYear}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedMonth(Math.max(0, selectedMonth - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    disabled={selectedMonth === 0}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedMonth(Math.min(11, selectedMonth + 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    disabled={selectedMonth === 11}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="h-8 flex items-center justify-center text-sm font-semibold text-gray-600 bg-gray-100">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </div>
          </AnimatedSection>

          {/* Legend and Quick Info */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              {/* Event Type Legend */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Event Types</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded mr-3"></div>
                    <span className="text-gray-700">Competitions</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-500 rounded mr-3"></div>
                    <span className="text-gray-700">Galas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                    <span className="text-gray-700">Workshops</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                    <span className="text-gray-700">Training Sessions</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">This Month</h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Events</span>
                    <span className="font-semibold">{
                      CALENDAR_EVENTS.filter(event => {
                        const eventDate = new Date(event.date);
                        return eventDate.getMonth() === selectedMonth;
                      }).length
                    }</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Competitions</span>
                    <span className="font-semibold text-red-600">
                      {CALENDAR_EVENTS.filter(event => {
                        const eventDate = new Date(event.date);
                        return eventDate.getMonth() === selectedMonth && event.type === 'competition';
                      }).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Workshops</span>
                    <span className="font-semibold text-green-600">
                      {CALENDAR_EVENTS.filter(event => {
                        const eventDate = new Date(event.date);
                        return eventDate.getMonth() === selectedMonth && event.type === 'workshop';
                      }).length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subscribe to Calendar */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Subscribe to our events calendar to never miss an event
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe to Calendar
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
