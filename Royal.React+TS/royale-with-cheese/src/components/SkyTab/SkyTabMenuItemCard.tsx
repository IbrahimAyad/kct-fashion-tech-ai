import React from 'react';
import { ExternalLink, ShoppingCart, Star, Clock } from 'lucide-react';
import { SkyTabMenuItemCardProps } from '../../types/skytab';
import './SkyTabMenuItemCard.css';

const SkyTabMenuItemCard: React.FC<SkyTabMenuItemCardProps> = ({
  item,
  onOrderClick,
  showDescription = false,
  showImage = true,
  className = '',
  variant = 'card'
}) => {
  const handleOrderClick = () => {
    if (onOrderClick) {
      onOrderClick(item);
    } else {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  const isPopular = ['Mia Wallace', 'Havana', 'Royal Fries & Brisket', 'Nacho Cheese Ravioli'].includes(item.name);
  const isFeatured = ['Marcellus Wallace', 'Vincent Vega', 'Cookie Butter-Nutella'].includes(item.name);

  if (variant === 'list') {
    return (
      <div className={`skytab-item-card skytab-item-card--list ${className}`}>
        {showImage && item.image && (
          <div className="skytab-item-card__image-container skytab-item-card__image-container--list">
            <img 
              src={item.image} 
              alt={`${item.name} - Order via SkyTab`}
              className="skytab-item-card__image"
              loading="lazy"
            />
            {item.category && (
              <span className="skytab-item-card__category-tag">{item.category}</span>
            )}
          </div>
        )}
        
        <div className="skytab-item-card__content skytab-item-card__content--list">
          <div className="skytab-item-card__info">
            <div className="skytab-item-card__header">
              <h3 className="skytab-item-card__title skytab-item-card__title--list">{item.name}</h3>
              {/* <span className="skytab-item-card__price skytab-item-card__price--list">{item.price}</span> */}
            </div>
            {showDescription && item.description && (
              <p className="skytab-item-card__description skytab-item-card__description--list">
                {item.description.length > 100 
                  ? `${item.description.substring(0, 100)}...` 
                  : item.description
                }
              </p>
            )}
          </div>
          
          <button 
            className="skytab-item-card__order-btn skytab-item-card__order-btn--list" 
            onClick={handleOrderClick}
          >
            <ShoppingCart size={14} />
            Order via SkyTab
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`skytab-item-card skytab-item-card--${variant} ${className}`}>
      {showImage && item.image && (
        <div className={`skytab-item-card__image-container skytab-item-card__image-container--${variant}`}>
          <img 
            src={item.image} 
            alt={`${item.name} - Order via SkyTab`}
            className="skytab-item-card__image"
            loading="lazy"
          />
          
          <div className="skytab-item-card__skytab-badge">
            <ExternalLink size={10} />
            SkyTab
          </div>
          
          {isPopular && (
            <div className="skytab-item-card__popular-badge">
              <Star size={8} />
              Popular
            </div>
          )}
          
          {isFeatured && !isPopular && (
            <div className="skytab-item-card__featured-badge">
              <Clock size={8} />
              Featured
            </div>
          )}
        </div>
      )}
      
      <div className={`skytab-item-card__content skytab-item-card__content--${variant}`}>
        <div className="skytab-item-card__header">
          <h3 className={`skytab-item-card__title skytab-item-card__title--${variant}`}>{item.name}</h3>
          {/* <span className={`skytab-item-card__price skytab-item-card__price--${variant}`}>{item.price}</span> */}
        </div>
        
        {showDescription && item.description && (
          <p className={`skytab-item-card__description skytab-item-card__description--${variant}`}>
            {variant === 'compact' && item.description.length > 80
              ? `${item.description.substring(0, 80)}...`
              : item.description
            }
          </p>
        )}
        
        <button 
          className={`skytab-item-card__order-btn skytab-item-card__order-btn--${variant}`}
          onClick={handleOrderClick}
        >
          <ShoppingCart size={variant === 'compact' ? 12 : 16} />
          Order via SkyTab
          <ExternalLink size={variant === 'compact' ? 10 : 12} />
        </button>
      </div>
    </div>
  );
};

export default SkyTabMenuItemCard; 