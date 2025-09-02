import { ContactInfo, SocialMedia, Stat, Program, Coach, Facility } from '../types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+256 709 711 797',
  email: 'silverfinacademy@gmail.com',
  address: 'Hill Preparatory School, Naguru, Kampala'
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
    imageUrl: '/hero-images/swimmer_1.jpg',
    bio: 'Former national team swimmer with 15+ years coaching experience leading Silverfin to regional excellence. Ezra represented Uganda at the Commonwealth Games and African Championships before transitioning to coaching. His technical expertise and leadership have transformed countless swimmers into champions.',
    quote: "Excellence is not a destination, it's a journey. Every stroke, every training session, every competition is an opportunity to become better than you were yesterday.",
    background: 'Swimming Career: Competed internationally for Uganda (2005-2012)\nCoaching Experience: 15+ years developing athletes from beginner to elite level\nEducation: Sports Science degree, University of Makerere\nAchievements: Led 50+ swimmers to national championships, developed 12 African Championship medalists',
    certifications: [
      'Level 4 Swimming Coach (Swimming Federation)',
      'Strength & Conditioning Specialist (NSCA)',
      'Water Safety Instructor (Red Cross)',
      'Mental Performance Coach',
      'Technical Official Level 3',
      'First Aid/CPR Certified'
    ]
  },
  {
    id: 'vincent-kabira',
    name: 'Vincent Kabira',
    title: 'Assistant Head Coach',
    imageUrl: '/hero-images/swimmer_1.jpg',
    bio: 'Specialist in competitive swimming development with expertise in stroke technique and race strategy. Vincent focuses on developing proper fundamentals and building competitive confidence in swimmers of all levels.',
    quote: "Technique is the foundation of speed. Perfect practice makes perfect performance, and every swimmer has the potential to achieve greatness with the right guidance.",
    background: 'Swimming Career: Former national age-group record holder\nCoaching Experience: 8+ years specializing in technique development\nEducation: Physical Education degree, Kyambogo University\nSpecialization: Stroke biomechanics and race preparation',
    certifications: [
      'Level 3 Swimming Coach',
      'Technical Official Level 2',
      'Child Protection Certified',
      'Video Analysis Specialist',
      'Age Group Development Coach',
      'First Aid/CPR Certified'
    ]
  },
  {
    id: 'mugisha-jacob',
    name: 'Mugisha Jacob',
    title: 'Learn to Swim Coach (Adults)',
    imageUrl: '/hero-images/swimmer_1.jpg',
    bio: 'Dedicated adult swimming instructor with a passion for helping beginners overcome water fears and develop confidence in the water. Jacob specializes in working with adult learners who are taking up swimming later in life.',
    background: 'Teaching Experience: 6+ years specializing in adult education\nEducation: Certificate in Adult Education, YMCA\nSpecialization: Water confidence and fear management\nSuccess Rate: 95% of students achieve basic swimming competency',
    certifications: [
      'Adult Swimming Instructor (Level 2)',
      'Water Safety Instructor',
      'First Aid/CPR Certified',
      'Aquatic Therapy Assistant',
      'Adult Education Certificate'
    ]
  },
  {
    id: 'nancy-akukwatswe',
    name: 'Nancy Akukwatswe',
    title: 'Learn to Swim Coach (Children)',
    imageUrl: '/hero-images/swimmer_1.jpg',
    bio: 'Patient and encouraging instructor specializing in foundational swimming skills for children aged 4-12. Nancy creates a fun, safe environment where young swimmers can develop both skills and confidence.',
    background: 'Teaching Experience: 7+ years in pediatric aquatic education\nEducation: Early Childhood Development Certificate\nSpecialization: Child psychology and motor skill development\nAchievements: Taught over 500 children to swim safely',
    certifications: [
      'Swimming Instructor Level 2 (Children)',
      'Child Development Specialist',
      'Water Confidence Instructor',
      'Pediatric First Aid/CPR',
      'Safeguarding Children Certificate'
    ]
  },
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