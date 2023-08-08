export const substringText = (startIndex, endIndex, text) => {
  if (text === "") return null;
  return text.substring(startIndex, endIndex);
};
