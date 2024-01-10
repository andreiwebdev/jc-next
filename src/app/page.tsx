import { HeroSection } from "@/components/Hero";
import { getHomepageData } from "../lib/getHomepage";
import { CardsWithIconSection } from "@/components/Homepage";
import { SectionBgImage, TextHeadingCollapse } from "@/components/common";
import { OffersSectionList } from "@/components/Offers";
import { BlockRenderer } from "@/components/BlockRenderer";
import { JocCard } from "@/components/Jocuri";

export default async function Home() {
  const {
    casinos,
    hero,
    homepage,
    latestPosts,
    homepageAdvantages,
    homepageCazinouri,
    homepageSlots,
    jocuri,
    blocks,
  } = await getHomepageData();

  const sortedCasinos = casinos
    .filter((casino: any) => !casino.casinoGeneralFields.disableCasino)
    .sort(
      (a: any, b: any) =>
        parseFloat(b.casinoGeneralFields.rating) -
        parseFloat(a.casinoGeneralFields.rating)
    );

  return (
    <main id="primary" className="homepage-content-area">
      {/* HERO AREA */}
      <HeroSection
        title={hero.pageTitle}
        description={hero.pageDescription}
        bgImage={homepage.featuredImage.node.sourceUrl}
        latestPosts={latestPosts}
      />

      {/* HOMEPAGE ADVANTAGES CARDS */}

      <SectionBgImage
        bgImageUrl={homepageAdvantages.backgroundWin.bgImage.sourceUrl}
        bgImageAltText={homepageAdvantages.backgroundWin.bgImage.altText}
        bgOverlay={homepageAdvantages.backgroundWin.gradient}
        sectionClasses="homepage-win relative"
      >
        <div className="ast-container container">
          <TextHeadingCollapse
            title={homepageAdvantages.winTitlu}
            description={homepageAdvantages.winText}
            textReadMore={homepageAdvantages.textWinReadMore}
          />
          <CardsWithIconSection
            card1={homepageAdvantages.card1}
            card2={homepageAdvantages.card2}
            card3={homepageAdvantages.card3}
            card4={homepageAdvantages.card4}
          />
        </div>
      </SectionBgImage>

      {/* HOMEPAGE CASINOS OFFERS */}

      <SectionBgImage
        bgImageUrl={homepageCazinouri.backgroundCazinouri.pattern.sourceUrl}
        bgImageAltText={homepageCazinouri.backgroundCazinouri.pattern.altText}
        bgOverlay={homepageCazinouri.backgroundCazinouri.gradient}
        sectionClasses="homepage-casinos relative"
        pattern={true}
        buttonText={homepageCazinouri.casinoSectionButon.textButon}
        buttonUri={homepageCazinouri.casinoSectionButon.link.uri}
      >
        <div className="ast-container container">
          <TextHeadingCollapse
            title={homepageCazinouri.casinoTitlu}
            description={homepageCazinouri.casinoText}
            textReadMore={homepageCazinouri.textCasinoReadMore}
          />
          <OffersSectionList
            casinos={sortedCasinos}
            casinosMaxLength={homepageCazinouri.numarCazinouri}
            offerType={homepageCazinouri.offerType}
          />
        </div>
      </SectionBgImage>

      <h1 className="text-center my-5">👷🏻‍♂️ Some other sections 👷🏻‍♂️</h1>

      {/* HOMEPAGE JOCURI SLOTS AREA */}
      <SectionBgImage
        bgImageUrl={
          homepageSlots.backgroundSlots.bgImage?.sourceUrl ||
          homepageSlots.backgroundSlots.pattern?.sourceUrl
        }
        bgImageAltText={
          homepageSlots.backgroundSlots.bgImage?.altText ||
          homepageSlots.backgroundSlots.pattern?.altText
        }
        bgOverlay={homepageSlots.backgroundSlots.gradient}
        sectionClasses="homepage-slots relative"
        pattern={true}
        buttonText={homepageSlots.slotsSectionButon.textButon}
        buttonUri={homepageSlots.slotsSectionButon.link.uri}
      >
        <div className="ast-container container">
          <TextHeadingCollapse
            title={homepageSlots.slotsTitlu}
            description={homepageSlots.slotsText}
            textReadMore={homepageSlots.textSlotsReadMore}
          />
          <div className="featured-slots row">
            {jocuri.map((slot: any) => (
              <JocCard
                key={slot.databaseId}
                postID={slot.databaseId}
                slotName={slot.title}
                slotUri={slot.uri}
                slotProducer={slot.producatoriJocuri.nodes[0].name}
                slotProducerUri={slot.producatoriJocuri.nodes[0].uri}
                imageUrl={slot.featuredImage.node.sourceUrl}
                altTextImage={slot.featuredImage.node.altText}
              />
            ))}
          </div>
        </div>
      </SectionBgImage>

      {/* START CONTENT */}
      <section className="homepage-content">
        <div className="casino-content page-content bottom-content">
          <div className="ast-container container">
            <BlockRenderer blocks={blocks} />
          </div>
        </div>
      </section>
      {/* END CONTENT */}
    </main>
  );
}
