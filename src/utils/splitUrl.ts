export const splitUrl = (path: string) => {
  const regExpForSeparating = /\/\w+/g;
  const pathChunks = path.match(regExpForSeparating);
  const pageName = pathChunks ? pathChunks![0].slice(1) : "/";
  return {pathChunks, pageName};
};
