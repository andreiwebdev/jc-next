import Image from "next/image";
import React from "react";
import { HeroPost } from ".";

export const HeroSection = ({
  title,
  description,
  bgImage,
  latestPosts,
}: any) => {
  const markup = { __html: description };

  return (
    <section className="homepage-hero relative">
      <Image src={bgImage} alt="Hero Image" fill className="object-cover" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={markup}></div>
          </div>
          <div className="col-md-6">
            {latestPosts.map((post: any) => (
              <HeroPost
                key={post.id}
                title={post.title}
                uri={post.uri}
                dateGmt={post.dateGmt}
                sourceUrl={post.featuredImage.node.sourceUrl}
              />
            ))}
            <div className="hero-blog-link">
              <a href="#">Descoperă toate noutățile!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
