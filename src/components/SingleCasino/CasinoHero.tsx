"use client";

import Image from "next/image";
import StarRating from "../common/StarRating";
import { useEffect, useState } from "react";
import { fetchRatingForPost, updateRating } from "@/lib/getRating";

export const CasinoHero = ({
  logoUrl,
  logoAltText,
  pageTitle,
  shortIntro,
  postID,
}: any) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [votes, setVotes] = useState(0);
  const markupShortIntro = { __html: shortIntro };

  useEffect(() => {
    const fetchRating = async () => {
      try {
        // Implement fetchRatingForPost to get the latest rating for this post
        const { averageRating, votesRating } = await fetchRatingForPost(
          postID,
          "cazino"
        );

        setCurrentRating(averageRating);
        setVotes(votesRating);
      } catch (error) {
        console.error("Error fetching rating:", error);
      }
    };

    fetchRating();
  }, [postID]);

  const handleSubmitRating = async (newRating: any) => {
    const result = await updateRating(postID, newRating);

    console.log(`Submitting new rating for post ${postID}: ${newRating}`);
    console.log(`Received response: `, result);

    if (result.updateRating.success) {
      setCurrentRating(result.updateRating.averageRating);
    }
  };

  return (
    <div className="casino-single-item clear">
      <div className="casino-header">
        <div className="ast-container container">
          <div className="ast-row row">
            <div className="ast-col-md-3 col-md-3">
              <div className="post-thumbnail flex flex-col items-start">
                <Image
                  className="mb-4"
                  src={logoUrl}
                  alt={logoAltText}
                  width={198}
                  height={95}
                />
                <StarRating
                  postID={postID}
                  initialRating={currentRating}
                  initialVotes={votes}
                  onRatingSubmit={handleSubmitRating}
                />
              </div>
            </div>
            <div className="ast-col-md-9 col-md-9">
              <h1>{pageTitle}</h1>

              <div dangerouslySetInnerHTML={markupShortIntro}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
