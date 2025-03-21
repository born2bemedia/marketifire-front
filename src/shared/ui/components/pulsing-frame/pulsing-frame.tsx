'use client';

import type { ReactNode } from 'react';

import { motion } from '@/shared/lib/motion';

export function PulsingFrame({
  layerOne,
  layerTwo,
}: {
  layerOne: ReactNode;
  layerTwo: ReactNode;
}) {
  return (
    <>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {layerOne}
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.5], opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {layerTwo}
      </motion.div>
    </>
  );
}
