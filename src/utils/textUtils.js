export const substringText = (startIndex, endIndex, text) => {
  if (text === "") return null;
  return text.substring(startIndex, endIndex);
};

export const formatVideoViews = (number) => {
  if (number >= 1000000) {
    const millionValue = (number / 1000000).toFixed(1);
    return millionValue.endsWith(".0")
      ? millionValue.slice(0, -2) + "M"
      : millionValue + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(0) + "K";
  } else {
    return number.toString();
  }
};

export const timeGap = (publishedDate) => {
  const providedDate = new Date(publishedDate);
  const currentDate = new Date();
  const timeDifference = currentDate - providedDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 365) {
    const years = Math.floor(days / 365);
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (days >= 30) {
    const months = Math.floor(days / 30);
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes < 60) {
    return `${minutes} minutes`;
  }
};
