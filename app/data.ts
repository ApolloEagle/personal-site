type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

type Technology = {
  label: string
}

export const PROJECTS: Project[] = [
  {
    name: 'The Motley Fool',
    description:
      'Personalized stock recommendations, market analysis, and investing insights to help users make smarter financial decisions',
    link: 'https://www.fool.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Mobius',
    title: 'Founder & CEO',
    start: '2025',
    end: 'Present',
    link: 'https://mobiusappsolutions.com',
    id: 'work1',
  },
  {
    company: '7 Oaks Group',
    title: 'Senior Mobile Engineer',
    start: '2023',
    end: '2025',
    link: 'https://7oaksgroup.com/',
    id: 'work2',
  },
  {
    company: 'Thought Industries',
    title: 'Senior Fullstack Engineer',
    start: '2022',
    end: '2023',
    link: 'https://thoughtindustries.com',
    id: 'work3',
  },
  {
    company: 'Nutrien',
    title: 'Fullstack Engineer',
    start: '2020',
    end: '2022',
    link: 'https://nutrien.com',
    id: 'work4',
  },
  {
    company: 'GreatVines',
    title: 'Software Engineer',
    start: '2019',
    end: '2020',
    link: 'https://andavisolutions.com/greatvines-sales-management/',
    id: 'work5',
  },
  {
    company: 'LogRhythm',
    title: 'Software Engineer',
    start: '2017',
    end: '2019',
    link: 'https://www.exabeam.com/',
    id: 'work6',
  },
  {
    company: 'Zayo Group',
    title: 'Software Engineer',
    start: '2016',
    end: '2017',
    link: 'https://www.zayo.com/',
    id: 'work7',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const FRONTEND: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'React Native',
  'Expo',
]

export const BACKEND: string[] = [
  'Node.js',
  'Express',
  'REST',
  'Supabase',
  'GraphQL',
  'Firebase',
  'PostgreSQL',
  'Apollo',
]

export const TOOLING: string[] = [
  'Git',
  'GitHub Actions',
  'ESLint',
  'Prettier',
  'Jest',
  'RTL',
  'Vite',
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ApolloEagle',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/blakereimer',
  },
]

export const EMAIL = 'mobiusappsolutions@gmail.com'
