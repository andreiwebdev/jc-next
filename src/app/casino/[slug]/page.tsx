import { BlockRenderer } from "@/components/BlockRenderer";
import { CasinoHero, CasinoTopOffers } from "@/components/SingleCasino";
import { getSingleCasinoData } from "@/lib/getSingleCasino";

export default async function SingleCasino({ params }: any) {
  const { slug } = params;
  const {
    databaseId,
    casino,
    featuredImageUrl,
    featuredImageAlt,
    casinoGeneralFields,
    casinoOfferFields,
    blocks,
  } = await getSingleCasinoData(`/casino/${slug}`);

  console.log(casinoOfferFields);

  return (
    <div id="content" className="site-content">
      <div id="primary" className="content-area primary">
        <CasinoHero
          postID={databaseId}
          logoUrl={featuredImageUrl}
          logoAltText={featuredImageAlt}
          pageTitle={casinoGeneralFields.h1}
          shortIntro={casinoGeneralFields.shortIntro}
        />
        <CasinoTopOffers casino={casino} />
        <div className="casino-content bottom-content-area">
          <div className="ast-container container">
            <BlockRenderer blocks={blocks} />
          </div>
        </div>
      </div>
    </div>
  );
}
