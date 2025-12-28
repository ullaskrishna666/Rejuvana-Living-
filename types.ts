
// Shared navigation type to ensure consistency across components
export type Page = 'home' | 'directory' | 'privacy' | 'terms' | 'cookies';

export interface WellnessCard {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}