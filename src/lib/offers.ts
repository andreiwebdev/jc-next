export const convertOfferType = (offerType: string) => {
  let offer_short = "";

  if (offerType == "tcfulloffer") {
    //With deposit
    offer_short = "tc";
  } else if (offerType == "extrafulloffer") {
    //No deposit
    offer_short = "so1";
  } else if (offerType == "lcfulloffer") {
    //Live casino
    offer_short = "so2";
  } else if (offerType == "cpfulloffer") {
    //Live casino
    offer_short = "cp";
  }

  return offer_short;
};
