"use client";

import { getAffLink } from "@/lib/offers";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const OfferList = ({
  casinoTitle,
  casinoLogoUrl,
  casinoLogoAltText,
  rating,
  offerTitle,
  offerList,
  offerDescription,
  casinoReviewUri,
  offerShort,
  casinoLink,
}: any) => {
  const [openDesc, setOpenDesc] = useState(false);
  const markupOfferDescription = { __html: offerDescription };
  const affLink = getAffLink(offerShort, casinoLink);

  return (
    <div className="ast-col-md-12">
      <div className="casino-item ast-col-md-12 style_1 white">
        <div className="ast-row px-4">
          <div className="ast-flex v-align row">
            <div className="counter counter-desktop"></div>

            <div className="offer-long">
              <span
                onClick={() => setOpenDesc(!openDesc)}
                className="toggle-offer"
              >
                i
              </span>
              <div className={openDesc ? "offer-inner show" : "offer-inner"}>
                <div dangerouslySetInnerHTML={markupOfferDescription}></div>
              </div>
            </div>

            <div className="ast-col-md-3 ast-col-xs-12 col-12 col-md-3">
              <Link href={casinoReviewUri} className="flex justify-center">
                <Image
                  src={casinoLogoUrl}
                  alt={casinoLogoAltText}
                  width={200}
                  height={80}
                />
              </Link>
              <div className="counter counter-mobile"></div>
            </div>

            <div className="vlines"></div>
            <div className="ast-col-md-1 ast-col-xs-12 col-12 col-md-1">
              <div className="casino-rating">
                {rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.159"
                  height="19.173"
                  viewBox="0 0 20.159 19.173"
                >
                  <defs>
                    <linearGradient
                      id="a"
                      x1="0.151"
                      y1="0.223"
                      x2="0.849"
                      y2="0.958"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#ffe910"></stop>
                      <stop offset="1" stopColor="#ffb115"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M389.607,170.368l3.115,6.311,6.965,1.012-5.04,4.913,1.19,6.937-6.23-3.275-6.229,3.275,1.19-6.937-5.04-4.913,6.965-1.012Z"
                    transform="translate(-379.528 -170.368)"
                    fill="url(#a)"
                  ></path>
                </svg>{" "}
              </div>
            </div>
            <div className="vlines"></div>
            <div className="ast-col-md-5 ast-col-xs-12 col-12 col-md-5">
              <div className="item-content">
                <h2>{offerTitle}</h2>
                <div className="list-bullets">
                  {offerList.map((item: any, index: number) => (
                    <div key={index} className="flex items-center">
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
            </div>
            <div className="vlines"></div>
            <div className="ast-col-md-3 ast-col-xs-12 col-12 col-md-3">
              <div className="button-wrapper">
                <Link className="button button-green brad10" href={affLink}>
                  Ia bonusul!
                </Link>
                <Link className="casino-review-link" href={casinoReviewUri}>
                  Recenzie {casinoTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
