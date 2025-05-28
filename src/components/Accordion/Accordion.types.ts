import { ComponentProps, ReactNode } from 'react';

export interface AccordionProps extends ComponentProps<'div'> {
  type?: 'single' | 'multiple';
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

export interface AccordionItemProps extends ComponentProps<'div'> {
  value: string;
}

export interface AccordionTriggerProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export interface AccordionContentProps extends ComponentProps<'div'> {
  children: ReactNode;
}
