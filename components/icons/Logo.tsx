import * as React from 'react';
import { css } from 'stitches.config';

const svg = css({
  width: '$12',
  height: '$12',
});

export const Logo = ({ ...props }) => {
  return (
    <svg
      className={svg()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 16.17c0 3.96-3.134 7.17-7 7.17s-7-3.21-7-7.17S20.134 9 24 9h7v7.17zm-1.75 0c0 2.97-2.35 5.378-5.25 5.378s-5.25-2.408-5.25-5.378 2.35-5.377 5.25-5.377h5.25v5.377z"
        fill="var(--colors-hiContrast)"
      />
      <ellipse
        cx={24}
        cy={31.83}
        rx={7}
        ry={7.17}
        fill="var(--colors-hiContrast)"
      />
    </svg>
  );
};
