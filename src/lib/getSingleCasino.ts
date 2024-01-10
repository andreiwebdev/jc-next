import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getSingleCasinoData = async (uri: string) => {
  const query = `
    query GetPageByUri($uri: String!) {
      nodeByUri(uri: $uri) {
        ... on Cazino {
          id
          databaseId
          uri
          title
          blocks(attributes: true, dynamicContent: true)
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          casinoGeneralFields {
            h1
            rating
            shortIntro
            casinoLink
          }
          casinoOfferFields {
            casinoColor
            casinoSquareImage {
              altText
              sourceUrl
            }
            cpCoc
            cpCoe
            cpCto
            cpHeaderColorCopy
            cpHeaderText
            cpLongDescC20
            cpShortDescC10 {
              elementLista
            }
            cpShortDescC30 {
              elementLista
            }
            iccImage {
              altText
              sourceUrl
            }
            linkCustomOfertaCuDepunere
            linkCustomOfertaFaraDepunere
            linkCustomOfertaLive
            linkCustomOfertaSport
            so1Background {
              altText
              sourceUrl
            }
            so1Badge {
              altText
              sourceUrl
            }
            so1Coc
            so1Coe
            so1Cto
            so1HeaderColor
            so1HeaderText
            so1LongDescC20
            so1ShortDescC10 {
              elementLista
            }
            so1ShortDescC30 {
              elementLista
            }
            so2Background {
              altText
              sourceUrl
            }
            so2Badge {
              altText
              sourceUrl
            }
            so2Coc
            so2Coe
            so2Cto
            so2HeaderColor
            so2HeaderText
            so2LongDescC20
            so2ShortDescC10 {
              elementLista
            }
            so2ShortDescC30 {
              elementLista
            }
            spBackground {
              altText
              sourceUrl
            }
            spBadge {
              altText
              sourceUrl
            }
            tcBackground {
              altText
              sourceUrl
            }
            tcBadge {
              altText
              sourceUrl
            }
            tcCoc
            tcCoe
            tcCto
            tcHeaderColor
            tcHeaderText
            tcLongDescC20
            tcShortDescC10 {
              elementLista
            }
            tcShortDescC30 {
              elementLista
            }
          }
        }
      }
    }
  `;

  const params = {
    query,
    variables: {
      uri,
    },
  };

  try {
    const response = await fetch(process.env.WP_GRAPHQL_URL || "", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });

    const { data } = await response.json();
    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);

    return {
      casino: data?.nodeByUri,
      databaseId: data?.nodeByUri?.databaseId,
      title: data?.nodeByUri?.title,
      featuredImageUrl: data?.nodeByUri?.featuredImage.node.sourceUrl,
      featuredImageAlt: data?.nodeByUri?.featuredImage.node.altText,
      casinoGeneralFields: data?.nodeByUri?.casinoGeneralFields,
      casinoOfferFields: data?.nodeByUri?.casinoOfferFields,
      blocks,
    };
  } catch (error) {
    console.error("Error fetching casino:", error);
    return {};
  }
};
