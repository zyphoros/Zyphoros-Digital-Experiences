export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: 'globe' | 'zap' | 'code' | 'cpu';
  tag: string;
}

export interface PortfolioCase {
  id: string;
  client: string;
  url: string;
  category: string;
  headline: string;
  summary: string;
  tags: string[];
  accentColor: string;
  screenshots: string[];
  challenge?: string;
  solution?: string;
  metric?: string;
  metricLabel?: string;
  previewImage?: string;
}

export interface Differential {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface InstagramPost {
  id: string;
  tag: string;
  title: string;
  readTime: string;
  date: string;
  likes: string;
  comments: string;
  excerpt: string;
}
