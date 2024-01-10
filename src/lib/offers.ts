export const convertOfferType = (offerType: string) => {
  let offerShort = "";

  if (offerType == "tcfulloffer") {
    //With deposit
    offerShort = "tc";
  } else if (offerType == "extrafulloffer") {
    //No deposit
    offerShort = "so1";
  } else if (offerType == "lcfulloffer") {
    //Live casino
    offerShort = "so2";
  } else if (offerType == "cpfulloffer") {
    //Sport casino
    offerShort = "cp";
  }

  return offerShort;
};

export const getAffLink = (offerShort: string, casinoName: string) => {
  return `/aff/so-${offerShort}-${casinoName}`;
};
