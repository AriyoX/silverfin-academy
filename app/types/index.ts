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
  quote?: string;
  background?: string;
  imageUrl?: string;
  certifications?: string[];
  email?: string;
}

export interface Facility {
  name: string;
  description: string;
  features: string[];
}

export interface SwimmerTime {
  event: string;
  time: string;
  date?: string;
  venue?: string;
}

export interface Gala {
  id: string;
  name: string;
  date: string;
  venue: string;
  events: string[];
  results?: {
    event: string;
    time: string;
    position: number;
  }[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  type: 'competition' | 'training' | 'gala' | 'workshop';
  registrationOpen: boolean;
  capacity?: number;
  registered?: number;
  imageUrl?: string;
  highlights?: string[];
  results?: {
    category: string;
    winner: string;
    time: string;
  }[];
  participants?: number;
}

export interface Swimmer {
  id: string;
  name: string;
  age: number;
  squad: 'learn-to-swim' | 'development' | 'performance';
  imageUrl: string;
  bio: string;
  personalBests: SwimmerTime[];
  galas: Gala[];
  achievements: string[];
  profileUrl?: string;
  joinedDate: string;
  favoriteStroke?: string;
  goals?: string[];
}