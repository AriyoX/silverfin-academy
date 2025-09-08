import { ContactInfo, SocialMedia, Stat, Program, Coach, Facility, Swimmer } from '../types';

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

export const SWIMMERS: Swimmer[] = [
  // Learn to Swim Squad
  {
    id: 'emma-nakato',
    name: 'Emma Nakato',
    age: 8,
    squad: 'learn-to-swim',
    imageUrl: '/swimmers/emma-nakato.jpg',
    bio: 'Emma started her swimming journey 6 months ago and has shown incredible improvement in water confidence and basic strokes.',
    personalBests: [
      { event: '25m Freestyle', time: '45.23', date: '2024-08-15', venue: 'Silverfin Academy' },
      { event: '25m Backstroke', time: '52.18', date: '2024-08-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'club-gala-2024',
        name: 'Silverfin Club Gala 2024',
        date: '2024-08-15',
        venue: 'Hill Preparatory School Pool',
        events: ['25m Freestyle', '25m Backstroke'],
        results: [
          { event: '25m Freestyle', time: '45.23', position: 3 },
          { event: '25m Backstroke', time: '52.18', position: 2 }
        ]
      }
    ],
    achievements: ['First 25m swim unassisted', 'Improved freestyle time by 15 seconds'],
    joinedDate: '2024-02-01',
    favoriteStroke: 'Freestyle',
    goals: ['Learn butterfly stroke', 'Complete 50m freestyle']
  },
  {
    id: 'james-kiprotich',
    name: 'James Kiprotich',
    age: 9,
    squad: 'learn-to-swim',
    imageUrl: '/swimmers/james-kiprotich.jpg',
    bio: 'James is a determined young swimmer who has overcome his initial fear of water to become one of our most enthusiastic learners.',
    personalBests: [
      { event: '25m Freestyle', time: '42.15', date: '2024-08-15', venue: 'Silverfin Academy' },
      { event: '25m Breaststroke', time: '48.32', date: '2024-08-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'club-gala-2024',
        name: 'Silverfin Club Gala 2024',
        date: '2024-08-15',
        venue: 'Hill Preparatory School Pool',
        events: ['25m Freestyle', '25m Breaststroke'],
        results: [
          { event: '25m Freestyle', time: '42.15', position: 1 },
          { event: '25m Breaststroke', time: '48.32', position: 2 }
        ]
      }
    ],
    achievements: ['Club record holder - 25m Freestyle (Age 9)', 'Perfect attendance award'],
    joinedDate: '2024-01-15',
    favoriteStroke: 'Freestyle',
    goals: ['Join development squad', 'Learn proper diving technique']
  },

  // Development Squad
  {
    id: 'sarah-mugisha',
    name: 'Sarah Mugisha',
    age: 12,
    squad: 'development',
    imageUrl: '/swimmers/sarah-mugisha.jpg',
    bio: 'Sarah is a talented middle-distance swimmer who consistently improves her times and shows great potential for competitive swimming.',
    personalBests: [
      { event: '50m Freestyle', time: '32.45', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '100m Freestyle', time: '1:12.34', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '50m Backstroke', time: '35.67', date: '2024-06-15', venue: 'Silverfin Academy' },
      { event: '100m IM', time: '1:25.89', date: '2024-07-20', venue: 'National Pool Kampala' }
    ],
    galas: [
      {
        id: 'nationals-2024',
        name: 'Uganda National Championships 2024',
        date: '2024-07-20',
        venue: 'National Pool Kampala',
        events: ['50m Freestyle', '100m Freestyle', '100m IM'],
        results: [
          { event: '50m Freestyle', time: '32.45', position: 5 },
          { event: '100m Freestyle', time: '1:12.34', position: 6 },
          { event: '100m IM', time: '1:25.89', position: 4 }
        ]
      },
      {
        id: 'regional-champs-2024',
        name: 'Regional Championships 2024',
        date: '2024-06-15',
        venue: 'Silverfin Academy',
        events: ['50m Backstroke', '100m Freestyle'],
        results: [
          { event: '50m Backstroke', time: '35.67', position: 1 },
          { event: '100m Freestyle', time: '1:13.21', position: 2 }
        ]
      }
    ],
    achievements: ['Regional Champion - 50m Backstroke', 'National Finals qualifier', 'Team Captain'],
    joinedDate: '2022-09-01',
    favoriteStroke: 'Freestyle',
    goals: ['Break 30 seconds in 50m Freestyle', 'Qualify for East African Championships']
  },
  {
    id: 'david-wanyama',
    name: 'David Wanyama',
    age: 13,
    squad: 'development',
    imageUrl: '/swimmers/david-wanyama.jpg',
    bio: 'David specializes in breaststroke and individual medley events. His technical precision and race strategy make him a formidable competitor.',
    personalBests: [
      { event: '50m Breaststroke', time: '35.12', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '100m Breaststroke', time: '1:18.45', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '200m IM', time: '2:45.67', date: '2024-06-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'nationals-2024',
        name: 'Uganda National Championships 2024',
        date: '2024-07-20',
        venue: 'National Pool Kampala',
        events: ['50m Breaststroke', '100m Breaststroke'],
        results: [
          { event: '50m Breaststroke', time: '35.12', position: 3 },
          { event: '100m Breaststroke', time: '1:18.45', position: 2 }
        ]
      }
    ],
    achievements: ['National Bronze Medal - 50m Breaststroke', 'Regional Record Holder - 200m IM (Age 13)'],
    profileUrl: 'https://swimrankings.net/index.php?page=athleteDetail&athleteId=12345',
    joinedDate: '2021-08-15',
    favoriteStroke: 'Breaststroke',
    goals: ['Break national age group record', 'Represent Uganda internationally']
  },

  // Additional Learn to Swim swimmers
  {
    id: 'aisha-nalule',
    name: 'Aisha Nalule',
    age: 7,
    squad: 'learn-to-swim',
    imageUrl: '/swimmers/aisha-nalule.jpg',
    bio: 'Aisha loves being in the water and has made great progress learning to float and kick.',
    personalBests: [
      { event: '25m Freestyle', time: '50.45', date: '2024-08-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'club-gala-2024',
        name: 'Silverfin Club Gala 2024',
        date: '2024-08-15',
        venue: 'Hill Preparatory School Pool',
        events: ['25m Freestyle'],
        results: [
          { event: '25m Freestyle', time: '50.45', position: 4 }
        ]
      }
    ],
    achievements: ['Completed first length', 'Water confidence award'],
    joinedDate: '2024-03-01',
    favoriteStroke: 'Backstroke',
    goals: ['Learn breaststroke', 'Swim 50m without stopping']
  },
  {
    id: 'alex-mugabi',
    name: 'Alex Mugabi',
    age: 10,
    squad: 'learn-to-swim',
    imageUrl: '/swimmers/alex-mugabi.jpg',
    bio: 'Alex is ready to move up to development squad and shows natural talent in all strokes.',
    personalBests: [
      { event: '25m Freestyle', time: '38.67', date: '2024-08-15', venue: 'Silverfin Academy' },
      { event: '25m Backstroke', time: '45.23', date: '2024-08-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'club-gala-2024',
        name: 'Silverfin Club Gala 2024',
        date: '2024-08-15',
        venue: 'Hill Preparatory School Pool',
        events: ['25m Freestyle', '25m Backstroke'],
        results: [
          { event: '25m Freestyle', time: '38.67', position: 1 },
          { event: '25m Backstroke', time: '45.23', position: 1 }
        ]
      }
    ],
    achievements: ['Double gold medalist - Club gala', 'Squad leader'],
    joinedDate: '2023-09-01',
    favoriteStroke: 'Freestyle',
    goals: ['Join development squad', 'Learn butterfly']
  },

  // Additional Development Squad swimmers
  {
    id: 'rebecca-atim',
    name: 'Rebecca Atim',
    age: 11,
    squad: 'development',
    imageUrl: '/swimmers/rebecca-atim.jpg',
    bio: 'Rebecca excels in butterfly and individual medley events with great technique.',
    personalBests: [
      { event: '50m Butterfly', time: '38.45', date: '2024-06-15', venue: 'Silverfin Academy' },
      { event: '100m IM', time: '1:28.90', date: '2024-06-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'regional-champs-2024',
        name: 'Regional Championships 2024',
        date: '2024-06-15',
        venue: 'Silverfin Academy',
        events: ['50m Butterfly', '100m IM'],
        results: [
          { event: '50m Butterfly', time: '38.45', position: 2 },
          { event: '100m IM', time: '1:28.90', position: 3 }
        ]
      }
    ],
    achievements: ['Regional medalist', 'Technical excellence award'],
    joinedDate: '2022-02-01',
    favoriteStroke: 'Butterfly',
    goals: ['Break 35 seconds in 50m Butterfly', 'Qualify for nationals']
  },
  {
    id: 'joshua-okello',
    name: 'Joshua Okello',
    age: 14,
    squad: 'development',
    imageUrl: '/swimmers/joshua-okello.jpg',
    bio: 'Joshua is a strong backstroke swimmer with excellent technique and race awareness.',
    personalBests: [
      { event: '50m Backstroke', time: '32.78', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '100m Backstroke', time: '1:10.45', date: '2024-06-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'nationals-2024',
        name: 'Uganda National Championships 2024',
        date: '2024-07-20',
        venue: 'National Pool Kampala',
        events: ['50m Backstroke'],
        results: [
          { event: '50m Backstroke', time: '32.78', position: 7 }
        ]
      }
    ],
    achievements: ['National qualifier', 'Age group record holder'],
    joinedDate: '2021-01-15',
    favoriteStroke: 'Backstroke',
    goals: ['Sub-30 seconds in 50m Backstroke', 'Join performance squad']
  },

  // Performance Squad
  {
    id: 'grace-namutebi',
    name: 'Grace Namutebi',
    age: 16,
    squad: 'performance',
    imageUrl: '/swimmers/grace-namutebi.jpg',
    bio: 'Grace is our star sprinter who has represented Uganda at international competitions. She holds multiple national records and is targeting Commonwealth Games qualification.',
    personalBests: [
      { event: '50m Freestyle', time: '26.78', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '100m Freestyle', time: '58.23', date: '2024-05-18', venue: 'Aquatic Centre Nairobi' },
      { event: '50m Butterfly', time: '28.91', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '100m Butterfly', time: '1:04.56', date: '2024-05-18', venue: 'Aquatic Centre Nairobi' }
    ],
    galas: [
      {
        id: 'all-africa-games-2024',
        name: 'All Africa Games 2024',
        date: '2024-05-18',
        venue: 'Aquatic Centre Nairobi',
        events: ['50m Freestyle', '100m Freestyle', '100m Butterfly'],
        results: [
          { event: '50m Freestyle', time: '27.12', position: 8 },
          { event: '100m Freestyle', time: '58.23', position: 6 },
          { event: '100m Butterfly', time: '1:04.56', position: 7 }
        ]
      },
      {
        id: 'nationals-2024',
        name: 'Uganda National Championships 2024',
        date: '2024-07-20',
        venue: 'National Pool Kampala',
        events: ['50m Freestyle', '50m Butterfly'],
        results: [
          { event: '50m Freestyle', time: '26.78', position: 1 },
          { event: '50m Butterfly', time: '28.91', position: 1 }
        ]
      }
    ],
    achievements: [
      'National Record Holder - 50m Freestyle',
      'All Africa Games Finalist',
      'Commonwealth Games qualifier',
      'Youth Olympic Games participant'
    ],
    profileUrl: 'https://swimrankings.net/index.php?page=athleteDetail&athleteId=67890',
    joinedDate: '2019-01-10',
    favoriteStroke: 'Freestyle',
    goals: ['Commonwealth Games medal', 'Sub-26 seconds in 50m Freestyle', 'Olympic qualification']
  },
  {
    id: 'michael-ssemakula',
    name: 'Michael Ssemakula',
    age: 17,
    squad: 'performance',
    imageUrl: '/swimmers/michael-ssemakula.jpg',
    bio: 'Michael is a versatile swimmer excelling in middle and long-distance events. His dedication and work ethic inspire younger swimmers in the academy.',
    personalBests: [
      { event: '200m Freestyle', time: '1:58.34', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '400m Freestyle', time: '4:12.67', date: '2024-05-18', venue: 'Aquatic Centre Nairobi' },
      { event: '1500m Freestyle', time: '16:45.23', date: '2024-07-20', venue: 'National Pool Kampala' },
      { event: '200m IM', time: '2:15.78', date: '2024-06-15', venue: 'Silverfin Academy' }
    ],
    galas: [
      {
        id: 'all-africa-games-2024',
        name: 'All Africa Games 2024',
        date: '2024-05-18',
        venue: 'Aquatic Centre Nairobi',
        events: ['400m Freestyle', '1500m Freestyle'],
        results: [
          { event: '400m Freestyle', time: '4:12.67', position: 5 },
          { event: '1500m Freestyle', time: '16:52.34', position: 4 }
        ]
      },
      {
        id: 'nationals-2024',
        name: 'Uganda National Championships 2024',
        date: '2024-07-20',
        venue: 'National Pool Kampala',
        events: ['200m Freestyle', '1500m Freestyle'],
        results: [
          { event: '200m Freestyle', time: '1:58.34', position: 1 },
          { event: '1500m Freestyle', time: '16:45.23', position: 1 }
        ]
      }
    ],
    achievements: [
      'National Champion - Distance events',
      'All Africa Games participant',
      'Regional record holder - 1500m Freestyle',
      'Academy leadership award'
    ],
    profileUrl: 'https://swimrankings.net/index.php?page=athleteDetail&athleteId=54321',
    joinedDate: '2018-03-15',
    favoriteStroke: 'Freestyle',
    goals: ['Sub-4:10 in 400m Freestyle', 'International medal', 'University scholarship']
  }
];