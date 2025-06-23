import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Play, Pause, Volume2, VolumeX, Utensils, Search } from 'lucide-react';

// Video filter options - you can easily adjust these
const VIDEO_FILTER_OPTIONS = {
  current: 'light', // Current setting - lighter for better readability
  options: {
    light: {
      overlay: 'rgba(0, 0, 0, 0.3)', // 30% dark overlay (lighter)
      brightness: '110%',
      description: 'Light overlay - brighter video'
    },
    medium: {
      overlay: 'rgba(0, 0, 0, 0.5)', // 50% dark overlay (current)
      brightness: '100%', 
      description: 'Medium overlay - balanced'
    },
    dark: {
      overlay: 'rgba(0, 0, 0, 0.7)', // 70% dark overlay (darker)
      brightness: '90%',
      description: 'Dark overlay - dramatic effect'
    }
  }
};

const HeroContainer = styled.section<{ filterMode: string }>`
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #1a1a1a;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => VIDEO_FILTER_OPTIONS.options[props.filterMode as keyof typeof VIDEO_FILTER_OPTIONS.options].overlay};
    z-index: 2;
  }
`;

const VideoBackground = styled.video<{ filterMode: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  object-fit: cover;
  filter: brightness(${props => VIDEO_FILTER_OPTIONS.options[props.filterMode as keyof typeof VIDEO_FILTER_OPTIONS.options].brightness});

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const RestaurantIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  .burger-emoji {
    font-size: 3rem;
    margin-right: 10px;
  }
  
  .crown-emoji {
    font-size: 2rem;
  }
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  
  .royale {
    color: #FFD700;
    display: block;
  }
  
  .with-cheese {
    color: #DC2626;
    font-size: 0.8em;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 10vw, 4rem);
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 30px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 4vw, 1.2rem);
    padding: 0 10px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

const StatItem = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 120px;

  @media (max-width: 768px) {
    min-width: 100px;
    padding: 15px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #FFD700;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #FFD700, #FFC300);
  color: #1a1a1a;
  border: none;
  padding: 18px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 10px;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(255, 215, 0, 0.4);
    background: linear-gradient(135deg, #FFC300, #FFB000);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1rem;
    margin: 5px;
  }
`;

const VideoControls = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 4;
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const ControlButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const FilterToggle = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 4;
  
  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'rgba(255, 215, 0, 0.9)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.isActive ? '#1a1a1a' : 'white'};
  border: none;
  padding: 8px 12px;
  margin: 2px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 215, 0, 0.8);
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.7rem;
  }
`;

const HoursIndicator = styled.div`
  background: linear-gradient(135deg, #DC2626, #991B1B);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  margin-top: 20px;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentFilter, setCurrentFilter] = useState(VIDEO_FILTER_OPTIONS.current);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleOrderClick = () => {
    // Scroll to menu or open ordering modal
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer filterMode={currentFilter}>
      <VideoBackground
        ref={videoRef}
        filterMode={currentFilter}
        autoPlay
        muted={isMuted}
        loop
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
      </VideoBackground>

      {/* Video Filter Controls */}
      <FilterToggle>
        <div style={{ marginBottom: '5px', fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>
          Video Filter:
        </div>
        {Object.entries(VIDEO_FILTER_OPTIONS.options).map(([key, option]) => (
          <FilterButton
            key={key}
            isActive={currentFilter === key}
            onClick={() => setCurrentFilter(key)}
            title={option.description}
          >
            {key}
          </FilterButton>
        ))}
      </FilterToggle>

      <Content>
        <RestaurantIcon>
          <span className="burger-emoji">🍔</span>
          <span className="crown-emoji">👑</span>
        </RestaurantIcon>

        <Title>
          <span className="royale">ROYALE</span>
          <span className="with-cheese">WITH CHEESE</span>
        </Title>

        <Subtitle>
          Detroit's most awarded burger destination featuring<br />
          AI-powered ordering, 4.9-star rated experience,<br />
          and the city's most profitable restaurant technology showcase
        </Subtitle>

        <StatsContainer>
          <StatItem>
            <StatNumber>4.9</StatNumber>
            <StatLabel>Rating</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>3K+</StatNumber>
            <StatLabel>Reviews</StatLabel>
          </StatItem>
        </StatsContainer>

        <div>
          <CTAButton onClick={handleOrderClick}>
            <Utensils size={20} />
            Order Now
          </CTAButton>
          <CTAButton onClick={handleMenuClick} style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white' }}>
            <Search size={20} />
            View Menu
          </CTAButton>
        </div>

        <HoursIndicator>
          📍 Opens at 11 AM
        </HoursIndicator>
      </Content>

      <VideoControls>
        <ControlButton onClick={togglePlayPause} title={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </ControlButton>
        <ControlButton onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </ControlButton>
      </VideoControls>
    </HeroContainer>
  );
};

export default Hero; 