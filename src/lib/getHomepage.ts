import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getHomepageData = async () => {
  const params = {
    query: `
    query GetHomepageData {
      nodeByUri(uri: "/") {
        ... on Page {
          id
          blocks(postTemplate: false, attributes: true)
          homepageHero {
            fieldGroupName
            heroBlogLinkText
            pageDescription
            pageTitle
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          homepageAdvantages {
            backgroundWin {
              bgImage {
                sourceUrl
                altText
              }
              gradient
            }
            card1 {
              text
              imagine {
                sourceUrl
              }
            }
            card2 {
              text
              imagine {
                sourceUrl
              }
            }
            card3 {
              text
              imagine {
                sourceUrl
              }
            }
            card4 {
              text
              imagine {
                sourceUrl
              }
            }
            winTitlu
            winText
            textWinReadMore
          }
          homepageCazinouri {
            casinoTitlu
            casinoText
            textCasinoReadMore
            backgroundCazinouri {
              gradient
              pattern {
                altText
                sourceUrl
              }
            }
            casinoSectionButon {
              textButon
              link {
                ... on Page {
                  id
                  uri
                }
              }
            }
            numarCazinouri
            offerType
          }
          homepageSlots {
            backgroundSlots {
              bgImage {
                altText
                sourceUrl
              }
              gradient
              pattern {
                altText
                sourceUrl
              }
            }
            slotsSectionButon {
              link {
                ... on Page {
                  id
                  uri
                }
              }
              textButon
            }
            slotsText
            slotsTitlu
            textSlotsReadMore
          }
        }
      }
      posts(first: 4) {
        nodes {
          id
          title
          uri
          dateGmt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
      cazinouri(first: 50) {
        nodes {
          uri
          title
          cazinoId
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          casinoGeneralFields {
            casinoLink
            disableCasino
            fieldGroupName
            h1
            idNumber
            rating
            shortIntro
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
      jocuri(first: 4) {
        nodes {
          databaseId
          title
          uri
          producatoriJocuri {
            nodes {
              id
              name
              uri
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          jocuriSingleInfo {
            ratingSum
            ratingCount
          }
        }
      }
    }
    `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL || "", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocks);

  return {
    homepage: data.nodeByUri,
    hero: data.nodeByUri.homepageHero,
    latestPosts: data.posts.nodes,
    homepageAdvantages: data.nodeByUri.homepageAdvantages,
    homepageCazinouri: data.nodeByUri.homepageCazinouri,
    homepageSlots: data.nodeByUri.homepageSlots,
    jocuri: data.jocuri.nodes,
    casinos: data.cazinouri.nodes,
    blocks,
  };
};
