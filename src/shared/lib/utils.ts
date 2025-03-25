export const formatCount = (num: number) => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const truncateText = (text: string, maxLength: number = 220) =>
  text.length > maxLength ? text.slice(0, maxLength) + '..' : text;
