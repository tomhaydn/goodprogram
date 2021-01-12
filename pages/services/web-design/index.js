import dynamic from "next/dynamic";
import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import {
  AiOutlineCheck,
  AiOutlineArrowLeft,
  AiOutlineHtml5,
} from "react-icons/ai";
import {
  FaWordpressSimple,
  FaTools,
  FaUserTie,
  FaLevelUpAlt,
} from "react-icons/fa";
import { DiJavascript1, DiJqueryLogo, DiReact, DiCss3 } from "react-icons/di";
import { MdBusiness, MdRestaurant } from "react-icons/md";
import { isMobile } from "react-device-detect";
import Reveal from "react-reveal/Reveal";
import CTA from "../../../components/CTA/CTA";
import "./index.scss";
import TimeLine from "../../../components/TimeLine/TimeLine";
import RowBackground from "../../../components/RowBackground/RowBackground";
import { Parallax } from "react-scroll-parallax";
import PricingTable from "../../../components/PricingTable/PricingTable";

const PieChart = dynamic(() =>
  import("react-minimal-pie-chart").then((mod) => mod.PieChart)
);

dynamic(() => import("../../../styles/service.scss"));

const comparisonItems = {
  left: [
    {
      text:
        "Jack requests a quote on a 5 page wordpress website for a business",
    },
    {
      text:
        "We discuss and extract more specific requirements and suggest the best way forward. We also present a detailed scope of work, in-depth pricing breakdown and any additional info needed",
    },
    { text: "Jack has a better idea of what is needed and puts us to work" },
    {
      text:
        "We workshop the design and deliver when the site revisions match Jack's grand image",
    },
  ],
  right: [
    {
      text:
        "Jill requests a quote on a Next.js front-end application and sends detailed brand guidelines as well as a comprehensive project brief.",
    },
    {
      text:
        "We send a detailed scope of work, in-depth pricing breakdown and any neccessary additional information",
    },
    { text: "Jill approves the scope and pricing and we begin work" },
    {
      text:
        "When the requirements have been met Jill and us organise a deliverable handover and the project is complete.",
    },
  ],
};

const WebDesign = () => {
  let seoTitle =
    "Web Design | Professional Web Designer Central Coast | Good Program";
  let seoDesc =
    "Need Web Design on the Central Coast or Sydney? Contact an experienced Web Designer for professional web design in Gosford, Erina and Tuggerah.";

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/web-design",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/OGIMAGE/webdesign.png",
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
            <Reveal
              className="hidden"
              effect="fadeInDown"
              delay={isMobile ? 150 : 300}
            >
              <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Professional Web Design
              </h1>
            </Reveal>
            <Reveal
              className="hidden"
              effect="fadeInRight"
              delay={isMobile ? 150 : 300}
            >
              <p>
                By using our advanced knowledge of the latest front-end design
                languages and frameworks alongside an un-matched attention to
                detail, we provide web design solutions that look as good as
                they feel. Whether you want to overhaul your existing website,
                adjust a colour on your WordPress site, or want a
                professionally-designed UX built from the ground up, Good
                Program will provide a design solution that's fast, modern and
                above all, responsive.
              </p>
            </Reveal>
          </div>
        </section>
        <section className="page__row" style={{ backgroundColor: "#f2f2f2" }}>
          <RowBackground
            bgImgSrc="/img/texture.png"
            bgImgAlt="test"
            bgColor="white"
            bgImgOpacity={0.5}
            bgGradient="ttb"
            rotation={360}
            parallax={30}
          />
          <div className="page__rowContent">
            <div className="grid">
              <div className="grid__col--half">
                <figure style={{ width: "100%", padding: "1rem" }}>
                  <Reveal
                    className="hidden"
                    effect="fadeIn"
                    delay={isMobile ? 300 : 450}
                  >
                    <Parallax y={[-30, 30]}>
                      <img
                        src="/img/services/dprint-mockup.png"
                        alt="sydney central coast web design"
                        style={{
                          width: "100%",
                          paddingTop: "1rem",
                          paddingBottom: "1rem",
                        }}
                      />
                    </Parallax>
                  </Reveal>
                </figure>
              </div>
              <div className="grid__col--half" style={{ padding: "0.5rem" }}>
                <Parallax y={[30, -30]}>
                  <Reveal
                    className="hidden"
                    effect="fadeInDown"
                    delay={isMobile ? 450 : 600}
                  >
                    <h2 style={{ marginBottom: "2rem" }}>
                      We offer web design that is:
                    </h2>
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
                        <p className="offerList__text">Fast and effective</p>
                      </li>
                      <li className="offerList__item">
                        <AiOutlineCheck className="offerList__icon" />
                        <p className="offerList__text">Responsive guranteed</p>
                      </li>
                      <li className="offerList__item">
                        <AiOutlineCheck className="offerList__icon" />
                        <p className="offerList__text">
                          SEO oriented to ensure your site stays on top
                        </p>
                      </li>
                      <li className="offerList__item">
                        <AiOutlineCheck className="offerList__icon" />
                        <p className="offerList__text">
                          Wordpress, Shopify or custom coded from the ground up
                        </p>
                      </li>
                      <li className="offerList__item">
                        <AiOutlineCheck className="offerList__icon" />
                        <p className="offerList__text">
                          Built with best practice
                        </p>
                      </li>
                      <li className="offerList__item">
                        <AiOutlineCheck className="offerList__icon" />
                        <p className="offerList__text">
                          Developed using modern web design techniques
                        </p>
                      </li>
                    </ul>
                  </Reveal>
                </Parallax>
              </div>
            </div>
          </div>
        </section>
        <section className="page__row">
          <div className="page__rowContent">
            <div className="grid">
              <div className="grid__col--full" style={{ marginBottom: "3rem" }}>
                <Reveal
                  className="hidden"
                  effect="fadeInDown"
                  delay={isMobile ? 300 : 450}
                >
                  <h2>Packaged Solutions That Drive Traffic</h2>
                </Reveal>
                <Reveal
                  className="hidden"
                  effect="fadeInDown"
                  delay={isMobile ? 450 : 600}
                >
                  <p style={{ marginBottom: "2rem" }}>
                    At Good Program we aim to be as transparent as possible. These are a handful of packaged solutions to common requests from our clients.
                  </p>
                </Reveal>
              </div>
              <div className="grid__col--third">
                <Reveal
                  className="hidden"
                  effect="fadeInUp"
                  delay={isMobile ? 300 : 450}
                >
                  <PricingTable title="Website Overhaul" price="$1500" items={[
                    { icon: <AiOutlineCheck />, value: "Full refresh of existing site to your specifications (or ours)" },
                    { icon: <AiOutlineCheck />, value: "Mobile useability adjustments" },
                    { icon: <AiOutlineCheck />, value: "SEO integration" },
                    { icon: <AiOutlineCheck />, value: "Almost any platform" }]} />
                </Reveal>

              </div>
              <div className="grid__col--third">
                <Reveal
                  className="hidden"
                  effect="fadeInUp"
                  delay={isMobile ? 450 : 600}
                >
                  <PricingTable title="Small Business Starter" emphasis={true} price="$2100" items={[
                    { icon: <AiOutlineCheck />, value: "Full website design and setup" },
                    { icon: <AiOutlineCheck />, value: "Responsive guaranteed" },
                    { icon: <AiOutlineCheck />, value: "Enhanced SEO" },
                    { icon: <AiOutlineCheck />, value: "Latest technologies" },
                    { icon: <AiOutlineCheck />, value: "5 pages included" }]} />
                </Reveal>
              </div>
              <div className="grid__col--third">
                <Reveal
                  className="hidden"
                  effect="fadeInUp"
                  delay={isMobile ? 600 : 750}
                >
                  <PricingTable title="Enterprise Custom" price="$4500" items={[
                    { icon: <AiOutlineCheck />, value: "Custom coded from the ground up" },
                    { icon: <AiOutlineCheck />, value: "Built for reliabilty, professionalism and unbelievable speed" },
                    { icon: <AiOutlineCheck />, value: "Responsive guaranteed" },
                    { icon: <AiOutlineCheck />, value: "Enhanced SEO" },
                    { icon: <AiOutlineCheck />, value: "Latest technologies" },
                    { icon: <AiOutlineCheck />, value: "5 pages included" }]} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="page__row">
          <RowBackground
            bgImgSrc="/img/texture.png"
            bgImgAlt="test"
            bgColor="black"
            bgImgOpacity={0.5}
            bgGradient="ttb"
            rotation={180}
            parallax={30}
          />
          <div className="page__rowContent">
            <div className="grid">
              <div className="grid__col--full">
                <Reveal
                  className="hidden"
                  effect="fadeInDown"
                  delay={isMobile ? 300 : 450}
                >
                  <h2>We're Flexible</h2>
                </Reveal>
                <Reveal
                  className="hidden"
                  effect="fadeInDown"
                  delay={isMobile ? 450 : 600}
                >
                  <p style={{ marginBottom: "2rem" }}>
                    Take a look at the two typical stories for web design below.
                    Both clients have drastically different needs. We abstract
                    the process as much or as little as you need so that you
                    stay in control.
                  </p>
                </Reveal>
                <div className="grid">
                  <div className="grid__col--half">
                    <TimeLine
                      orientation={"vertical"}
                      items={comparisonItems.left}
                    />
                  </div>
                  <div className="grid__col--half">
                    <TimeLine
                      orientation={"vertical"}
                      items={comparisonItems.right}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page__row" style={{ backgroundColor: "#f2f2f2" }}>

          <div className="body__background body__overlay--2--4-1" />

          <div className="page__rowContent">
            <div className="grid">
              <div
                className="grid__col--two-third flex flex--center-v"
                style={{ paddingRight: "1rem" }}
              >
                <div>
                  <Reveal
                    className="hidden"
                    effect="fadeInDown"
                    delay={isMobile ? 150 : 300}
                  >
                    <h2>The Web Is Mobile</h2>
                  </Reveal>
                  <Reveal
                    className="hidden"
                    effect="fadeInRight"
                    delay={isMobile ? 150 : 300}
                  >
                    <p>...and it's time your site was too.</p>
                  </Reveal>
                  <Reveal
                    className="hidden"
                    effect="fadeInRight"
                    delay={isMobile ? 300 : 450}
                  >
                    <p>
                      When developing any new website design we follow strict
                      rules and rely on sophisticated design mechanisms to
                      ensure that your website looks its best on all devices.
                      </p>
                  </Reveal>
                  <Reveal
                    className="hidden"
                    effect="fadeInRight"
                    delay={isMobile ? 450 : 600}
                  >
                    <p>
                      At Good Program, we apply the "Mobile First Design"
                      principle, meaning that we first design your website for
                      mobile devices and then carry that design across other
                      relevent devices. This is a modern technique that has
                      been adopted industry wide and ensures that your site
                      loads fast and looks great on what has now become the
                      most commonly used device when accessing the internet.
                      </p>
                  </Reveal>
                </div>
              </div>
              <div className="grid__col--third" style={{ padding: "0.5rem" }}>

                <Reveal
                  className="hidden"
                  effect="fadeInUp"
                  delay={isMobile ? 450 : 600}
                >
                  <PieChart
                    lineWidth={40}
                    label={({ dataEntry }) => {
                      return `${dataEntry.title} ${dataEntry.value}%`;
                    }}
                    labelStyle={{
                      fontSize: 4,
                      fontFamily: "Roboto",
                      color: "rgba(0,0,0,1)",
                    }}
                    labelPosition={80}
                    animate
                    animationDuration={1200}
                    data={[
                      { title: "Desktop", value: 45, color: "#32befa" },
                      { title: "Mobile", value: 55, color: "#7dd5fb" },
                    ]}
                  />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="page__row">
          <div className="page__rowContent">
            <Reveal
              className="hidden"
              effect="fadeInRight"
              delay={isMobile ? 150 : 300}
            >
              <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
                We Work With All Platforms & Service All Industries
              </h2>
            </Reveal>
            <div className="grid">
              <div className="grid__col--half offerList__outer">
                <Reveal
                  top
                  className="hidden"
                  cascade
                  duration={150}
                  delay={isMobile ? 450 : 1000}
                >
                  <ul className="offerList">
                    <li className="offerList__item">
                      <FaWordpressSimple className="offerList__icon" />
                      <p className="offerList__text">Wordpress web design</p>
                    </li>
                    <li className="offerList__item">
                      <DiJavascript1 className="offerList__icon" />
                      <p className="offerList__text">Vanilla JS web design</p>
                    </li>
                    <li className="offerList__item">
                      <DiJqueryLogo className="offerList__icon" />
                      <p className="offerList__text">jQuery web design</p>
                    </li>
                    <li className="offerList__item">
                      <DiReact className="offerList__icon" />
                      <p className="offerList__text">
                        React.js + Redux web design
                      </p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineHtml5 className="offerList__icon" />
                      <p className="offerList__text">
                        HTML5 Semantic web design
                      </p>
                    </li>
                    <li className="offerList__item">
                      <DiCss3 className="offerList__icon" />
                      <p className="offerList__text">CSS3 web design</p>
                    </li>
                  </ul>
                </Reveal>
              </div>
              <div className="grid__col--half offerList__outer">
                <Reveal
                  top
                  className="hidden"
                  cascade
                  duration={150}
                  delay={isMobile ? 450 : 1000}
                >
                  <ul className="offerList">
                    <li className="offerList__item">
                      <FaTools className="offerList__icon" />
                      <p className="offerList__text">Construction Web Design</p>
                    </li>
                    <li className="offerList__item">
                      <FaUserTie className="offerList__icon" />
                      <p className="offerList__text">
                        Professional Services Web Design
                      </p>
                    </li>
                    <li className="offerList__item">
                      <MdBusiness className="offerList__icon" />
                      <p className="offerList__text">
                        Local Business Web Design
                      </p>
                    </li>
                    <li className="offerList__item">
                      <FaLevelUpAlt className="offerList__icon" />
                      <p className="offerList__text">Startup Web Design</p>
                    </li>
                    <li className="offerList__item">
                      <MdRestaurant className="offerList__icon" />
                      <p className="offerList__text">Restaurant Web Design</p>
                    </li>
                    <li className="offerList__item">
                      <AiOutlineCheck className="offerList__icon" />
                      <p className="offerList__text">
                        (and pretty much anything else...)
                      </p>
                    </li>
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="page__row bg_color--primary">
          <div className="page__rowContent">
            <Reveal
              className="hidden"
              effect="fadeInRight"
              delay={isMobile ? 150 : 300}
            >
              <h2 style={{ textAlign: "center", color: "white" }}>
                And Service The Whole Central Coast
              </h2>
            </Reveal>

            <Reveal
              top
              className="hidden"
              cascade
              duration={150}
              delay={isMobile ? 450 : 1000}
            >
              <p style={{ textAlign: "center", color: "white" }}>
                Gosford Web Design, Ettalong Beach Web Design, Ourimbah Web Design, Point Clare Web Design, West Gosford Web Design, The Entrance Web Design, Tuggerah Web Design, Umina Beach Web Design, Woy Woy Web Design, Wyong Web Design, Erina Web Design</p>
            </Reveal>

          </div>
        </section>
        <CTA />
      </div>
    </Layout >
  );
};

export default WebDesign;
