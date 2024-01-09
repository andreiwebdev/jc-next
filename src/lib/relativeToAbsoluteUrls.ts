export const relativeToAbsoluteUrls = (htmlString = "") => {
  const wpUrl = process.env.NEXT_PUBLIC_WP_URL || "";

  // Regular expression to match URLs that are not part of image src
  const regex = new RegExp(`(?<!src=["'])${wpUrl}`, "g");
  return htmlString.replace(regex, "");
};
