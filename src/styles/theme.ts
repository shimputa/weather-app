interface ThemeInterface {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  gradient: string;
  shadow: string;
  glass: {
    background: string;
    border: string;
    boxShadow: string;
    backdropFilter: string;
  };
}

export const lightTheme: ThemeInterface = {
  primary: '#7c3aed', // Vibrant purple
  secondary: '#06b6d4', // Cyan
  background: '#fafafa',
  card: 'rgba(255, 255, 255, 0.95)',
  text: '#334155',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  gradient: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', // Purple to cyan gradient
  shadow: '0 8px 32px 0 rgba(124, 58, 237, 0.1)',
  glass: {
    background: 'rgba(255, 255, 255, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(124, 58, 237, 0.1)',
    backdropFilter: 'blur(10px)',
  },
};

export const darkTheme: ThemeInterface = {
  primary: '#a78bfa', // Light purple
  secondary: '#22d3ee', // Light cyan
  background: '#0f172a', // Dark blue
  card: 'rgba(30, 41, 59, 0.95)',
  text: '#f8fafc',
  textSecondary: '#94a3b8',
  border: '#1e293b',
  gradient: 'linear-gradient(135deg, #6d28d9 0%, #0891b2 100%)', // Deep purple to deep cyan
  shadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
  glass: {
    background: 'rgba(30, 41, 59, 0.7)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
    backdropFilter: 'blur(10px)',
  },
};

export type ThemeType = ThemeInterface;

// Add theme type augmentation for styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeInterface {}
}
