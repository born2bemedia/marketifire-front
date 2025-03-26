'use client';

export function IntersectThree({
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
      <g clipPath="url(#clip0_6148_8715)">
        <path
          d="M12 15.0449C15.1066 15.0449 17.625 12.5265 17.625 9.41992C17.625 6.31332 15.1066 3.79492 12 3.79492C8.8934 3.79492 6.375 6.31332 6.375 9.41992C6.375 12.5265 8.8934 15.0449 12 15.0449Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.375 21.0449C18.4816 21.0449 21 18.5265 21 15.4199C21 12.3133 18.4816 9.79492 15.375 9.79492C12.2684 9.79492 9.75 12.3133 9.75 15.4199C9.75 18.5265 12.2684 21.0449 15.375 21.0449Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.625 21.0449C11.7316 21.0449 14.25 18.5265 14.25 15.4199C14.25 12.3133 11.7316 9.79492 8.625 9.79492C5.5184 9.79492 3 12.3133 3 15.4199C3 18.5265 5.5184 21.0449 8.625 21.0449Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6148_8715">
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
