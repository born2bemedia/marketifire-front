'use client';

export function XIcon({
  width = 18,
  height = 18,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M1.59562 1.5H6.01125L9.94219 7.12219L14.6625 1.5H16.0734L10.4812 7.89375L16.5 16.5H12.0844L7.97906 10.6294L2.91 16.5H1.5L7.44094 9.85969L1.59562 1.5Z"
        fill="#3B3B35"
      />
    </svg>
  );
}
