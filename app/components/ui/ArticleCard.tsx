import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface ArticleCardProps {
  title?: string;
  excerpt?: string;
  imageUrl?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title = "Article Title from Sanity",
  excerpt = "Short excerpt pulled from Sanity CMS…",
  imageUrl,
}) => (
  <article className="group overflow-hidden rounded-2xl border border-secondary/20 shadow-sm bg-white">
    <div className="relative aspect-[16/9] w-full bg-secondary/10">
      {imageUrl ? (
        <Image src={imageUrl} alt={title} className="object-cover" fill />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-secondary">Article Image</div>
      )}
    </div>
    <div className="p-5">
      <h3 className="line-clamp-2 text-base font-semibold text-primary">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-secondary">{excerpt}</p>
      <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
        Read more <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  </article>
);