import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WiDaySunny, WiCloudy, WiRain } from 'react-icons/wi';

const ScrollContainer = styled.div`
  ${({ theme }) => theme.glass};
  border-radius: 24px;
  padding: 2rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => `${theme.card}`},
    ${({ theme }) => `${theme.glass.background}`}
  );
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const TimelineScroll = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.2rem;
  padding: 0.5rem 0.25rem;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.glass.background};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const HourCard = styled(motion.div)`
  ${({ theme }) => theme.glass};
  min-width: 120px;
  padding: 1.2rem;
  border-radius: 18px;
  text-align: center;
  background: ${({ theme }) => theme.glass.background};
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.secondary};
    margin: 0.8rem 0;
  }
`;

const Time = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
`;

const Temperature = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
`;

// Mock data - will be replaced with API data
const hourlyData = [
  { time: '12 PM', temp: '23°', icon: WiDaySunny },
  { time: '1 PM', temp: '24°', icon: WiDaySunny },
  { time: '2 PM', temp: '25°', icon: WiCloudy },
  { time: '3 PM', temp: '24°', icon: WiCloudy },
  { time: '4 PM', temp: '23°', icon: WiRain },
  { time: '5 PM', temp: '22°', icon: WiRain },
  { time: '6 PM', temp: '21°', icon: WiCloudy },
  { time: '7 PM', temp: '20°', icon: WiDaySunny },
];

const HourlyForecast: React.FC = () => {
  return (
    <ScrollContainer>
      <Title>Hourly Forecast</Title>
      <TimelineScroll>
        {hourlyData.map((hour, index) => (
          <HourCard
            key={hour.time}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Time>{hour.time}</Time>
            <hour.icon />
            <Temperature>{hour.temp}</Temperature>
          </HourCard>
        ))}
      </TimelineScroll>
    </ScrollContainer>
  );
};

export default HourlyForecast;
