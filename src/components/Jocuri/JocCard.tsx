"use client";

import { fetchRatingForPost, updateRating } from "@/lib/getRating";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../common/StarRating";
import { useEffect, useState } from "react";

export const JocCard = ({
  postID,
  slotName,
  slotUri,
  slotProducer,
  slotProducerUri,
  imageUrl,
  altTextImage,
}: any) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        // Implement fetchRatingForPost to get the latest rating for this post
        const { averageRating, votesRating } = await fetchRatingForPost(postID);

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
    <div className="ast-col-lg-3 ast-col-md-4 ast-col-sm-6 ast-col-xs-6 m5pad col-xs-6 col-sm-6 col-md-4 col-lg-3">
      <div className="slot-item clear">
        <div className="slot-image">
          <Link href={slotUri}>
            <Image src={imageUrl} alt={altTextImage} width={300} height={200} />
          </Link>
          <div className="button-container">
            <Link href={slotUri} className="button button-green">
              Joaca acum
            </Link>
          </div>
        </div>

        <div className="slot-info">
          <div className="game-meta">
            <div className="ast-row row">
              <div className="ast-col-md-5 col-md-5">
                <div className="game-producer">
                  <Link href={slotProducerUri}>{slotProducer}</Link>
                </div>
              </div>
              <div className="ast-col-md-7 col-md-7">
                <div className="game-rating">
                  <StarRating
                    postID={postID}
                    initialRating={currentRating}
                    initialVotes={votes}
                    onRatingSubmit={handleSubmitRating}
                  />
                </div>
              </div>
            </div>
          </div>
          <h4>
            <Link href={slotUri} className="slot-button-archive">
              {slotName}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};
