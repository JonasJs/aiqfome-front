import { RatingBaseProps } from './Rating.types';
import { RatingContent } from './RatingBase';

export function Rating(props: RatingBaseProps) {
  return <RatingContent {...props} />;
}
