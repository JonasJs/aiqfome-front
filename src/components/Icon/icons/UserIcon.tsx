import * as React from 'react';
import { SVGProps } from 'react';

export function UserIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M14.929 12.053a5 5 0 1 0-5.857 0A8.003 8.003 0 0 0 4 19.5v.143C4 20.393 4.608 21 5.357 21h13.286c.75 0 1.357-.608 1.357-1.357V19.5a8.003 8.003 0 0 0-5.071-7.447ZM15.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM12 13a6.5 6.5 0 0 0-6.5 6.5h13A6.5 6.5 0 0 0 12 13Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
