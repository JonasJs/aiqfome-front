import { TextProps } from '../Text/Text.types';

export interface RatingBaseProps {
  rating: number;
  full?: boolean;
  size?: 'sm' | 'md';
  count?: number;
  textVariant?: TextProps['variant'];
}

export interface RatingContentProps extends RatingBaseProps {
  showArrow?: boolean;
}

export interface RatingButtonProps extends RatingBaseProps {
  onClick: (rating: number) => void;
}
