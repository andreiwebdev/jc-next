"use client";

import { relativeToAbsoluteUrls } from "@/lib/relativeToAbsoluteUrls";
import { useState } from "react";

export const MoreInfoToggle = ({ title, content, blockType }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={"casino-toolbox acf-more-info has-icon mb-4 type-" + blockType}
    >
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="toggle-link button collapsed flex items-center justify-between gap-3 w-full"
        data-toggle="collapse"
        role="button"
        aria-expanded="false"
        aria-controls="collapse-acf-more-info-block_b9a1e11a1747ad132a82e9a34654dac0"
      >
        {title}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-down"
          className={
            isCollapsed
              ? "svg-inline--fa fa-chevron-down fa-w-14 w-4 rotate-180"
              : "svg-inline--fa fa-chevron-down fa-w-14 w-4"
          }
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          ></path>
        </svg>
      </div>

      <div
        className={isCollapsed ? "show" : "collapse"}
        id="collapse-acf-more-info-block_b9a1e11a1747ad132a82e9a34654dac0"
      >
        <div
          className="card card-body border-0"
          dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
        ></div>
      </div>
    </div>
  );
};
