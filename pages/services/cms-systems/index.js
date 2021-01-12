import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const CMSSystems = () => {
  let seoTitle =
    "Content Management Systems (CMS) | Effective Solutions | Good Program";
  let seoDesc =
    "Custom software development, CMS systems development and web applications development in gosford, Central Coast & Sydney. Professional software engineer.";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/cms-systems",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/OGIMAGE/cms.png",
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
                CMS (Content Management Systems) Development
              </h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={150}>
              <p>
                At Good Program we offer complex tailor made CMS (Content
                Management Systems) with full database integration and web
                access each with an interface as easy to use as it is vibrant.
                Examples of CMS systems include blogs, image sharing platforms,
                invoicing systems and much more; the sky is the limit.
              </p>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={300}>
              <p>
                Because of the complex nature of systems like these, it is best
                to contact us with your idea and see what we can do. We approach
                every request professionally and strive to deliver a selection
                of methods/ideas before implementation.
              </p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default CMSSystems;
