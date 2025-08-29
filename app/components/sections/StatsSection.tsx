import React from "react";
import { Section } from "../ui/Section";
import { StatCard } from "../ui/StatCard";
import { ExternalNewsCard } from "../ui/ExternalNewsCard";
import { YouTubeCard } from "../ui/YouTubeCard";

const stats = [
  { value: "50+", label: "Active Swimmers" },
  { value: "3rd", label: "Position at Nationals" },
  { value: "8", label: "Coaches & Staff" },
  { value: "6", label: "Training Squads" },
  { value: "31", label: "Teams in Latest Organized Pentathlon" },
  { value: "650", label: "Athletes Participated at Recent Pentathlon" }
];

// External news articles and YouTube videos - add/edit these manually
const externalNews = [
  {
    title: "Silverfin Academy places third at the recently concluded nationals swimming gala.",
    excerpt: "Our athletes delivered outstanding performances at the latest nationals swimming gala, ending 3rd despite the odds.",
    url: "https://www.monitor.co.ug/uganda/sports/other-sport/gators-in-fourth-heaven-5109816",
    source: "Daily Monitor",
    date: "2025-07-07",
    imageUrl: "/thumbnails/monitor_thumbnail_1.webp"
  }
];

const youtubeVideo = {
  title: "FIVE 🖐🏻 TIMES BETTER!!! Swimmers BLOWN AWAY by Excellent Organisation at Silverfin Pentathlon 2025",
  description: "Watch the best moments from our recent pentathlon competition featuring 650 athletes and 31 teams in action.",
  videoId: "v9_jcDfpCZw", // Replace with actual video ID
  channelName: "Vector on Demand",
  date: "2025-05-14"
};

export const StatsSection: React.FC = () => (
  <Section id="stats" className="bg-secondary/5">
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        We&apos;ve got a lot to be proud about
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary md:text-4xl">Club Highlights</h2>
    </div>
    
    {/* Stats Section - Full Width Top Row */}
    <div className="mb-16">
      <h3 className="mb-8 text-xl font-semibold text-primary text-center">Our Numbers</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, index) => (
          <StatCard key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>

    {/* Content Section - Below Stats */}
    <div>
      <h3 className="mb-8 text-xl font-semibold text-primary text-center">In the Spotlight</h3>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">
        {/* YouTube Video */}
        <div className="flex">
          <YouTubeCard
            title={youtubeVideo.title}
            description={youtubeVideo.description}
            videoId={youtubeVideo.videoId}
            channelName={youtubeVideo.channelName}
            date={youtubeVideo.date}
          />
        </div>
        
        {/* External News */}
        <div className="flex">
          {externalNews.map((article, index) => (
            <ExternalNewsCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              url={article.url}
              source={article.source}
              date={article.date}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  </Section>
);