import { CardOffer } from "../Offers/styles/CardOffer";

export const CasinoTopOffers = ({ casino }: any) => {
  const offers = [
    {
      offerStyle: "1",
      offerShort: "tc",
      headerText: casino.casinoOfferFields["tcHeaderText"],
      offerTitle: casino.casinoOfferFields["tcCto"],
      offerDescription: casino.casinoOfferFields["tcLongDescC20"],
      offerList: casino.casinoOfferFields["tcShortDescC10"],
      casinoLink: casino.casinoGeneralFields.casinoLink,
    },
    {
      offerStyle: "2",
      offerShort: "so1",
      headerText: casino.casinoOfferFields["so1HeaderText"],
      offerTitle: casino.casinoOfferFields["so1Cto"],
      offerDescription: casino.casinoOfferFields["so1LongDescC20"],
      offerList: casino.casinoOfferFields["so1ShortDescC10"],
      casinoLink: casino.casinoGeneralFields.casinoLink,
    },
    {
      offerStyle: "3",
      offerShort: "cp",
      headerText: casino.casinoOfferFields["cpHeaderText"],
      offerTitle: casino.casinoOfferFields["cpCto"],
      offerDescription: casino.casinoOfferFields["cpLongDescC20"],
      offerList: casino.casinoOfferFields["cpShortDescC10"],
      casinoLink: casino.casinoGeneralFields.casinoLink,
    },
    {
      offerStyle: "4",
      offerShort: "so2",
      headerText: casino.casinoOfferFields["so2HeaderText"],
      offerTitle: casino.casinoOfferFields["so2Cto"],
      offerDescription: casino.casinoOfferFields["so2LongDescC20"],
      offerList: casino.casinoOfferFields["so2ShortDescC10"],
      casinoLink: casino.casinoGeneralFields.casinoLink,
    },
  ];

  return (
    <div className="casino-offers clear no-bg-cards">
      <div className="ast-container container">
        <div className="ast-row row">
          {offers.map(
            (offer, index) =>
              offer.offerTitle && (
                <CardOffer
                  key={index}
                  offerStyle={offer.offerStyle}
                  offerShort={offer.offerShort}
                  headerText={offer.headerText}
                  offerTitle={offer.offerTitle}
                  offerDescription={offer.offerDescription}
                  offerList={offer.offerList}
                  casinoLink={offer.casinoLink}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};
