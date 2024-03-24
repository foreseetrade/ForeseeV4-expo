export const utilRemoveDoubleQuotes = (str: string) => {
  return str.replace(/^"(.*)"$/, "$1");
};
