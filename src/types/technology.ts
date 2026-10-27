export type Category =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools';

export type Technology = {
  id: string;
  name: string;
  category: Category;
  description: string;
  icon: string;
  rating: number;
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  badge: string;
};

export const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Language',
  'Styling',
  'DevOps',
  'Tools',
] as const;

export type CategoryFilter = (typeof categories)[number];