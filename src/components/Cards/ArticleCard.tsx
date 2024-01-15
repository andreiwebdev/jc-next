import { relativeToAbsoluteUrls } from "@/lib/relativeToAbsoluteUrls";
import { fetchFeaturedImage, getTaxonomyDetailsForPost } from "@/lib/search";
import Image from "next/image";
import Link from "next/link";

export const ArticleCard = async ({
  postId,
  postLinkWordpress,
  postTitle,
  featuredImageId,
  postExcerpt,
}: any) => {
  const imageData = await fetchFeaturedImage(featuredImageId);
  const taxonomyData = await getTaxonomyDetailsForPost(postId);
  const postUrl = relativeToAbsoluteUrls(postLinkWordpress);

  return (
    <article className="post type-post status-publish format-standard has-post-thumbnail hentry category-articole ast-article-post col-md-4 col-sm-6">
      <div className="ast-post-format- blog-layout-1">
        <div className="post-content">
          <div className="ast-blog-featured-section post-thumb">
            <div className="post-thumb-img-content post-thumb">
              <Link href={postUrl}>
                {imageData && (
                  <Image
                    src={imageData.source_url}
                    width={imageData.media_details.width}
                    height={imageData.media_details.height}
                    alt={imageData.alt_text}
                  />
                )}
              </Link>
            </div>
          </div>
          <header className="entry-header">
            <h2 className="entry-title">
              <Link href={postUrl}>{postTitle}</Link>
            </h2>
            <div className="entry-meta">
              <span className="cat-links flex gap-3">
                {taxonomyData &&
                  taxonomyData.map(
                    (tax: { id: number; name: string; slug: string }) => (
                      <Link key={tax.id} href={tax.slug}>
                        {tax.name}
                      </Link>
                    )
                  )}
              </span>
            </div>
          </header>
          <div className="entry-content clear">
            <div
              className="post-excerpt"
              dangerouslySetInnerHTML={{ __html: postExcerpt }}
            ></div>
            <p className="read-more">
              <Link className="button" href={postUrl}>
                Read More »
              </Link>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
