export const getTextAlign = (textAlign = "left") => {
  const textAlignMap: { [key: string]: string } = {
    left: "text-left",
    right: "text-right",
    center: "text-center",
  };

  return `${textAlignMap[textAlign] || ""}`;
};
