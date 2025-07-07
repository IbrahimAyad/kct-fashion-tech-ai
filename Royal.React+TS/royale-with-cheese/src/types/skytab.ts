// SkyTab Menu Integration Types
export interface SkyTabMenuItem {
  name: string;
  price: string;
  url: string;
  description?: string;
  image?: string;
  category?: string;
}

export interface SkyTabMenuCategory {
  [key: string]: SkyTabMenuItem[];
}

export interface SkyTabMenuConfig {
  restaurantName: string;
  restaurantId: string;
  baseUrl: string;
  currency: string;
  timezone: string;
  features: {
    orderTracking: boolean;
    loyaltyProgram: boolean;
    giftCards: boolean;
    catering: boolean;
  };
  categories: {
    id: string;
    name: string;
    order: number;
  }[];
}

export interface SkyTabMenuItemCardProps {
  item: SkyTabMenuItem;
  onOrderClick?: (item: SkyTabMenuItem) => void;
  showDescription?: boolean;
  showImage?: boolean;
  className?: string;
  variant?: 'card' | 'list' | 'compact';
}

export interface SkyTabMenuCategoryProps {
  categoryName: string;
  items: SkyTabMenuItem[];
  onItemOrderClick?: (item: SkyTabMenuItem) => void;
  variant?: 'grid' | 'list';
  className?: string;
}

export interface SkyTabMenuDisplayProps {
  config: SkyTabMenuConfig;
  categories?: string[];
  featuredItems?: SkyTabMenuItem[];
  onItemOrderClick?: (item: SkyTabMenuItem) => void;
  layout?: 'tabs' | 'sections' | 'accordion';
}

// Analytics and tracking
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
} 