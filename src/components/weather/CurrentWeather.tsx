import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherCard = styled(motion.div)`
  ${({ theme }) => theme.glass};
  border-radius: 24px;
  padding: 2.5rem;
  margin: 2rem 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => `${theme.card}`},
    ${({ theme }) => `${theme.glass.background}`}
  );
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1);
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const Temperature = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  line-height: 1;
  margin-bottom: 0.5rem;
  
  span {
    font-weight: 400;
    opacity: 0.8;
  }
`;

const WeatherDescription = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 0.5rem;
`;

const Location = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  background: ${({ theme }) => theme.glass.background};
  border-radius: 16px;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const DetailLabel = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const DetailValue = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  font-weight: 600;
`;

const CurrentWeather: React.FC = () => {
  return (
    <WeatherCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainInfo>
        <div>
          <Temperature>23<span>°C</span></Temperature>
          <WeatherDescription>Partly Cloudy</WeatherDescription>
          <Location>New York, USA</Location>
        </div>
      </MainInfo>
      
      <WeatherDetails>
        <DetailItem>
          <WiThermometer />
          <DetailInfo>
            <DetailLabel>Feels Like</DetailLabel>
            <DetailValue>25°C</DetailValue>
          </DetailInfo>
        </DetailItem>
        <DetailItem>
          <WiHumidity />
          <DetailInfo>
            <DetailLabel>Humidity</DetailLabel>
            <DetailValue>65%</DetailValue>
          </DetailInfo>
        </DetailItem>
        <DetailItem>
          <WiStrongWind />
          <DetailInfo>
            <DetailLabel>Wind Speed</DetailLabel>
            <DetailValue>5 km/h</DetailValue>
          </DetailInfo>
        </DetailItem>
      </WeatherDetails>
    </WeatherCard>
  );
};

export default CurrentWeather;
