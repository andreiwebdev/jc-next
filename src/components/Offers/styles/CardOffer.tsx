"use client";

import { getAffLink } from "@/lib/offers";
import Link from "next/link";
import { useState } from "react";

export const CardOffer = ({
  offerStyle = "1",
  headerText,
  offerTitle,
  offerList,
  offerDescription,
  offerShort,
  casinoLink,
}: any) => {
  const [showDescription, setShowDescription] = useState(false);
  const markupOfferDescription = { __html: offerDescription };
  const affLink = getAffLink(offerShort, casinoLink);

  return (
    <div className="ast-col-lg-3 ast-col-md-6 col-md-6 col-lg-3">
      <div className={"offer offer-" + offerStyle}>
        <div className="offer-long">
          <span
            onClick={() => setShowDescription(!showDescription)}
            className="toggle-offer"
          >
            {showDescription ? "x" : "i"}
          </span>
          <div
            className={
              showDescription
                ? "offer-inner flex v-align show"
                : "offer-inner flex v-align"
            }
          >
            <h4>{offerTitle}</h4>
            <div dangerouslySetInnerHTML={markupOfferDescription}></div>
          </div>
        </div>

        <div className="offer-top-heading">
          <h4>{headerText}</h4>
        </div>

        <div className="offer-content">
          <h3>
            <Link href={affLink}>{offerTitle}</Link>
          </h3>

          <div className="list-bullets text-start">
            {offerList?.map((item: any, index: number) => (
              <div key={index} className="flex items-center flex-nowrap gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11.942"
                    height="11.942"
                    viewBox="0 0 11.942 11.942"
                  >
                    <path
                      d="M43.971,97a5.971,5.971,0,1,0,5.971,5.971A5.971,5.971,0,0,0,43.971,97Zm-.153,8.322-1.089,1.09-1.089-1.09-2.179-2.179,1.089-1.089,2.179,2.179,4.359-4.359,1.089,1.09Z"
                      transform="translate(-38 -97)"
                      fill="#3ccb09"
                    ></path>
                  </svg>
                </span>
                {item.elementLista}
              </div>
            ))}
          </div>
        </div>

        <div className="button-wrapper">
          <Link href={affLink} className="button button-green">
            Revendica oferta
          </Link>
        </div>
      </div>
    </div>
  );
};
