'use client';

export function Atom({
  height = 25,
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
      viewBox="0 0 24 25"
      fill="none"
    >
      <g clipPath="url(#clip0_6148_8555)">
        <path
          d="M19.712 20.5067C21.3277 18.891 19.1848 14.1286 14.9258 9.86958C10.6668 5.61055 5.90439 3.46768 4.28871 5.08336C2.67304 6.69903 4.81591 11.4614 9.07494 15.7205C13.334 19.9795 18.0964 22.1224 19.712 20.5067Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.9258 15.7203C19.1848 11.4612 21.3277 6.69884 19.712 5.08316C18.0964 3.46749 13.334 5.61036 9.07494 9.86939C4.81591 14.1284 2.67304 18.8908 4.28871 20.5065C5.90439 22.1222 10.6668 19.9793 14.9258 15.7203Z"
          stroke="#8E8E89"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.9199C12.6213 13.9199 13.125 13.4162 13.125 12.7949C13.125 12.1736 12.6213 11.6699 12 11.6699C11.3787 11.6699 10.875 12.1736 10.875 12.7949C10.875 13.4162 11.3787 13.9199 12 13.9199Z"
          fill="#8E8E89"
        />
      </g>
      <defs>
        <clipPath id="clip0_6148_8555">
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
