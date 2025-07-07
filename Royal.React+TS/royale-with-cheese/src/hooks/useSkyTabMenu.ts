import { useState, useMemo, useCallback } from 'react';
import { SkyTabMenuItem, SkyTabMenuCategory } from '../types/skytab';

export const useSkyTabMenu = (menuItems: SkyTabMenuCategory) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => Object.keys(menuItems), [menuItems]);

  const filteredItems = useMemo(() => {
    let items: SkyTabMenuItem[] = [];
    
    if (selectedCategory) {
      items = menuItems[selectedCategory] || [];
    } else {
      items = Object.values(menuItems).flat();
    }

    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return items;
  }, [menuItems, selectedCategory, searchTerm]);

  const getItemsByCategory = useCallback((category: string) => {
    return menuItems[category] || [];
  }, [menuItems]);

  const findItemByName = useCallback((name: string) => {
    for (const category of Object.values(menuItems)) {
      const item = category.find(item => 
        item.name.toLowerCase().includes(name.toLowerCase())
      );
      if (item) return item;
    }
    return null;
  }, [menuItems]);

  const getFeaturedItems = useCallback(() => {
    return [
      findItemByName("Marcellus Wallace"),
      findItemByName("Mia Wallace"),
      findItemByName("Royal Fries & Brisket"),
      findItemByName("Cookie Butter-Nutella")
    ].filter(Boolean) as SkyTabMenuItem[];
  }, [findItemByName]);

  const getPopularItems = useCallback(() => {
    return [
      findItemByName("Havana"),
      findItemByName("Kruncher"), 
      findItemByName("Beirut"),
      findItemByName("Nacho Cheese Ravioli")
    ].filter(Boolean) as SkyTabMenuItem[];
  }, [findItemByName]);

  const trackItemView = useCallback((item: SkyTabMenuItem) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'menu_item_view', {
        event_category: 'menu',
        event_label: item.name,
        item_category: item.category,
        value: parseFloat(item.price.replace('$', ''))
      });
    }
  }, []);

  const trackItemOrder = useCallback((item: SkyTabMenuItem) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'begin_checkout', {
        event_category: 'ecommerce',
        event_label: item.name,
        item_category: item.category,
        value: parseFloat(item.price.replace('$', ''))
      });
    }
    
    // Track SkyTab order initiation
    console.log(`SkyTab Order Initiated: ${item.name} - ${item.price}`, {
      url: item.url,
      category: item.category,
      timestamp: new Date().toISOString()
    });
  }, []);

  const handleSkyTabOrder = useCallback((item: SkyTabMenuItem) => {
    trackItemOrder(item);
    // Open SkyTab ordering page in new tab
    window.open(item.url, '_blank', 'noopener,noreferrer');
  }, [trackItemOrder]);

  const getMenuStats = useCallback(() => {
    const totalItems = Object.values(menuItems).reduce((sum, category) => sum + category.length, 0);
    
    const allItems = Object.values(menuItems).flat();
    const prices = allItems.map(item => parseFloat(item.price.replace('$', '')));
    
    return {
      totalItems,
      categories: Object.keys(menuItems).length,
      priceRange: {
        lowest: Math.min(...prices),
        highest: Math.max(...prices),
        average: prices.reduce((sum, price) => sum + price, 0) / prices.length
      }
    };
  }, [menuItems]);

  const getHighMarginItems = useCallback(() => {
    // Items with highest profit margins for promotion
    return [
      ...menuItems.shakes || [],
      ...(menuItems.burgers || []).filter(item => 
        parseFloat(item.price.replace('$', '')) >= 13
      ),
      ...(menuItems.bites || []).filter(item => 
        item.name.includes('Royal')
      )
    ];
  }, [menuItems]);

  const searchByPrice = useCallback((minPrice: number, maxPrice: number) => {
    const allItems = Object.values(menuItems).flat();
    return allItems.filter(item => {
      const price = parseFloat(item.price.replace('$', ''));
      return price >= minPrice && price <= maxPrice;
    });
  }, [menuItems]);

  const getCategoryDisplayName = useCallback((category: string) => {
    const displayNames: { [key: string]: string } = {
      'burgers': 'Signature Burgers',
      'bites': 'Royale Bites',
      'greens': 'Fresh Salads',
      'shakes': 'Custard Shakes',
      'beverages': 'Beverages',
      'dessert': 'Desserts'
    };
    return displayNames[category] || category.charAt(0).toUpperCase() + category.slice(1);
  }, []);

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems,
    getItemsByCategory,
    findItemByName,
    getFeaturedItems,
    getPopularItems,
    trackItemView,
    trackItemOrder,
    handleSkyTabOrder,
    getMenuStats,
    getHighMarginItems,
    searchByPrice,
    getCategoryDisplayName
  };
}; 