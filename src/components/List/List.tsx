import { relativeToAbsoluteUrls } from "@/lib/relativeToAbsoluteUrls";

export const List = ({ isOrdered = false, items = [] }: any) => {
  return isOrdered ? (
    <ol>
      {items.map((item: any, index: number) => (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: relativeToAbsoluteUrls(item.attributes.content),
          }}
        ></li>
      ))}
    </ol>
  ) : (
    <ul>
      {items.map((item: any, index: number) => (
        <li
          key={index}
          dangerouslySetInnerHTML={{
            __html: relativeToAbsoluteUrls(item.attributes.content),
          }}
        ></li>
      ))}
    </ul>
  );
};
