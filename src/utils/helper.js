export const randomDataGenerator = (data) => {
  return data[Math.floor(Math.random() * data.length)];
};

export const formatCommentText = (text) => {
  const timestampRegex = /(\d+:\d+)\s*<a\s+href="([^"]+)">([^<]+)<\/a>/g;
  const formattedText = text.replace(
    timestampRegex,
    (match, timestamp, url, label) =>
      `<a href="${url}">${timestamp}</a> ${label}`
  );

  return { __html: formattedText };
};
