import Image from "next/image";

export const CardWithIcon = ({ text, imageUrl }: any) => {
  return (
    <div className="ast-col-lg-3 ast-col-md-4 ast-col-sm-6 ast-col-xs-6 mb-5 pad col-xs-6 col-md-4 col-lg-3">
      <div className="win-card h-full">
        <Image
          className="mx-auto max-h-[110px] object-contain"
          src={imageUrl}
          alt={text}
          width={80}
          height={80}
          layout="responsive"
        />
        <h4>{text}</h4>
      </div>
    </div>
  );
};
