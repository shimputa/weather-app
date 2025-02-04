import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WiDaySunny, WiCloudy, WiRain, WiDayCloudyGusts } from 'react-icons/wi';

const ForecastContainer = styled.div`
  ${({ theme }) => theme.glass};
  border-radius: 24px;
  padding: 2rem;
  margin-top: 2rem;
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

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
`;

const DayCard = styled(motion.div)`
  ${({ theme }) => theme.glass};
  padding: 1.5rem;
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
    margin: 1rem 0;
  }
`;

const Day = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Temperature = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.8rem;
`;

const HighTemp = styled.span`
  color: ${({ theme }) => theme.primary};
  font-size: 1.3rem;
  font-weight: 600;
`;

const LowTemp = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.3rem;
`;

// Mock data - will be replaced with API data
const dailyData = [
  { day: 'Mon', high: '24°', low: '18°', icon: WiDaySunny },
  { day: 'Tue', high: '23°', low: '17°', icon: WiCloudy },
  { day: 'Wed', high: '25°', low: '19°', icon: WiDaySunny },
  { day: 'Thu', high: '22°', low: '16°', icon: WiRain },
  { day: 'Fri', high: '21°', low: '15°', icon: WiDayCloudyGusts },
  { day: 'Sat', high: '23°', low: '17°', icon: WiCloudy },
  { day: 'Sun', high: '24°', low: '18°', icon: WiDaySunny },
];

const DailyForecast: React.FC = () => {
  return (
    <ForecastContainer>
      <Title>7-Day Forecast</Title>
      <DaysGrid>
        {dailyData.map((day, index) => (
          <DayCard
            key={day.day}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Day>{day.day}</Day>
            <day.icon />
            <Temperature>
              <HighTemp>{day.high}</HighTemp>
              <LowTemp>{day.low}</LowTemp>
            </Temperature>
          </DayCard>
        ))}
      </DaysGrid>
    </ForecastContainer>
  );
};

export default DailyForecast;
