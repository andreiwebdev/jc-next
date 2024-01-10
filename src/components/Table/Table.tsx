// Table.js
import { relativeToAbsoluteUrls } from "@/lib/relativeToAbsoluteUrls";

export const Table = ({ htmlContent = "" }: any) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: relativeToAbsoluteUrls(htmlContent),
      }}
    ></div>
  );
};
