export const capitalize = (str: string) => {
  if (str) return `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
};
