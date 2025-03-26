'use client';

export function ChartLineUp({
  width = 26,
  height = 26,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M21.5531 20.6678L3.56495 20.0145L4.10938 5.02441"
        stroke="#8E8E89"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.767 7.84508L12.7764 14.3456L9.88728 11.2387L3.67347 17.017"
        stroke="#8E8E89"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.631 11.5926L19.7671 7.84509L16.0195 7.70898"
        stroke="#8E8E89"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
