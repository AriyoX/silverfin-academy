import React from "react";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";

interface YouTubeCardProps {
  title: string;
  description: string;
  videoId: string;
  channelName: string;
  date?: string;
}

export const YouTubeCard: React.FC<YouTubeCardProps> = ({
  title,
  description,
  videoId,
  channelName,
  date,
}) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-secondary/20 shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col w-full h-full">
      <div className="relative aspect-video w-full overflow-hidden bg-black flex-shrink-0">
        <Image 
          src={thumbnailUrl} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
          <div className="rounded-full bg-red-600 p-4 shadow-lg group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-white fill-current" />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
            {channelName}
          </span>
          {date && (
            <span className="text-sm text-secondary">
              {date}
            </span>
          )}
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors mb-3">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm text-secondary mb-4 flex-grow">{description}</p>
        <a 
          href={videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-red-600 hover:underline mt-auto"
        >
          Watch on YouTube <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
};
