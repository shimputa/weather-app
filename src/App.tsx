import React, { useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, ThemeType } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import CurrentWeather from './components/weather/CurrentWeather';
import HourlyForecast from './components/weather/HourlyForecast';
import DailyForecast from './components/weather/DailyForecast';
import WeatherDetails from './components/weather/WeatherDetails';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme: ThemeType = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Layout data-testid="app-container" isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
        <WeatherDetails />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
