import React from "react";
import { ChevronRight } from "lucide-react";

interface ArticleCardProps {
  title?: string;
  excerpt?: string;
  imageUrl?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title = "Article Title from Sanity",
  excerpt = "Short excerpt pulled from Sanity CMS…",
  imageUrl
}) => (
  <article className="group overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
    <div className="aspect-[16/9] w-full bg-gray-100">
      {imageUrl ? (
        <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-gray-400">Article Image</div>
      )}
    </div>
    <div className="p-5">
      <h3 className="line-clamp-2 text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-gray-600">{excerpt}</p>
      <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
        Read more <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  </article>
);