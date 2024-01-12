"use client";

import Image from "next/image";
import Link from "next/link";

export const SectionBgImage = ({
  children,
  bgImageUrl,
  bgImageAltText,
  overlayExtraCss,
  sectionClasses,
  pattern = false,
  buttonText = false,
  buttonUri = false,
}: any) => {
  return (
    <section className={sectionClasses}>
      <Image
        src={bgImageUrl}
        alt={bgImageAltText}
        fill
        className={
          pattern
            ? "absolute object-cover top-0 left-0 z-10"
            : "absolute object-cover top-0 left-0"
        }
      />
      {children}

      {buttonText && buttonUri ? (
        <div className="section-button z-20 relative text-white">
          <Link
            href={buttonUri}
            className="button brad25 hover:text-white underline"
          >
            {buttonText}
          </Link>
        </div>
      ) : (
        ""
      )}

      <div style={overlayExtraCss} className="overlay"></div>
    </section>
  );
};
