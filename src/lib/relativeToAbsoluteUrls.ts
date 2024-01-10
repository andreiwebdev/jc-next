export const relativeToAbsoluteUrls = (htmlString = "") => {
  const wpUrl = "http://jc-full.local/";

  // Regular expression to match URLs that are not part of image src
  const regex = new RegExp(`(?<!src=["'])${wpUrl}`, "g");

  // Replace WordPress domain with Next.js domain
  return htmlString.replace(regex, "http://localhost:3000/");
};
