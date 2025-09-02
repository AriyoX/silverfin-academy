import { ContactInfo, SocialMedia, Stat, Program, Coach, Facility } from '../types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+256 700 000 000',
  email: 'info@silverfin.ac.ug',
  address: 'Silverfin Aquatic Centre, Kampala, Uganda'
};

export const SOCIAL_MEDIA: SocialMedia = {
  instagram: 'https://instagram.com/silverfinacademy',
  facebook: 'https://facebook.com/silverfinacademy',
  youtube: 'https://youtube.com/silverfinacademy'
};

export const CLUB_STATS: Stat[] = [
  { value: '150+', label: 'Active Members' },
  { value: '92', label: 'Medals Won' },
  { value: '14', label: 'Coaches & Staff' },
  { value: '6', label: 'Training Squads' }
];

export const PROGRAMS: Program[] = [
  {
    id: 'learn-to-swim',
    title: 'Learn to Swim',
    description: 'Water confidence, safety, and foundational technique for beginners.',
    meta: 'Ages 4–10 • Weekdays',
    ageGroup: '4-10',
    price: 150000,
    duration: '4 weeks'
  },
  {
    id: 'development-squads',
    title: 'Development Squads',
    description: 'Skill refinement and aerobic base with fun, progressive sets.',
    meta: 'Ages 9–14 • 4–6 sessions/week',
    ageGroup: '9-14',
    price: 300000,
    duration: 'Monthly'
  },
  {
    id: 'performance-senior',
    title: 'Performance / Senior',
    description: 'High‑performance training targeting national and international meets.',
    meta: 'Ages 13+ • 7–9 sessions/week',
    ageGroup: '13+',
    price: 500000,
    duration: 'Monthly'
  }
];

export const COACHES: Coach[] = [
  {
    id: 'ezra-kakali',
    name: 'Ezra Kakali',
    title: 'Head Coach',
    bio: 'Former national team swimmer with 15+ years coaching experience leading Silverfin to regional excellence',
    certifications: ['Level 4 Swimming Coach', 'Strength & Conditioning', 'Water Safety Instructor']
  },
  {
    id: 'vincent-kabira',
    name: 'Vincent Kabira',
    title: 'Assistant Head Coach',
    bio: 'Specialist in competitive swimming development with expertise in stroke technique and race strategy',
    certifications: ['Level 3 Swimming Coach', 'Technical Official', 'Child Protection']
  },
  {
    id: 'mugisha-jacob',
    name: 'Mugisha Jacob',
    title: 'Learn to Swim (Adults)',
    bio: 'Dedicated adult swimming instructor with a passion for helping beginners overcome water fears',
    certifications: ['Adult Swimming Instructor', 'Water Safety', 'First Aid/CPR']
  },
  {
    id: 'nancy-akukwatswe',
    name: 'Nancy Akukwatswe',
    title: 'Learn to Swim II',
    bio: 'Patient and encouraging instructor specializing in foundational swimming skills for all ages',
    certifications: ['Swimming Instructor Level 2', 'Child Development', 'Water Confidence']
  }
];

export const FACILITIES: Facility[] = [
  {
    name: '8‑lane 25m pool',
    description: 'Olympic standard training pool with electronic timing',
    features: ['Electronic timing', 'Lane ropes', 'Starting blocks']
  },
  {
    name: 'Strength & Conditioning space',
    description: 'Fully equipped gym for dryland training',
    features: ['Free weights', 'Resistance machines', 'Plyometric equipment']
  },
  {
    name: 'Video analysis',
    description: 'State-of-the-art stroke analysis technology',
    features: ['Underwater cameras', 'Motion analysis software', 'Tablet review stations']
  }
];

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'stats', label: 'Statistics' },
  { id: 'programs', label: 'Programs' },
  { id: 'news', label: 'News' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' }
];