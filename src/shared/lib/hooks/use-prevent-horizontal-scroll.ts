import { useLayoutEffect } from 'react';

export const usePreventHorizontalScroll = () => {
  useLayoutEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        overflow-x: hidden !important;
        position: relative;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};
