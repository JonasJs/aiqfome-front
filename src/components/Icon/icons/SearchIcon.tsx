import * as React from 'react';
import { SVGProps } from 'react';

export function SearchIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g fill={fill} clipPath="url(#a)">
        <path
          fillRule="evenodd"
          d="M15.391 16.452a7 7 0 1 1 1.061-1.06l3.328 3.328a.747.747 0 0 1 0 1.06.748.748 0 0 1-1.06 0l-3.329-3.328Zm-.502-1.563a5.5 5.5 0 1 1-7.778-7.778 5.5 5.5 0 0 1 7.778 7.778Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
