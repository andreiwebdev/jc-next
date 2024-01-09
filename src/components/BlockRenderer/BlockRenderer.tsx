import Image from "next/image";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { List } from "../List";
import { YoastFaq } from "../YoastFaq";
import { MoreInfoToggle } from "../CustomBlocks";

export const BlockRenderer = ({ blocks }: any) => {
  return blocks.map((block: any) => {
    switch (block.name) {
      case "core/heading": {
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
          />
        );
      }
      case "core/paragraph": {
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
          />
        );
      }
      case "core/list": {
        return (
          <List
            key={block.id}
            isOrdered={block.attributes?.ordered || false}
            items={block.innerBlocks}
          />
        );
      }
      case "core/image": {
        return (
          block.attributes?.url && (
            <Image
              key={block.id}
              src={block.attributes.url}
              height={block.attributes.height}
              width={block.attributes.width}
              alt={block.attributes.alt || ""}
            />
          )
        );
      }
      case "yoast/faq-block": {
        return (
          <YoastFaq key={block.id} questions={block.attributes.questions} />
        );
      }
      case "acf/moreinfotoggle": {
        return (
          <MoreInfoToggle
            key={block.id}
            title={block.attributes.data["more_info_text"]}
            content={block.attributes.data["more_info_content"]}
            blockType={block.attributes.data["more_info_type"]}
          />
        );
      }
      default:
        return null;
    }
  });
};
