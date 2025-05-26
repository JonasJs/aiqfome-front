import * as React from 'react';
import { SVGProps } from 'react';

export function PlusIcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill={fill}
        d="M16 12a.75.75 0 0 0-.75-.75h-2.5V8.724a.75.75 0 0 0-1.5 0v2.526h-2.5a.75.75 0 1 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.501 0v-2.5h2.5a.75.75 0 0 0 .75-.75Z"
      />
    </svg>
  );
}
