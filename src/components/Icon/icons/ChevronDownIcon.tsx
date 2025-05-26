import * as React from 'react';
import { SVGProps } from 'react';

export function ChevronDownIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.228 8.235a.816.816 0 0 0 0 1.13l6.222 6.4a.762.762 0 0 0 1.1 0l6.222-6.4a.816.816 0 0 0 0-1.13.763.763 0 0 0-1.1 0L12 14.069 6.328 8.235a.763.763 0 0 0-1.1 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
