import {
  Code2,
  PenTool,
  Music,
  Coffee,
  Gamepad2,
  Camera,
  MessageCircle,
  Sparkles,
  Heart,
  BookOpen,
  Star,
  Mail,
  Map,
  Briefcase,
  Clock,
  Target,
  Quote,
  Laptop,
  Palette,
  Compass,
} from 'lucide-react';

export type ExperienceCard = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  teaser: string;
  color: string;
  href: string;
};

export const experienceCards: ExperienceCard[] = [
  {
    id: 'developer',
    title: 'Developer',
    icon: Code2,
    teaser: 'Building things that matter, one line at a time.',
    color: 'from-blue-500/20 to-cyan-500/20',
    href: '/developer',
  },
  {
    id: 'writer',
    title: 'Writer',
    icon: PenTool,
    teaser: 'Words are my way of understanding the world.',
    color: 'from-amber-500/20 to-orange-500/20',
    href: '/writer',
  },
  {
    id: 'music',
    title: 'Music',
    icon: Music,
    teaser: 'My life has a soundtrack. Let me share it.',
    color: 'from-purple-500/20 to-pink-500/20',
    href: '/music',
  },
  {
    id: 'daily-life',
    title: 'Daily Life',
    icon: Coffee,
    teaser: 'The rituals, habits, and moments that make up my days.',
    color: 'from-emerald-500/20 to-teal-500/20',
    href: '/daily-life',
  },
  {
    id: 'games',
    title: 'Gaming',
    icon: Gamepad2,
    teaser: 'Worlds I&apos;ve explored and conquered.',
    color: 'from-red-500/20 to-rose-500/20',
    href: '/games',
  },
  {
    id: 'gallery',
    title: 'Gallery',
    icon: Camera,
    teaser: 'Moments captured through my lens.',
    color: 'from-slate-500/20 to-gray-500/20',
    href: '/gallery',
  },
  {
    id: 'thoughts',
    title: 'Thoughts',
    icon: MessageCircle,
    teaser: 'Opinions, beliefs, and lessons learned.',
    color: 'from-indigo-500/20 to-violet-500/20',
    href: '/thoughts',
  },
  {
    id: 'dreams',
    title: 'Dreams',
    icon: Sparkles,
    teaser: 'Where I want to be and what I want to achieve.',
    color: 'from-yellow-500/20 to-amber-500/20',
    href: '/dreams',
  },
  {
    id: 'values',
    title: 'Values',
    icon: Heart,
    teaser: 'The principles that guide my decisions.',
    color: 'from-rose-500/20 to-pink-500/20',
    href: '/values',
  },
  {
    id: 'books',
    title: 'Books',
    icon: BookOpen,
    teaser: 'Stories that shaped who I am.',
    color: 'from-orange-500/20 to-yellow-500/20',
    href: '/books',
  },
  {
    id: 'random-facts',
    title: 'Random Facts',
    icon: Star,
    teaser: 'Things you probably didn&apos;t know about me.',
    color: 'from-cyan-500/20 to-sky-500/20',
    href: '/random-facts',
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: Mail,
    teaser: 'Let&apos;s connect and have a conversation.',
    color: 'from-green-500/20 to-emerald-500/20',
    href: '/contact',
  },
];

// Page Content Data
export const developerData = {
  timeline: [
    { year: '2015', event: 'Wrote my first "Hello World" and fell in love with code.', icon: Code2 },
    { year: '2017', event: 'Built my first real project - a task management app.', icon: Laptop },
    { year: '2019', event: 'Started working professionally as a developer.', icon: Briefcase },
    { year: '2021', event: 'Discovered the joy of open source contributions.', icon: Code2 },
    { year: 'Present', event: 'Building products that make a difference.', icon: Target },
  ],
  currentStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  favoriteTechnologies: [
    { name: 'TypeScript', reason: 'Type safety is beautiful' },
    { name: 'React', reason: 'Components just make sense' },
    { name: 'Framer Motion', reason: 'Animation should be easy' },
    { name: 'Next.js', reason: 'Full-stack without the headache' },
  ],
  projects: [
    { name: 'This Website', description: 'An interactive personal experience.', tech: ['Next.js', 'Framer Motion', 'TypeScript'] },
    { name: 'TaskFlow', description: 'A minimal task management tool for focused work.', tech: ['React', 'Node.js', 'PostgreSQL'] },
    { name: 'CodeSnap', description: 'Beautiful code screenshot tool.', tech: ['React', 'Canvas API'] },
  ],
  learningRoadmap: ['Rust', 'WebAssembly', 'AI/ML Integration', 'System Design'],
};

export const writerData = {
  favoritePoem: {
    title: 'The Road Not Taken',
    author: 'Robert Frost',
    excerpt: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
  },
  philosophy: 'I write to understand. Every word is an attempt to capture something true about the human experience. Writing is not about impressing—it&apos;s about connecting.',
  currentProject: 'Working on a collection of essays about technology, creativity, and the spaces between.',
  creativeProcess: [
    'Observe something interesting',
    'Let it simmer in my mind',
    'Write terrible first drafts',
    'Edit ruthlessly',
    'Share and learn',
  ],
};

export const musicData = {
  favoriteArtists: [
    { name: 'Bon Iver', genre: 'Indie Folk', why: 'Emotional depth that hits different.' },
    { name: 'Radiohead', genre: 'Alternative', why: 'Every album is a journey.' },
    { name: 'Frank Ocean', genre: 'R&B', why: 'Vulnerable storytelling at its finest.' },
    { name: 'Daft Punk', genre: 'Electronic', why: 'Proof that electronic music has soul.' },
  ],
  codingPlaylist: 'Lo-fi beats, ambient soundscapes, and post-rock anthems. Lyrics distract me, so I stick to instrumentals.',
  genres: ['Indie Folk', 'Alternative', 'Electronic', 'Jazz', 'Post-Rock'],
};

export const dailyLifeData = {
  routine: [
    { time: '6:30 AM', activity: 'Wake up, no phone for first 30 minutes', icon: Clock },
    { time: '7:00 AM', activity: 'Coffee and journaling', icon: Coffee },
    { time: '8:00 AM', activity: 'Deep work session', icon: Laptop },
    { time: '12:00 PM', activity: 'Break for exercise and food', icon: Heart },
    { time: '2:00 PM', activity: 'Meetings and collaboration', icon: MessageCircle },
    { time: '5:00 PM', activity: 'Creative time or learning', icon: Palette },
    { time: '8:00 PM', activity: 'Reading and winding down', icon: BookOpen },
    { time: '10:00 PM', activity: 'Sleep', icon: Star },
  ],
  coffeePreference: 'Black, no sugar. Ideally from a French press. But I won&apos;t say no to a good espresso.',
  habits: ['Daily journaling', 'Morning meditation', 'Weekly code reviews', 'Monthly goal setting'],
  productivityTools: ['Notion', 'VS Code', 'Raycast', 'Things 3'],
};

export const gamesData = {
  favorites: [
    { name: 'The Legend of Zelda: Breath of the Wild', hours: '200+', genre: 'Adventure' },
    { name: 'Dark Souls', hours: '150+', genre: 'Action RPG' },
    { name: 'Stardew Valley', hours: '300+', genre: 'Simulation' },
    { name: 'Hades', hours: '100+', genre: 'Roguelike' },
  ],
  currentlyPlaying: 'Baldur&apos;s Gate 3',
  genres: ['Adventure', 'Roguelike', 'Cozy Games', 'Strategy'],
  gamingPhilosophy: 'Games are art. They teach us about persistence, creativity, and empathy. I play to experience stories I could never live.',
};

export const galleryData = {
  description: 'Photography is how I pause moments. Not a professional by any means, but I love capturing the world as I see it.',
  categories: ['Nature', 'Urban', 'Street', 'Abstract'],
  favoriteSubject: 'Golden hour light on quiet streets.',
};

export const thoughtsData = {
  opinions: [
    'The best code is the code you don&apos;t have to write.',
    'AI won&apos;t replace developers—it will make them more creative.',
    'Most productivity advice is optimized for robots, not humans.',
    'Quiet is becoming the most valuable luxury.',
  ],
  lessons: [
    'Done is better than perfect. Perfect never ships.',
    'Your network is not contacts—it&apos;s relationships.',
    'Rest is productive. Burnout ships nothing.',
    'Curiosity compounds over time.',
  ],
  beliefs: [
    'Technology should serve humanity, not the other way around.',
    'Everyone is fighting a battle you know nothing about. Be kind.',
    'The future belongs to those who can learn, unlearn, and relearn.',
  ],
};

export const dreamsData = {
  bucketList: [
    'Visit every continent',
    'Write and publish a book',
    'Build a product used by millions',
    'Learn to play the piano',
    'Run a marathon',
    'See the Northern Lights',
  ],
  careerGoals: ['Build products that solve real problems', 'Create tools that empower others', 'Leave the code better than I found it'],
  travelDreams: ['Japan in cherry blossom season', 'New Zealand landscapes', 'Norwegian fjords', 'Australian outback'],
  lifeGoals: ['Stay curious', 'Build meaningful relationships', 'Never stop creating', 'Leave everything better than I found it'],
};

export const valuesData = {
  coreValues: [
    { name: 'Authenticity', description: 'Be real. Always. People can sense fake from miles away.' },
    { name: 'Curiosity', description: 'Ask questions. Challenge assumptions. Never stop learning.' },
    { name: 'Kindness', description: 'In a world that rewards sharp elbows, choose soft hands.' },
    { name: 'Craftsmanship', description: 'Details matter. The things we create reflect who we are.' },
    { name: 'Growth', description: 'Comfort is the enemy of progress. Always be evolving.' },
  ],
  guidingPrinciples: [
    'Would I be proud of this in 10 years?',
    'Am I solving a real problem or just making noise?',
    'Is this the kind of person I want to be?',
    'Am I leaving things better than I found them?',
  ],
};

export const booksData = {
  favorites: [
    { title: 'Atomic Habits', author: 'James Clear', why: 'Changed how I think about progress. Small actions, big results.' },
    { title: 'Deep Work', author: 'Cal Newport', why: 'Made me rethink productivity in a distracted world.' },
    { title: 'The Pragmatic Programmer', author: 'David Thomas', why: 'The book that made me a real developer.' },
    { title: 'Sapiens', author: 'Yuval Noah Harari', why: 'Blew my mind. Understanding humans changes everything.' },
  ],
  currentlyReading: 'The Design of Everyday Things by Don Norman',
  recommendations: 'Start with what excites you. Life is too short for boring books.',
};

export const randomFactsData = {
  facts: [
    'I&apos;ve written code in 12 different programming languages.',
    'Coffee is my love language.',
    'I can solve a Rubik&apos;s cube in under 2 minutes.',
    'I&apos;ve lived in 3 different countries.',
    'My first "program" was a batch file that opened Minecraft.',
    'I&apos;ve watched The Office (US) 5 times through.',
    'I believe the best IDE is the one you know well.',
    'I once spent 3 days debugging a missing semicolon. Never again.',
    'I think sunset is the most underrated time of day.',
    'My favorite font for coding changes every few months.',
    'I have strong opinions about code formatting.',
    'I believe tabs are better than spaces. (Don&apos;t @ me)',
  ],
  unpopularOpinions: [
    'Dark mode is better but light mode deserves respect.',
    'Most React apps don&apos;t need Redux.',
    'The best documentation is the code itself, well-written.',
    'Email is actually a great communication tool when used right.',
  ],
  unexpected: [
    'I&apos;m weirdly good at parallel parking.',
    'I can&apos;t whistle.',
    'I&apos;ve never broken a bone.',
    'I collect mechanical keyboards as a hobby.',
  ],
};

export const contactData = {
  email: 'darshan@example.com',
  socials: [
    { name: 'GitHub', handle: '@darshan', url: 'https://github.com/darshan' },
    { name: 'Twitter', handle: '@darshan', url: 'https://twitter.com/darshan' },
    { name: 'LinkedIn', handle: 'Darshan', url: 'https://linkedin.com/in/darshan' },
    { name: 'Instagram', handle: '@darshan', url: 'https://instagram.com/darshan' },
  ],
  availability: 'Open to interesting conversations and collaborations.',
};

export const quotesData = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
  { text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
  { text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
  { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
];
