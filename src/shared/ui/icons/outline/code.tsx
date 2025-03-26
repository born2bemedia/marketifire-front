'use client';

export function Code({
  width = 24,
  height = 25,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clipPath="url(#clip0_6148_8635)">
        <path
          d="M6 9.04492L1.5 12.7949L6 16.5449"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9.04492L22.5 12.7949L18 16.5449"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 4.54492L9 21.0449"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6148_8635">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.794922)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
