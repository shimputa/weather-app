import React from 'react';
import styled from 'styled-components';
import { WiDaySunny } from 'react-icons/wi';
import SearchLocation from '../weather/SearchLocation';
import ThemeToggle from '../ui/ThemeToggle';

const HeaderWrapper = styled.header`
  ${({ theme }) => theme.glass};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LeftSection>
          <Logo>
            <WiDaySunny />
            <span>WeatherCast</span>
          </Logo>
        </LeftSection>
        <RightSection>
          <SearchLocation />
          <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </RightSection>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
