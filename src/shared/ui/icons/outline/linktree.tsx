'use client';

export function Linktree({
  height = 24,
  width = 24,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_6148_8194)">
        <path
          d="M12 15V21.75"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.25 4.5L6.75 15"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.25 15L6.75 4.5"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 9.75H4.5"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 2.25V9"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6148_8194">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
