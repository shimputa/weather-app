import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  WiBarometer,
  WiHumidity,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer
} from 'react-icons/wi';

const DetailsContainer = styled.div`
  ${({ theme }) => theme.glass};
  border-radius: 20px;
  padding: 1.5rem;
  margin: 1rem 0;
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const DetailCard = styled(motion.div)`
  ${({ theme }) => theme.glass};
  padding: 1.2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

const DetailLabel = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
`;

const DetailValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

const DetailUnit = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textSecondary};
`;

// Mock data - will be replaced with API data
const weatherDetails = [
  {
    label: 'Feels Like',
    value: '24',
    unit: '°C',
    icon: WiThermometer,
  },
  {
    label: 'Humidity',
    value: '65',
    unit: '%',
    icon: WiHumidity,
  },
  {
    label: 'Wind Speed',
    value: '5',
    unit: 'km/h',
    icon: WiStrongWind,
  },
  {
    label: 'Pressure',
    value: '1015',
    unit: 'hPa',
    icon: WiBarometer,
  },
  {
    label: 'Sunrise',
    value: '6:45',
    unit: 'AM',
    icon: WiSunrise,
  },
  {
    label: 'Sunset',
    value: '7:30',
    unit: 'PM',
    icon: WiSunset,
  },
];

const WeatherDetails: React.FC = () => {
  return (
    <DetailsContainer>
      <h3>Weather Details</h3>
      <DetailsGrid>
        {weatherDetails.map((detail, index) => (
          <DetailCard
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <detail.icon />
            <DetailLabel>{detail.label}</DetailLabel>
            <DetailValue>
              {detail.value}
              <DetailUnit>{detail.unit}</DetailUnit>
            </DetailValue>
          </DetailCard>
        ))}
      </DetailsGrid>
    </DetailsContainer>
  );
};

export default WeatherDetails;
