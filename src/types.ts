export interface MenuItem {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  category: 'all' | 'best-seller' | 'new' | 'main' | 'starter' | 'dessert';
  tags?: string[];
  image: string;
  description: string;
  ingredients?: string[];
  spiceLevel?: number; // 0 to 3
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface Reservation {
  id: string;
  bookingCode: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  area: string;
  notes?: string;
  preOrderedItems?: { item: MenuItem; quantity: number }[];
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface SpaceGalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  capacity: string;
  colSpan: string;
}
