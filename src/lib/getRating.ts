export const updateRating = async (postID: any, rating: any) => {
  const params = {
    query: `
      mutation UpdateRating($postID: ID!, $rating: Int!) {
        updateRating(input: { postID: $postID, rating: $rating }) {
          success
          averageRating
        }
      }
    `,
    variables: {
      postID,
      rating,
    },
  };

  const response = await fetch(process.env.NEXT_PUBLIC_WP_URL + "graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();

  console.log(data);

  return data;
};

export const fetchRatingForPost = async (postID: any, postType = "joc") => {
  let query = "";
  if (postType === "joc") {
    query = `
      query GetRatingByPostID($postID: ID!) {
        joc(id: $postID, idType: DATABASE_ID) {
          jocuriSingleInfo {
            ratingSum
            ratingCount
          }
        }
      }
    `;
  } else {
    query = `
      query GetRatingByPostID($postID: ID!) {
        cazino(id: $postID, idType: DATABASE_ID) {
          casinoGeneralFields {
            ratingSum
            ratingCount
          }
        }
      }
    `;
  }

  const params = {
    query: query,
    variables: {
      postID,
    },
  };

  try {
    const response = await fetch(process.env.NEXT_PUBLIC_WP_URL + "graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const { data } = await response.json();
    if (data && data.joc && data.joc.jocuriSingleInfo) {
      const { ratingSum, ratingCount } = data.joc.jocuriSingleInfo;
      // Calculate the average rating
      const averageRating = ratingCount > 0 ? ratingSum / ratingCount : 0;
      return { averageRating: averageRating, votesRating: ratingCount };
    } else if (data && data.cazino && data.cazino.casinoGeneralFields) {
      const { ratingSum, ratingCount } = data.cazino.casinoGeneralFields;
      // Calculate the average rating
      const averageRating = ratingCount > 0 ? ratingSum / ratingCount : 0;
      return { averageRating: averageRating, votesRating: ratingCount };
    }

    return { averageRating: 0, votesRating: 0 };
  } catch (error) {
    console.error("Error fetching post rating:", error);
    return { averageRating: 0, votesRating: 0 };
  }
};
