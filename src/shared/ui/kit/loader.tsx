'use client';

import { Oval } from 'react-loader-spinner';

export function Loader({
  width = 22,
  height = 22,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color="#F3FF97"
      secondaryColor="#FFFFF"
    />
  );
}
