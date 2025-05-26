import * as React from 'react';
import { SVGProps } from 'react';

export function TicketIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M15.586 19.414A2 2 0 0 0 19 18V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v11a2 2 0 0 0 3.414 1.414L12 15.5l3.586 3.914Zm-8.249-1.045 3.557-3.882a1.498 1.498 0 0 1 2.212 0l3.557 3.882A.5.5 0 0 0 17.5 18V7A1.5 1.5 0 0 0 16 5.5H8A1.5 1.5 0 0 0 6.5 7v11a.5.5 0 0 0 .837.369Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
