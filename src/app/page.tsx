import { HeroSection } from "@/components/Hero";
import { getHomepageData } from "../lib/getPage";
import { CardsWithIconSection } from "@/components/Homepage";
import { SectionBgImage, TextHeadingCollapse } from "@/components/common";
import { OffersSectionList } from "@/components/Offers";
import { BlockRenderer } from "@/components/BlockRenderer";
import { JocCard } from "@/components/Jocuri";

export default async function Home() {
  const data = await getHomepageData();

  const sortedCasinos = data.casinos
    .filter((casino: any) => !casino.casinoGeneralFields.disableCasino)
    .sort(
      (a: any, b: any) =>
        parseFloat(b.casinoGeneralFields.rating) -
        parseFloat(a.casinoGeneralFields.rating)
    );

  console.log(data.jocuri);

  return (
    <main id="primary" className="homepage-content-area">
      {/* HERO AREA */}
      <HeroSection
        title={data.hero.pageTitle}
        description={data.hero.pageDescription}
        bgImage={data.homepage.featuredImage.node.sourceUrl}
        latestPosts={data.latestPosts}
      />

      {/* HOMEPAGE ADVANTAGES CARDS */}

      <SectionBgImage
        bgImageUrl={data.homepageAdvantages.backgroundWin.bgImage.sourceUrl}
        bgImageAltText={data.homepageAdvantages.backgroundWin.bgImage.altText}
        bgOverlay={data.homepageAdvantages.backgroundWin.gradient}
        sectionClasses="homepage-win relative"
      >
        <div className="ast-container container">
          <TextHeadingCollapse
            title={data.homepageAdvantages.winTitlu}
            description={data.homepageAdvantages.winText}
            textReadMore={data.homepageAdvantages.textWinReadMore}
          />
          <CardsWithIconSection
            card1={data.homepageAdvantages.card1}
            card2={data.homepageAdvantages.card2}
            card3={data.homepageAdvantages.card3}
            card4={data.homepageAdvantages.card4}
          />
        </div>
      </SectionBgImage>

      {/* HOMEPAGE CASINOS OFFERS */}

      <SectionBgImage
        bgImageUrl={
          data.homepageCazinouri.backgroundCazinouri.pattern.sourceUrl
        }
        bgImageAltText={
          data.homepageCazinouri.backgroundCazinouri.pattern.altText
        }
        bgOverlay={data.homepageCazinouri.backgroundCazinouri.gradient}
        sectionClasses="homepage-casinos relative"
        pattern={true}
        buttonText={data.homepageCazinouri.casinoSectionButon.textButon}
        buttonUri={data.homepageCazinouri.casinoSectionButon.link.uri}
      >
        <div className="ast-container container">
          <TextHeadingCollapse
            title={data.homepageCazinouri.casinoTitlu}
            description={data.homepageCazinouri.casinoText}
            textReadMore={data.homepageCazinouri.textCasinoReadMore}
          />
          <OffersSectionList
            casinos={sortedCasinos}
            casinosMaxLength={data.homepageCazinouri.numarCazinouri}
            offerType={data.homepageCazinouri.offerType}
          />
        </div>
      </SectionBgImage>

      <h1 className="text-center my-5">👷🏻‍♂️ Some other sections 👷🏻‍♂️</h1>

      {/* HOMEPAGE JOCURI SLOTS AREA */}
      <SectionBgImage
        bgImageUrl={
          data.homepageSlots.backgroundSlots.bgImage?.sourceUrl ||
          data.homepageSlots.backgroundSlots.pattern?.sourceUrl
        }
        bgImageAltText={
          data.homepageSlots.backgroundSlots.bgImage?.altText ||
          data.homepageSlots.backgroundSlots.pattern?.altText
        }
        bgOverlay={data.homepageSlots.backgroundSlots.gradient}
        sectionClasses="homepage-slots relative"
        pattern={true}
        buttonText={data.homepageSlots.slotsSectionButon.textButon}
        buttonUri={data.homepageSlots.slotsSectionButon.link.uri}
      >
        <div className="ast-container container">
          <TextHeadingCollapse
            title={data.homepageSlots.slotsTitlu}
            description={data.homepageSlots.slotsText}
            textReadMore={data.homepageSlots.textSlotsReadMore}
          />
          <div className="featured-slots row">
            {data.jocuri.map((slot: any) => (
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
            <BlockRenderer blocks={data.blocks} />
          </div>
        </div>
      </section>
      {/* END CONTENT */}
    </main>
  );
}
