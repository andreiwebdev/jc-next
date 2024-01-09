import { convertOfferType } from "@/lib/offers";
import { OfferList } from "..";

export const OffersSectionList = ({
  casinos,
  casinosMaxLength,
  offerType,
}: any) => {
  const offerShort = convertOfferType(offerType);

  return (
    <div className="casino-loop has-counter">
      <div className="ast-container">
        <div className="ast-row">
          {casinos.map(
            (casino: any, index: number) =>
              index < casinosMaxLength && (
                <OfferList
                  key={casino.cazinoId}
                  casinoTitle={casino.title}
                  casinoLogoUrl={casino.featuredImage.node.sourceUrl}
                  casinoLogoAltText={casino.featuredImage.node.altText}
                  rating={casino.casinoGeneralFields.rating}
                  offerShort={offerShort}
                  offerTitle={casino.casinoOfferFields[`${offerShort}Cto`]}
                  offerList={
                    casino.casinoOfferFields[`${offerShort}ShortDescC10`]
                  }
                  offerDescription={
                    casino.casinoOfferFields[`${offerShort}LongDescC20`]
                  }
                  casinoReviewUri={casino.uri}
                  casinoLink={casino.casinoGeneralFields.casinoLink}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
