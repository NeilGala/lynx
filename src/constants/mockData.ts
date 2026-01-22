/**
 * Mock Data Constants
 * Temporary mock data for development
 * TODO: Replace with actual API calls when backend is integrated
 */

import { User, Experience } from '../types';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Alex Rivera',
  handle: '@arivera',
  bio: 'Product Designer & Engineering Manager. I help with career pivoting and high-growth team building.',
  avatar: 'https://picsum.photos/seed/arivera/200',
  karma: 1240,
  helpedCount: 42,
  rank: 'Guide',
  badges: []
};

export const MOCK_EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    userId: 'u1',
    title: 'Scaling from Seed to Series B',
    description: 'I managed the engineering team through the most chaotic growth phase of a FinTech unicorn. Focused on culture, technical debt management, and rapid hiring.',
    proofUrl: 'https://linkedin.com/in/arivera',
    category: 'Engineering',
    helpedCount: 12,
    user: MOCK_USER
  },
  {
    id: 'e2',
    userId: 'u2',
    title: 'Self-taught to Senior SWE at Stripe',
    description: 'No degree, no bootcamps. Just pure grit and focused learning paths. Let me show you how I mastered systems design and algorithms while working a full-time service job.',
    proofUrl: 'https://stripe.com',
    category: 'Career',
    helpedCount: 89,
    user: {
      id: 'u2',
      name: 'Sarah Chen',
      handle: '@schen',
      avatar: 'https://picsum.photos/seed/schen/200',
      karma: 3500,
      helpedCount: 112,
      rank: 'Mentor',
      badges: [],
      bio: 'Lover of clean code and systems architecture.'
    }
  },
  {
    id: 'e3',
    userId: 'u3',
    title: 'Growth Hacking for SaaS',
    description: 'Scaled a B2B SaaS from $0 to $1M ARR in 14 months using zero paid ads.',
    proofUrl: 'https://twitter.com/growthmarketer',
    category: 'Marketing',
    helpedCount: 56,
    user: {
      id: 'u3',
      name: 'Marcus Aurelius',
      handle: '@marcus_growth',
      avatar: 'https://picsum.photos/seed/marcus/200',
      karma: 7200,
      helpedCount: 189,
      rank: 'Guide',
      badges: [],
      bio: 'Ex-Google, Ex-Meta. Just a student of growth.'
    }
  },
  {
    id: 'e4',
    userId: 'u4',
    title: 'Breaking into Product Management from Engineering',
    description: 'Made the transition from Senior Engineer to Product Lead at Amazon. I can guide you through the mindset shift, skill gaps, and networking strategies.',
    proofUrl: 'https://linkedin.com/in/example',
    category: 'Career',
    helpedCount: 45,
    user: {
      id: 'u4',
      name: 'Emily Tran',
      handle: '@emilyt',
      avatar: 'https://picsum.photos/seed/emily/200',
      karma: 2800,
      helpedCount: 67,
      rank: 'Guide',
      badges: [],
      bio: 'Product Leader at Amazon. Previously SWE.'
    }
  },
  {
    id: 'e5',
    userId: 'u5',
    title: 'Negotiating $300K+ Offers in Big Tech',
    description: 'Negotiated offers at Google, Meta, and Netflix. I know exactly what leverage you need and when to use it.',
    proofUrl: 'https://levels.fyi/profile',
    category: 'Career',
    helpedCount: 134,
    user: {
      id: 'u5',
      name: 'David Park',
      handle: '@dpark',
      avatar: 'https://picsum.photos/seed/david/200',
      karma: 4200,
      helpedCount: 156,
      rank: 'Mentor',
      badges: [],
      bio: 'Staff Engineer at Netflix. Offer negotiation expert.'
    }
  },
  {
    id: 'e6',
    userId: 'u6',
    title: 'Building a Design System from Scratch',
    description: 'Led the creation of Airbnb\'s design system. I can help you establish component libraries, design tokens, and governance.',
    proofUrl: 'https://airbnb.design',
    category: 'Design',
    helpedCount: 78,
    user: {
      id: 'u6',
      name: 'Jessica Wong',
      handle: '@jwong',
      avatar: 'https://picsum.photos/seed/jessica/200',
      karma: 5600,
      helpedCount: 201,
      rank: 'Mentor',
      badges: [],
      bio: 'Design Systems Lead at Airbnb.'
    }
  },
  {
    id: 'e7',
    userId: 'u7',
    title: 'Mastering System Design Interviews',
    description: 'Cleared system design rounds at all FAANG companies. I have a proven framework for designing scalable systems under pressure.',
    proofUrl: 'https://github.com/systemdesign',
    category: 'Engineering',
    helpedCount: 167,
    user: {
      id: 'u7',
      name: 'Raj Patel',
      handle: '@rajp',
      avatar: 'https://picsum.photos/seed/raj/200',
      karma: 6800,
      helpedCount: 234,
      rank: 'Mentor',
      badges: [],
      bio: 'Principal Engineer at Meta. Interview coach.'
    }
  },
  {
    id: 'e8',
    userId: 'u8',
    title: 'Fundraising for Pre-Seed Startups',
    description: 'Raised $2M pre-seed for my startup in 2023. I can guide you through pitch decks, investor meetings, and term sheets.',
    proofUrl: 'https://crunchbase.com/startup',
    category: 'Leadership',
    helpedCount: 23,
    user: {
      id: 'u8',
      name: 'Michael Chen',
      handle: '@mchen',
      avatar: 'https://picsum.photos/seed/michael/200',
      karma: 1900,
      helpedCount: 34,
      rank: 'Pathfinder',
      badges: [],
      bio: 'Founder & CEO. Raised $2M pre-seed.'
    }
  },
  {
    id: 'e9',
    userId: 'u9',
    title: 'Content Marketing that Actually Converts',
    description: 'Grew organic traffic from 0 to 500K monthly visitors. SEO, content strategy, and distribution tactics that work.',
    proofUrl: 'https://blog.example.com',
    category: 'Marketing',
    helpedCount: 91,
    user: {
      id: 'u9',
      name: 'Lisa Anderson',
      handle: '@lisa_marketing',
      avatar: 'https://picsum.photos/seed/lisa/200',
      karma: 3200,
      helpedCount: 98,
      rank: 'Guide',
      badges: [],
      bio: 'Head of Growth at SaaS unicorn.'
    }
  },
  {
    id: 'e10',
    userId: 'u10',
    title: 'Remote Work as a Digital Nomad',
    description: 'Worked remotely from 30+ countries while maintaining a senior engineering role. Visa strategies, productivity hacks, and work-life balance.',
    proofUrl: 'https://nomadlist.com/@example',
    category: 'Career',
    helpedCount: 62,
    user: {
      id: 'u10',
      name: 'Carlos Rodriguez',
      handle: '@carlos_nomad',
      avatar: 'https://picsum.photos/seed/carlos/200',
      karma: 2400,
      helpedCount: 71,
      rank: 'Guide',
      badges: [],
      bio: 'Digital nomad. Senior SWE at remote-first startup.'
    }
  },
  {
    id: 'e11',
    userId: 'u11',
    title: 'Leading Engineering Teams Through Layoffs',
    description: 'Navigated 3 rounds of layoffs as an EM. I can help you support your team, manage survivor guilt, and rebuild morale.',
    proofUrl: 'https://linkedin.com/in/leadership',
    category: 'Leadership',
    helpedCount: 38,
    user: {
      id: 'u11',
      name: 'Priya Sharma',
      handle: '@priya_em',
      avatar: 'https://picsum.photos/seed/priya/200',
      karma: 2100,
      helpedCount: 45,
      rank: 'Guide',
      badges: [],
      bio: 'Engineering Manager at Fortune 500.'
    }
  },
  {
    id: 'e12',
    userId: 'u12',
    title: 'Building SaaS Products as a Solo Founder',
    description: 'Launched 3 profitable SaaS products solo. Revenue from $0 to $50K MRR. Product development, marketing, and automation.',
    proofUrl: 'https://indiehackers.com/product',
    category: 'Leadership',
    helpedCount: 103,
    user: {
      id: 'u12',
      name: 'Tom Hansen',
      handle: '@tomh',
      avatar: 'https://picsum.photos/seed/tom/200',
      karma: 5400,
      helpedCount: 178,
      rank: 'Mentor',
      badges: [],
      bio: 'Indie hacker. 3x SaaS founder.'
    }
  },
  {
    id: 'e13',
    userId: 'u13',
    title: 'UX Research in Fast-Paced Startups',
    description: 'Conducted user research at 3 YC startups. Learn how to do quality research when you have no time or budget.',
    proofUrl: 'https://medium.com/@uxresearch',
    category: 'Design',
    helpedCount: 54,
    user: {
      id: 'u13',
      name: 'Nina Kowalski',
      handle: '@nina_ux',
      avatar: 'https://picsum.photos/seed/nina/200',
      karma: 2700,
      helpedCount: 82,
      rank: 'Guide',
      badges: [],
      bio: 'UX Researcher. YC alum.'
    }
  },
  {
    id: 'e14',
    userId: 'u14',
    title: 'AWS Cost Optimization at Scale',
    description: 'Reduced cloud costs by 60% at a Series C company. Infrastructure optimization, reserved instances, and FinOps strategies.',
    proofUrl: 'https://github.com/aws-optimization',
    category: 'Engineering',
    helpedCount: 47,
    user: {
      id: 'u14',
      name: 'Ahmed Al-Rashid',
      handle: '@ahmed_devops',
      avatar: 'https://picsum.photos/seed/ahmed/200',
      karma: 3100,
      helpedCount: 93,
      rank: 'Guide',
      badges: [],
      bio: 'DevOps Lead. AWS certified.'
    }
  },
  {
    id: 'e15',
    userId: 'u15',
    title: 'Career Pivot from Finance to Tech',
    description: 'Went from investment banking to software engineering at 32. I can help you make a complete career change.',
    proofUrl: 'https://linkedin.com/in/career-change',
    category: 'Career',
    helpedCount: 71,
    user: {
      id: 'u15',
      name: 'Robert Kim',
      handle: '@robert_tech',
      avatar: 'https://picsum.photos/seed/robert/200',
      karma: 2900,
      helpedCount: 88,
      rank: 'Guide',
      badges: [],
      bio: 'Ex-Goldman Sachs. Now SWE at tech startup.'
    }
  }
];

export const MOCK_CHATS = [
  { id: 'c1', name: 'Sarah Chen', lastMsg: 'I have a framework for cross-squad synchronization...', time: '10:27 AM', avatar: 'https://picsum.photos/seed/schen/200' },
  { id: 'c2', name: 'Jordan Miller', lastMsg: 'Thanks for the help yesterday!', time: 'Yesterday', avatar: 'https://picsum.photos/seed/u4/200' },
  { id: 'c3', name: 'Marcus Aurelius', lastMsg: 'The growth playbook I mentioned is attached here.', time: 'Yesterday', avatar: 'https://picsum.photos/seed/marcus/200' },
  { id: 'c4', name: 'Emily Tran', lastMsg: 'Let me know when you\'re ready for that PM mock interview.', time: '2d ago', avatar: 'https://picsum.photos/seed/emily/200' },
  { id: 'c5', name: 'David Park', lastMsg: 'Here are the negotiation scripts I used at Netflix.', time: '3d ago', avatar: 'https://picsum.photos/seed/david/200' },
  { id: 'c6', name: 'Jessica Wong', lastMsg: 'Check out this Figma file with component examples.', time: '3d ago', avatar: 'https://picsum.photos/seed/jessica/200' },
  { id: 'c7', name: 'Raj Patel', lastMsg: 'Great session today! Let\'s schedule a follow-up.', time: '4d ago', avatar: 'https://picsum.photos/seed/raj/200' },
  { id: 'c8', name: 'Michael Chen', lastMsg: 'I\'ll send you my pitch deck template tomorrow.', time: '5d ago', avatar: 'https://picsum.photos/seed/michael/200' },
  { id: 'c9', name: 'Lisa Anderson', lastMsg: 'The SEO checklist is in your inbox!', time: '1w ago', avatar: 'https://picsum.photos/seed/lisa/200' },
  { id: 'c10', name: 'Carlos Rodriguez', lastMsg: 'Here\'s my Notion doc with all the visa info.', time: '1w ago', avatar: 'https://picsum.photos/seed/carlos/200' },
];

export const MOCK_NOTIFICATIONS = [
  { id: 'n1', title: 'New Help Request', body: 'Jordan Miller wants help with "Scaling from Seed to Series B"', time: '2h ago' },
  { id: 'n2', title: 'Karma Earned', body: 'You earned 50 Karma for helping Sarah Chen', time: '1d ago' },
  { id: 'n3', title: 'New Badge Available', body: 'Complete one more session to earn the "Pathfinder" badge', time: '3d ago' },
];
