import { ComponentType } from 'react';

declare module 'react-day-picker' {
  interface StyledComponent {
    className?: string;
  }

  interface CustomComponents {
    IconLeft: ComponentType<StyledComponent>;
    IconRight: ComponentType<StyledComponent>;
  }
} 