'use client';

export function MonitorPlay({
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
      <g clipPath="url(#clip0_6148_8518)">
        <path
          d="M4.5 18.2949L19.5 18.2949C20.3284 18.2949 21 17.6233 21 16.7949V6.29492C21 5.46649 20.3284 4.79492 19.5 4.79492L4.5 4.79492C3.67157 4.79492 3 5.46649 3 6.29492V16.7949C3 17.6233 3.67157 18.2949 4.5 18.2949Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 21.2949H9"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 11.5449L10.5 8.54492V14.5449L15 11.5449Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6148_8518">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.294922)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
