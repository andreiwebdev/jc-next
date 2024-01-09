"use client";

import { useState } from "react";

export const TextHeadingCollapse = ({
  title,
  description,
  textReadMore,
}: any) => {
  const [readMore, setReadMore] = useState(false);
  const markupReadMore = { __html: textReadMore };
  const markupDescription = { __html: description };
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={markupDescription}></div>

      {markupReadMore && (
        <div
          onClick={() => setReadMore(!readMore)}
          className="casino-toolbox acf-more-info has-icon type-text template-element"
        >
          <div
            className="toggle-link collapsed flex items-center gap-4 mb-3 underline"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="text-win"
          >
            Mai mult info{" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="chevron-down"
              className="svg-inline--fa fa-chevron-down fa-w-14 max-w-[14px]"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>{" "}
          </div>

          {readMore && (
            <div id="text-win">
              <div dangerouslySetInnerHTML={markupReadMore}></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
