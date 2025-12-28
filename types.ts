
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
