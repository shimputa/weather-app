import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  background-image: ${({ theme }) => theme.gradient};
  transition: all 0.3s ease-in-out;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleTheme }) => {
  return (
    <LayoutWrapper>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
