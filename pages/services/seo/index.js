import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const SEO = () => {
  let seoTitle =
    "SEO & SEM | Packaged Solutions That Increase Traffic | Good Program";
  let seoDesc =
    "SEO specialist Gosford, Central Coast and Sydney. Rank your website higher. Packaged SEO solutions to boost website traffic. Search Engine Optimization.";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/seo",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/services/services.png",
              width: 1200,
              height: 1200,
              alt:
                "Good Program Sydney/Central Coast web design, development hosting and seo",
            },
          ],
        }}
      />
      <div className="page__content">
        <section className="page__row" style={{ padding: "0rem" }}>
          <div className="page__rowContent" style={{ padding: "0rem" }}>
            <BlocksButton
              buttonType="sleek"
              text={
                <span>
                  <AiOutlineArrowLeft />
                  &nbsp; Back to Services
                </span>
              }
              link="/services"
            />
          </div>
        </section>

        <section className="page__row" style={{ paddingTop: "0rem" }}>
          <div className="page__rowContent">
            <Reveal className="hidden" effect="fadeInDown" delay={150}>
              <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                SEO (Search Engine Optimization)
              </h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={150}>
              <p>
                In an extremely competative online environment, SEO (Search
                Engine Optimization) becomes one of the most crucial elements in
                successful web-presence. Due to its complex nature, realising
                quality SEO becomes a critical focus in all stages of any
                projects we take on; from adhering to best practises in
                development, to final optimization.
              </p>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={300}>
              <p>
                Separate to this Good Program can offer advanced SEO, including
                managing Google's My Business, rich links and indexing, all with
                one end goal: search relevance.
              </p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default SEO;
