import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const ECommerce = () => {
  let seoTitle =
    "E-Commerce Solutions | Scalable Storefronts That Sell | Good Program";
  let seoDesc =
    "Woocommerce, wordpress development help, Shopify setup help & Custom E-commerce systems development in Gosford, Central Coast & Sydney. Start selling now!";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/e-commerce-systems",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/OGIMAGE/e-commerce.png",
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
                E-Commerce Systems Development
              </h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={150}>
              <p>
                For businesses that offer products and goods, offering online
                stores to customers has become crucial.
              </p>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={300}>
              <p>
                Good Program can offer a range of options when it comes to
                getting your store online. We deal with everything from
                assisting setup on external platforms such as Shopify, to
                integrating them as part of your existing website, to
                compressing your product images to web standards.
              </p>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={450}>
              <p>
                We will work with you to find out what your needs are and how we
                can bring them to fruition. We have a range of services
                available around E-commerce, so send us a message with your idea
                and we'll give you a quote!
              </p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default ECommerce;
