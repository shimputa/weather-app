import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
// import { motion } from 'framer-motion';

const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border-radius: 50px;
  border: none;
  background: ${({ theme }) => theme.glass.background};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  backdrop-filter: blur(4px);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.secondary};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.textSecondary};
`;

const SearchLocation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // TODO: Implement search functionality
  };

  return (
    <SearchWrapper>
      <SearchIcon>
        <IoSearchOutline />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search location..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </SearchWrapper>
  );
};

export default SearchLocation;
