import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const ThirdPartyHosting = () => {
  let seoTitle =
    "Third Party Hosting | BYO Server Set-up and Maintenance | Good Program";
  let seoDesc =
    "Configure your website on your web-host of choice. Web hosting setup help professional Gosford, Central Coast, Sydney.";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/third-party-hosting",
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
                Third Party Hosting
              </h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={150}>
              <p>More about this soon...</p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default ThirdPartyHosting;
