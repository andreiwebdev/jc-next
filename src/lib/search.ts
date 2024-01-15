export const handleSearch = async (searchQuery: any, pageNumber: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}wp-json/wp/v2/search?search=${searchQuery}&page=${pageNumber}&per_page=9&exact=1&_embed=1&subtype=post`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const postsData = await response.json();

    // Access total results and total pages from headers
    const totalResultsHeader = response.headers.get("X-WP-Total");
    const totalPagesHeader = response.headers.get("X-WP-TotalPages");
    const totalResults = totalResultsHeader ? parseInt(totalResultsHeader) : 0;
    const totalPages = totalPagesHeader ? parseInt(totalPagesHeader) : 0;

    return { postsData, totalResults, totalPages };
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};

export const fetchFeaturedImage = async (featuredImageId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}wp-json/wp/v2/media/${featuredImageId}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const imageData = await response.json();

    return imageData;
  } catch (error) {
    console.error("Error fetching featured image:", error);
  }
};

export const getTaxonomyDetailsForPost = async (postId: number) => {
  try {
    // Fetch the post details with embedded term data
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}wp-json/wp/v2/posts/${postId}?_embed`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post details");
    }

    const postData = await response.json();

    // Access the embedded term data
    const embeddedTerms = postData._embedded && postData._embedded["wp:term"];

    if (!embeddedTerms || embeddedTerms.length === 0) {
      console.log("No terms found for this post.");
      return [];
    }

    // Extract and format the term names and links
    const termDetails: any = [];

    embeddedTerms.forEach((termGroup: any) => {
      termGroup.forEach((term: any) => {
        termDetails.push({
          id: term.id,
          name: term.name,
          slug: term.slug,
        });
      });
    });

    return termDetails;
  } catch (error) {
    console.error("Error fetching post terms:", error);
  }
};
