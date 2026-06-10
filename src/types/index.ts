export interface Property {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  status: 'for-sale' | 'for-rent';
  featuredImage: string;
  galleryImages: string[];
  amenities: string[];
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage?: string;
}
