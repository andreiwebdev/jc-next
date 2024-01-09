import { YoastFaqItem } from ".";

export const YoastFaq = ({ questions }: any) => {
  return (
    <div className="schema-faq wp-block-yoast-faq-block">
      {questions.map((item: any) => (
        <YoastFaqItem
          key={item.id}
          question={item.jsonQuestion}
          answer={item.jsonAnswer}
        />
      ))}
    </div>
  );
};
