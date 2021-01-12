import dynamic from "next/dynamic";
import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import { AiOutlineCheck, AiOutlineArrowLeft } from "react-icons/ai";
import { isMobile } from "react-device-detect";
import Reveal from "react-reveal/Reveal";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import RowBackground from "../../../components/RowBackground/RowBackground";
import CTA from "../../../components/CTA/CTA";

const PieChart = dynamic(() =>
  import("react-minimal-pie-chart").then((mod) => mod.PieChart)
);

dynamic(() => import("../../../styles/service.scss"));

const WebDevelopment = () => {
  let seoTitle =
    "Web Development | Web Developer Central Coast, Sydney | Good Program";
  let seoDesc =
    "Simple solutions to complex problems. Good Program provides clients with stunning websites and interfaces at affordable rates.";

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/web-development",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url:
                "https://goodprogram.com.au/img/services/dprint-mockup.png",
              width: 850,
              height: 530,
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
        <section className="page__row" style={{ padding: "0rem" }}>
          <div className="page__rowContent">
            <Reveal
              className="hidden"
              effect="fadeInDown"
              delay={isMobile ? 150 : 300}
            >
              <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Powerful Web Development
                    </h1>
            </Reveal>
            <Reveal
              className="hidden"
              effect="fadeInRight"
              delay={isMobile ? 150 : 300}
            >
              <p>
                Alongside forward-thinking front-end web design, Good
                Program provides full-stack website/web application
                development. This allows us to give individual clients and
                businesses entirely custom websites, API's and unique
                online tools for their users or themselves. As a service
                we offer our clients database-backed systems that are fast
                and user-friendly.
                    </p>
            </Reveal>
          </div>
        </section>
        <section className="page__row" style={{ padding: "0rem" }}>
          <RowBackground
            bgImgSrc="/img/services/webdevelopment.jpg"
            bgImgAlt="test"
            bgColor="white"
            bgImgOpacity={0.25}
            bgGradient="ttb"
            rotation={360}
            parallax={30}
          />
          <div className="page__rowContent">
            <div className="grid" style={{ padding: "0.5rem" }}>
              <div className="grid__col--two-third">
                <Reveal
                  className="hidden"
                  effect="fadeInDown"
                  delay={isMobile ? 450 : 600}
                >
                  <h3 style={{ marginBottom: "2rem" }}>Experience Speaks</h3>
                </Reveal>
                <Reveal
                  className="hidden"
                  effect="fadeInRight"
                  delay={isMobile ? 450 : 600}
                >
                  <p>
                    Good Program has helped businesses across the board
                    develop quality websites that represent who they are.
                    </p>
                </Reveal>
              </div>

              <div className="grid__col--third">
                <Reveal
                  className="hidden"
                  effect="fadeInDown"
                  delay={isMobile ? 450 : 600}
                >
                  <h3 style={{ marginBottom: "2rem" }}>
                    We offer solutions:
                    </h3>
                </Reveal>
                <Reveal
                  top
                  className="hidden"
                  cascade
                  duration={150}
                  delay={isMobile ? 450 : 1000}
                >
                  <ul className="offerList">
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">that are scalable</p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">
                        that are cost effective
                        </p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">
                        tailored to your requirements
                        </p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">
                        implemented using modern techniques
                        </p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">
                        follow best practice design
                        </p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">
                        are as simple or as complex as you need
                        </p>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="page__row" style={{ padding: "0rem" }}>
          <div className="page__rowContent">
            <div className="grid">
              <div className="grid__col--half" style={{ padding: "0.5rem" }}>
                <h2 style={{ textAlign: "center" }}>Custom Development</h2>
              </div>
              <div className="grid__col--half" style={{ padding: "0.5rem" }}>
                <h2 style={{ textAlign: "center" }}>
                  CMS-Based Development{" "}
                </h2>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default WebDevelopment;
