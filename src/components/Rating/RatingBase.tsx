import { tv } from 'tailwind-variants';
import { Text } from '../Text/Text';
import { Icon } from '../Icon/Icon';
import { RatingContentProps } from './Rating.types';

export const sizeMap = {
  sm: {
    starIcon: 16,
    arrowIcon: 8,
  },
  md: {
    starIcon: 24,
    arrowIcon: 16,
  },
};

export const ratingVariants = tv({
  slots: {
    container: 'inline-flex items-center gap-0.5',
    stars: 'inline-flex items-center gap-1',
    button:
      'inline-flex items-center gap-1 rounded hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
  },
});

export function RatingContent({
  rating,
  full = false,
  size = 'md',
  showArrow = false,
  textVariant = 'ParagraphSmall',
}: RatingContentProps) {
  const { container, stars } = ratingVariants({});

  const iconSize = sizeMap[size];
  const value = full ? `${rating} de 5` : rating;

  return (
    <div className={container()}>
      <div className={stars()}>
        <Icon name="star-full" color="yellow-500" size={iconSize.starIcon} />
        <div className="mt-0.5">
          <Text as="span" variant={textVariant} weight="bold">
            {value}
          </Text>
        </div>
      </div>
      {showArrow && <Icon size={iconSize.arrowIcon} name="arrow-right" />}
    </div>
  );
}
