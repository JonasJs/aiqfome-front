import * as React from 'react';
import { SVGProps } from 'react';

export function Trashcon({
  fill = '#6D6F73',
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <g fill={fill} clipPath="url(#a)">
        <path d="M10 10.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75ZM14 10.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Z" />
        <path
          fillRule="evenodd"
          d="M8.525 3.83A4.036 4.036 0 0 0 7.075 6H4.75a.75.75 0 0 0 0 1.5h.75v8.75A3.75 3.75 0 0 0 9.25 20h5.5a3.75 3.75 0 0 0 3.75-3.75V7.5h.75a.75.75 0 1 0 0-1.5h-2.575A3.751 3.751 0 0 0 13 3h-2a4.036 4.036 0 0 0-2.475.83Zm1.174 1.082A2.25 2.25 0 0 0 8.875 6h6.247A2.251 2.251 0 0 0 13 4.5h-2c-.466 0-.92.143-1.301.412ZM17 7.5H7v8.75a2.25 2.25 0 0 0 2.25 2.25h5.5A2.25 2.25 0 0 0 17 16.25V7.5Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
