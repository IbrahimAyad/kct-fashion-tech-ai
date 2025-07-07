import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, Filter } from 'lucide-react';
import { royaleSkyTabMenuItems } from '../data/skyTabMenuData';
import { useSkyTabMenu } from '../hooks/useSkyTabMenu';
import SkyTabMenuItemCard from './SkyTab/SkyTabMenuItemCard';

const MenuContainer = styled.section`
  background: #f8f9fa;
  padding: 80px 0;
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MenuHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  color: #2c3e50;
  
  .highlight {
    color: #DC2626;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SearchBox = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 25px;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #DC2626;
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const CategoryTab = styled.button<{ isActive: boolean }>`
  padding: 12px 24px;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.isActive ? 'linear-gradient(135deg, #DC2626, #991B1B)' : 'white'};
  color: ${props => props.isActive ? 'white' : '#666'};
  border: 2px solid ${props => props.isActive ? 'transparent' : '#e9ecef'};
  
  &:hover {
    background: ${props => props.isActive ? 'linear-gradient(135deg, #991B1B, #DC2626)' : '#f8f9fa'};
    transform: translateY(-2px);
  }
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const CategorySection = styled.div`
  margin-bottom: 60px;
`;

const CategoryTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, #DC2626, #991B1B);
    border-radius: 2px;
  }
`;

const StatsBar = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: #DC2626;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Menu: React.FC = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems,
    getItemsByCategory,
    getCategoryDisplayName,
    handleSkyTabOrder,
    getMenuStats
  } = useSkyTabMenu(royaleSkyTabMenuItems);

  const stats = getMenuStats();

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <MenuContainer id="menu">
      <Container>
        <MenuHeader>
          <Title>
            Our <span className="highlight">Signature</span> Menu
          </Title>
          <Subtitle>
            Discover Detroit's most innovative burger experience featuring AI-powered ordering,
            handcrafted items, and locally-sourced ingredients
          </Subtitle>
        </MenuHeader>

        <StatsBar>
          <StatItem>
            <StatNumber>{stats.totalItems}</StatNumber>
            <StatLabel>Menu Items</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{stats.categories}</StatNumber>
            <StatLabel>Categories</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>4.9★</StatNumber>
            <StatLabel>Rating</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>3K+</StatNumber>
            <StatLabel>Reviews</StatLabel>
          </StatItem>
        </StatsBar>

        <SearchContainer>
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon>
              <Search size={18} />
            </SearchIcon>
          </SearchBox>
        </SearchContainer>

        <CategoryTabs>
          <CategoryTab
            isActive={selectedCategory === null}
            onClick={() => handleCategoryClick(null)}
          >
            All Items
          </CategoryTab>
          {categories.map(category => (
            <CategoryTab
              key={category}
              isActive={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              {getCategoryDisplayName(category)}
            </CategoryTab>
          ))}
        </CategoryTabs>

        {selectedCategory ? (
          <CategorySection>
            <CategoryTitle>{getCategoryDisplayName(selectedCategory)}</CategoryTitle>
            <MenuGrid>
              {getItemsByCategory(selectedCategory).map((item, index) => (
                <SkyTabMenuItemCard
                  key={`${item.name}-${index}`}
                  item={item}
                  onOrderClick={handleSkyTabOrder}
                  showDescription={true}
                  variant="card"
                />
              ))}
            </MenuGrid>
          </CategorySection>
        ) : (
          <>
            {searchTerm ? (
              <CategorySection>
                <CategoryTitle>Search Results</CategoryTitle>
                <MenuGrid>
                  {filteredItems.map((item, index) => (
                    <SkyTabMenuItemCard
                      key={`${item.name}-${index}`}
                      item={item}
                      onOrderClick={handleSkyTabOrder}
                      showDescription={true}
                      variant="card"
                    />
                  ))}
                </MenuGrid>
              </CategorySection>
            ) : (
              categories.map(category => {
                const items = getItemsByCategory(category);
                if (items.length === 0) return null;
                
                return (
                  <CategorySection key={category}>
                    <CategoryTitle>{getCategoryDisplayName(category)}</CategoryTitle>
                    <MenuGrid>
                      {items.map((item, index) => (
                        <SkyTabMenuItemCard
                          key={`${item.name}-${index}`}
                          item={item}
                          onOrderClick={handleSkyTabOrder}
                          showDescription={true}
                          variant="card"
                        />
                      ))}
                    </MenuGrid>
                  </CategorySection>
                );
              })
            )}
          </>
        )}
      </Container>
    </MenuContainer>
  );
};

export default Menu; 