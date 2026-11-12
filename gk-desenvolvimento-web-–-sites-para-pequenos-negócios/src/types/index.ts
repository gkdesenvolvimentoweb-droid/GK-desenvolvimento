export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'gastronomia' | 'saude' | 'servicos';
  categoryLabel: string;
  description: string;
  impact: string;
  deliveryTime: string;
  image: string;
  tags: string[];
  features: string[];
  clientQuote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  city: string;
  avatarText: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceInstallment?: string;
  deliveryTime: string;
  description: string;
  features: string[];
  idealFor: string;
  popular?: boolean;
}

export interface QuoteFormData {
  name: string;
  email: string;
  whatsapp: string;
  companyName: string;
  segment: string;
  planId: string;
  message: string;
}
