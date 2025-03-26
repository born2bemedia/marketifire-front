'use client';

export function UserSound({
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
      <g clipPath="url(#clip0_6148_8486)">
        <path
          d="M10.125 16.1475C13.2316 16.1475 15.75 13.6291 15.75 10.5225C15.75 7.41586 13.2316 4.89746 10.125 4.89746C7.0184 4.89746 4.5 7.41586 4.5 10.5225C4.5 13.6291 7.0184 16.1475 10.125 16.1475Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.25 19.8975C4.17656 17.6053 6.89625 16.1475 10.125 16.1475C13.3537 16.1475 16.0734 17.6053 18 19.8975"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.75 6.8418C19.2449 8.00576 19.5 9.2576 19.5 10.5224C19.5 11.7872 19.2449 13.0391 18.75 14.203"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.5039 5.64746C22.1621 7.18847 22.5014 8.84679 22.5014 10.5225C22.5014 12.1981 22.1621 13.8565 21.5039 15.3975"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_6148_8486">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.397461)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
