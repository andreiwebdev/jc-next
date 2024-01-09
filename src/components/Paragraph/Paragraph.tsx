import { getTextAlign } from "@/lib/fonts";
import { relativeToAbsoluteUrls } from "@/lib/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign, content }: any) => {
  return (
    <p
      className={`${getTextAlign(textAlign)}`}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
