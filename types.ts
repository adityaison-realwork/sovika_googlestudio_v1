
export interface Product {
  id: number;
  name: string;
  category: 'Ethnic' | 'Western' | 'Bottom Wear';
  image: string;
  priceRange?: string;
  description: string;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  description: string;
  itemCount?: string; // e.g. "50+ Styles"
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}
