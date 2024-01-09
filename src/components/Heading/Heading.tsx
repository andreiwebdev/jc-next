import { getTextAlign } from "@/lib/fonts";
import React from "react";

export const Heading = ({ textAlign, content, level }: any) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `${getTextAlign(textAlign)}`,
  });
  return tag;
};
