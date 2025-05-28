import { RatingButtonProps } from './Rating.types';
import { RatingContent, ratingVariants } from './RatingBase';

export function RatingButton({ onClick, ...props }: RatingButtonProps) {
  const { button } = ratingVariants({});
  const value = props.full ? props.rating : `${props.rating} de 5`;

  return (
    <button
      type="button"
      onClick={() => onClick(props.rating)}
      className={button()}
      aria-label={`Avaliação ${value}. Clique para mais detalhes`}
    >
      <RatingContent {...props} showArrow />
    </button>
  );
}
