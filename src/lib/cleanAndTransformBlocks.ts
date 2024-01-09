import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON: any) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));

  const assignId = (b: any) => {
    b.forEach((block: any) => {
      block.id = uuid();
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(blocks);

  return blocks;
};
