export const navItems = [
  { label: "About", href: "/about" },
  { 
    label: "Programs", 
    dropdown: [
      { label: "Learn to Swim", href: "/programs/learn-to-swim" },
      { label: "Development Squads", href: "/programs/development" },
      { label: "Performance / Senior", href: "/programs/performance" },
    ]
  },
  { 
    label: "News", 
    dropdown: [
      { label: "Announcements", href: "/news/announcements" },
      { label: "Competitions", href: "/news/competitions" },
    ]
  },
  { label: "Events", href: "/events" },
  { label: "Coaches", href: "/coaches" },
  { 
    label: "Swimmers", 
    href: "/swimmers",
    dropdown: [
      { label: "All Swimmers", href: "/swimmers" },
      { label: "Learn to Swim", href: "/swimmers/squads/learn-to-swim" },
      { label: "Development Squad", href: "/swimmers/squads/development" },
      { label: "Performance Squad", href: "/swimmers/squads/performance" },
    ]
  },
  { label: "Contact", href: "/contact" }
];