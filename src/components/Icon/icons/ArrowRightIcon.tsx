import * as React from 'react';
import { SVGProps } from 'react';

export function ArrowRightIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M7.83 4.821a1.15 1.15 0 0 1 1.595 0l6.745 6.404a1.075 1.075 0 0 1 0 1.55L9.425 19.18a1.15 1.15 0 0 1-1.595 0 1.076 1.076 0 0 1 0-1.551L13.777 12 7.83 6.372a1.076 1.076 0 0 1 0-1.55Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
