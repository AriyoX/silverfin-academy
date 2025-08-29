export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  meta: string;
  price?: number;
  duration?: string;
  ageGroup: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  publishedAt: string;
  slug: string;
  author?: string;
}

export interface Coach {
  id: string;
  name: string;
  title: string;
  bio?: string;
  imageUrl?: string;
  certifications?: string[];
}

export interface Facility {
  name: string;
  description: string;
  features: string[];
}