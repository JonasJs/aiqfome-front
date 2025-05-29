import { ReactNode } from 'react';

export interface CounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: 'small' | 'medium';
  rightComponent?: ReactNode;
  className?: string;
}
