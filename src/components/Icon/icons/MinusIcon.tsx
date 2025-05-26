import * as React from 'react';
import { SVGProps } from 'react';

export function MinusIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        d="M15.943 11.76a.751.751 0 0 1-.692 1.038h-6.5a.75.75 0 1 1 0-1.5h6.499a.748.748 0 0 1 .693.463Z"
      />
    </svg>
  );
}
