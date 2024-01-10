export const relativeToAbsoluteUrls = (htmlString = "") => {
  // Regular expression to match URLs that are not part of image src
  const regex = new RegExp(
    `(?<!src=["'])${process.env.NEXT_PUBLIC_WP_URL}`,
    "g"
  );

  // Replace WordPress domain with Next.js domain
  return htmlString.replace(regex, `${process.env.NEXT_PUBLIC_SITE_URL}`);
};
