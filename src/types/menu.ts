export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  available: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}
