import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface ExternalNewsCardProps {
  title: string;
  excerpt: string;
  url: string;
  source: string;
  date?: string;
  imageUrl?: string;
}

export const ExternalNewsCard: React.FC<ExternalNewsCardProps> = ({
  title,
  excerpt,
  url,
  source,
  date,
  imageUrl,
}) => (
  <article className="group overflow-hidden rounded-2xl border border-secondary/20 shadow-sm bg-white hover:shadow-md transition-shadow flex flex-col w-full h-full">
    {/* Placeholder Image */}
    <div className="relative aspect-video w-full overflow-hidden bg-secondary/10 flex-shrink-0">
      {imageUrl ? (
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-secondary">
          <div className="text-center">
            <div className="mb-2 text-4xl">📰</div>
            <div className="text-sm font-medium">News Article</div>
          </div>
        </div>
      )}
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-2 mb-3">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          {source}
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
      <p className="line-clamp-3 text-sm text-secondary mb-4 flex-grow">{excerpt}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mt-auto"
      >
        Read full article <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  </article>
);
