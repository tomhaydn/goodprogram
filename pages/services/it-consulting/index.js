import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const ITConsulting = () => {
  let seoTitle =
    "IT Consulting | Get Professional Web Advice | Low Rates | Good Program";
  let seoDesc =
    "Fixed rate rofessional web consultants in Gosford, Central Coast and Sydney. Discover ways to improve your online business or just ask us a question.";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/it-consulting",
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
                General IT Consulting
              </h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={150}>
              <p>
                As the web development landscape becomes more and more populated
                by DIY IT solutions, it can be tempting to avoid professinal
                development all-together. Sometimes however it can be hard to
                face problems alone.
              </p>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={300}>
              <p>
                As a service Good Program offers over-the-phone, email or direct
                IT Consulting at a fixed hourly rate. We can help with issues
                across the board.
              </p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default ITConsulting;
