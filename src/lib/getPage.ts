export const getPageByUri = async (uri: string) => {
  const params = {
    query: `
      query GetPageByUri($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
          }
        }
      }
    `,
    variables: {
      uri,
    },
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL || "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();

  return data;
};
