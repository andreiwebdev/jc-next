"use client";

import { relativeToAbsoluteUrls } from "@/lib/relativeToAbsoluteUrls";
import { useState } from "react";

export const YoastFaqItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="schema-faq-section" id="faq-question-1584001910513">
      <strong
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen
            ? "schema-faq-question bg-white !text-[#444444]"
            : "schema-faq-question"
        }
        dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(question) }}
      ></strong>
      <span className={isOpen ? "faq-toggle !text-[#1D84D4]" : "faq-toggle"}>
        {isOpen ? "-" : "+"}
      </span>
      {isOpen && (
        <p
          style={{ display: "block" }}
          className="schema-faq-answer"
          dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(answer) }}
        ></p>
      )}
    </div>
  );
};
