import { ArticleCard } from "@/components/Cards";
import { Pagination, Search } from "@/components/Search";
import { handleSearch } from "@/lib/search";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { postsData, totalPages } = (await handleSearch(
    query,
    currentPage
  )) as {
    postsData: any;
    totalResults: number;
    totalPages: number;
  };

  return (
    <div id="content" className="site-content">
      <div id="primary" className="content-area primary">
        <div className="ast-container container">
          {/* search */}
          <h2>Cauta din nou:</h2>
          <p>Tasteaza in campul de mai jos pentru a initia o noua cautare</p>
          <Search placeholder="Cauta" />
          {/* search results */}
          <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
            <div className="posts-loop">
              <div className="ast-row row">
                {postsData?.map((item: any, key: number) => (
                  <ArticleCard
                    key={item.id}
                    postId={item.id}
                    postTitle={item.title}
                    featuredImageId={item._embedded.self[0].featured_media}
                    postLinkWordpress={item.url}
                    postExcerpt={item._embedded.self[0].excerpt.rendered}
                  />
                ))}
              </div>
            </div>
          </Suspense>
          {/* pagination */}
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
