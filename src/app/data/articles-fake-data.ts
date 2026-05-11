import { ArticleObj } from "../modules/article.module";

export const ARTICLES: ArticleObj[] = [
  // User 1
  {
    id: 1,
    userId: 1,
    title: 'Angular Basics',
    summary: 'Introduction to Angular framework',
    isPublished: false
  },
  {
    id: 2,
    userId: 1,
    title: 'Components Deep Dive',
    summary: 'Understanding Angular components',
    isPublished: false
  },
  {
    id: 3,
    userId: 1,
    title: 'RxJS Overview',
    summary: 'Understanding observables',
    isPublished: false
  },

  // User 2
  {
    id: 4,
    userId: 2,
    title: 'TypeScript Basics',
    summary: 'Getting started with TS',
    isPublished: false
  },
  {
    id: 5,
    userId: 2,
    title: 'Interfaces & Types',
    summary: 'Strong typing in TypeScript',
    isPublished: false
  },
  {
    id: 6,
    userId: 2,
    title: 'Generics Explained',
    summary: 'Reusable code with generics',
    isPublished: false
  },

  // User 3
  {
    id: 7,
    userId: 3,
    title: 'Angular Advanced Concepts',
    summary: 'Deep dive into Angular',
    isPublished: false
  },
  {
    id: 8,
    userId: 3,
    title: 'Change Detection',
    summary: 'How Angular detects changes',
    isPublished: false
  },

  // User 4
  {
    id: 9,
    userId: 4,
    title: 'Routing Basics',
    summary: 'Navigation in Angular apps',
    isPublished: false
  },
  {
    id: 10,
    userId: 4,
    title: 'Lazy Loading',
    summary: 'Performance optimization',
    isPublished: false
  },

  // User 5
  {
    id: 11,
    userId: 5,
    title: 'Forms in Angular',
    summary: 'Reactive and template forms',
    isPublished: false
  },
  {
    id: 12,
    userId: 6,
    title: 'Form Validation',
    summary: 'Validating user input',
    isPublished: false
  }
];