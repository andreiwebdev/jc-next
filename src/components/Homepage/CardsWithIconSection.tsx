import { CardWithIcon } from "../common";

export const CardsWithIconSection = ({ card1, card2, card3, card4 }: any) => {
  const cards = [
    {
      text: card1.text,
      imageUrl: card1.imagine.sourceUrl,
    },
    {
      text: card2.text,
      imageUrl: card2.imagine.sourceUrl,
    },
    {
      text: card3.text,
      imageUrl: card3.imagine.sourceUrl,
    },
    {
      text: card4.text,
      imageUrl: card4.imagine.sourceUrl,
    },
  ];
  return (
    <div className="ast-row m5row row">
      {cards.map((card: any, index: number) => (
        <CardWithIcon key={index} text={card.text} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};
