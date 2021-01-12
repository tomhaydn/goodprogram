import React, { Component } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import Reveal from "react-reveal/Reveal";
import CTA from "../components/CTA/CTA";
import RowBackground from "../components/RowBackground/RowBackground";
import Image from "next/image";

const ImageRevolver = dynamic(() =>
  import("../components/ImageRevolver/ImageRevolver")
);
const BlocksButton = dynamic(() =>
  import("../components/BlocksButton/BlocksButton")
);
const ClientScroller = dynamic(() =>
  import("../components/ClientScroller/ClientScroller")
);
const ServiceGrid = dynamic(() =>
  import("../components/ServiceGrid/ServiceGrid")
);
dynamic(() => import("../styles/index.scss"));

const headerWords = [
  "Empire",
  "Online Presence",
  "Revenue Streams",
  "Search Engine Appearance",
  "Digital Dominance",
  "Automation Systems",
  "Advertising Reach",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const donut = {
  datasets: [
    {
      data: [
        getRandomInt(50, 200),
        getRandomInt(100, 150),
        getRandomInt(150, 250),
      ],
      backgroundColor: ["#CCC", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

class index extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headerVisible: true,
      serviceSections: {
        design: false,
        development: false,
        hosting: false,
      },
      serviceHovering: false,
    };
  }

  componentDidMount() {
    let interval = setInterval(this.change, 2500);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  hoverServiceSection = (section, tf) => {
    if (tf) {
      let newSections = {
        design: false,
        development: false,
        hosting: false,
      };
      newSections[section] = true;
      this.setState({ serviceHovering: true, serviceSections: newSections });
    } else {
      this.setState({
        serviceHovering: false,
        serviceSections: { ...this.state.serviceSections, [section]: tf },
      });
    }
  };

  change = () => {
    let waitTime = 300;
    this.setState({ headerVisible: false });

    if (this.state.count === headerWords.length - 1) {
      setTimeout(() => {
        this.setState({ count: 0, headerVisible: true });
      }, waitTime);
    } else {
      setTimeout(() => {
        this.setState({ count: this.state.count + 1, headerVisible: true });
      }, waitTime);
    }
  };

  render() {
    return (
      <Layout bgColor={this.state.serviceHovering ? "#f2f2f2" : "white"}>
        <Reveal effect="angleClip" force={true} duration={1500}>
          <section className="hidden banner grid">
            <div className="banner__background banner__background--underlay" />
            <div className={`banner__background banner__background--overlay`} />
            <div className="grid__col--outer" />
            <div className="grid__col--inner" style={{ zIndex: 2 }}>
              <div className="banner__grid grid">
                <div className="banner__element flex flex--center-v grid__col--full">
                  <div>
                    <Reveal className="hidden" effect="fadeInRight">
                      <h2
                        style={{
                          lineHeight: "3rem",
                          fontSize: "3rem",
                          color: "white",
                        }}
                      >
                        Expand Your&nbsp;
                        <span
                          className={`banner__carouselText ${this.state.headerVisible
                            ? `banner__carouselText--visible`
                            : `banner__carouselText--hidden`
                            }`}
                        >
                          {headerWords[this.state.count]}
                        </span>
                      </h2>
                    </Reveal>
                    <Reveal className="hidden" effect="fadeInRight" delay={150}>
                      <p
                        className="hidden"
                        style={{ color: "white", opacity: 0 }}
                      >
                        With Good Program Web and Business Services
                      </p>
                    </Reveal>
                    <Reveal
                      className="hidden"
                      effect="fadeInUp"
                      delay={isMobile ? 150 : 300}
                    >
                      <BlocksButton
                        link={"/contact"}
                        buttonType={1}
                        className="hidden"
                      />
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid_col--outer" />
          </section>
        </Reveal>
        <section
          className={`body ${this.state.serviceHovering && "body--serviceHover"
            } body__row--1 grid`}
        >
          <div className="grid__col--outer" />
          <div className="grid__col--inner body__row-container">
            <div className="grid">
              <div className="grid__col--full">
                <Reveal effect="fadeInDown">
                  <h1
                    style={{ fontSize: "2.5rem" }}
                    className="body__header--1 align--center"
                  >
                    Sydney and Central Coast Web Design Services
                  </h1>
                </Reveal>
                <Reveal delay={150} effect="fadeInDown">
                  <p className="align--center">
                    Good Program provides customers across Australia with tools
                    that empower their business. Our team works hard to deliver
                    exceptional value across our wide range of business tools
                    and web development services.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`body ${this.state.serviceHovering && "body--serviceHover"
            } body__row--2 grid`}
        >
          <RowBackground
            bgImgSrc="/img/blue3.jpg"
            bgImgAlt="test"
            bgColor="silver"
            overlayOpacity={0.75}
            overlay="solid"
            rotation={360}
            parallax={30}
          />
          <div className="grid__col--outer" />
          <div className="grid__col--inner body__service-container body__row-container">
            <h2 style={{ marginBottom: "3rem" }}>To get you started...</h2>
            <div className="grid">
              <Reveal delay={150} effect="fadeInDown">
                <div
                  onMouseLeave={() => {
                    this.hoverServiceSection("design", false);
                  }}
                  onMouseEnter={() => {
                    this.hoverServiceSection("design", true);
                  }}
                  className={`card grid__col--third  ${this.state.serviceSections.design && "card--hovering"
                    }`}
                >
                  <div
                    className={`card__sectionBorder card__sectionBorder--left ${!this.state.serviceSections.design &&
                      "card__sectionBorder--left--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--top ${!this.state.serviceSections.design &&
                      "card__sectionBorder--top--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--right ${!this.state.serviceSections.design &&
                      "card__sectionBorder--right--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--bottom ${!this.state.serviceSections.design &&
                      "card__sectionBorder--bottom--hidden"
                      }`}
                  ></div>
                  <Link href="/services/web-design">
                    <a>
                      <div
                        className={`card__inner ${!this.state.serviceSections.design &&
                          this.state.serviceHovering
                          ? "card__inner--hiding"
                          : ""
                          }`}
                      >
                        <div className="card__body">
                          <div>
                            <div className="card__icon">
                              <div className="card__image">
                                <Image layout="fill" alt="Pencil Icon" objectFit="contain" objectPosition="center" src="/img/icon/pencilicon.png" />
                              </div>
                            </div>

                            <h3 className="card__heading">Web Design</h3>
                            <br />
                            <div className="pricingTable__priceUnderline"></div>
                            <p className="card__text">
                              With our advanced knowledge of the latest
                              front-end design languages and frameworks
                              alongside un-matched attention to detail, Good
                              Program provides design solutions that look as
                              good as they feel.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={isMobile ? 300 : 300} effect="fadeInDown">
                <div
                  onMouseLeave={() => {
                    this.hoverServiceSection("development", false);
                  }}
                  onMouseEnter={() => {
                    this.hoverServiceSection("development", true);
                  }}
                  className={`card grid__col--third ${this.state.serviceSections.development && "card--hovering"
                    }`}
                >
                  <div
                    className={`card__sectionBorder card__sectionBorder--left ${!this.state.serviceSections.development &&
                      "card__sectionBorder--left--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--top ${!this.state.serviceSections.development &&
                      "card__sectionBorder--top--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--right ${!this.state.serviceSections.development &&
                      "card__sectionBorder--right--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--bottom ${!this.state.serviceSections.development &&
                      "card__sectionBorder--bottom--hidden"
                      }`}
                  ></div>
                  <Link href="/services/web-development">
                    <a>
                      <div
                        className={`card__inner ${!this.state.serviceSections.development &&
                          this.state.serviceHovering
                          ? "card__inner--hiding"
                          : ""
                          }`}
                      >
                        <div className="card__body">
                          <div>
                            <div className="card__icon">
                              <div className="card__image">
                                <Image layout="fill" alt="Cog Icon" objectFit="contain" objectPosition="center" src="/img/icon/cogsicon.png" />
                              </div>
                            </div>
                            <h3 className="card__heading">Web Development</h3>
                            <br />
                            <div className="pricingTable__priceUnderline"></div>
                            <p className="card__text">
                              Alongside forward-thinking front-end web design,
                              Good Program provides full-stack web development
                              in a huge array of environments. We can
                              develop entirely custom websites, systems, and
                              unique tools that improve business.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={isMobile ? 450 : 450} effect="fadeInDown">
                <div
                  onMouseLeave={() => {
                    this.hoverServiceSection("hosting", false);
                  }}
                  onMouseEnter={() => {
                    this.hoverServiceSection("hosting", true);
                  }}
                  className={`card grid__col--third ${this.state.serviceSections.hosting && "card--hovering"
                    }`}
                >
                  <div
                    className={`card__sectionBorder card__sectionBorder--left ${!this.state.serviceSections.hosting &&
                      "card__sectionBorder--left--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--top ${!this.state.serviceSections.hosting &&
                      "card__sectionBorder--top--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--right ${!this.state.serviceSections.hosting &&
                      "card__sectionBorder--right--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--bottom ${!this.state.serviceSections.hosting &&
                      "card__sectionBorder--bottom--hidden"
                      }`}
                  ></div>
                  <Link href="/services/web-hosting">
                    <a>
                      <div
                        className={`card__inner ${!this.state.serviceSections.hosting &&
                          this.state.serviceHovering
                          ? "card__inner--hiding"
                          : ""
                          }`}
                      >
                        <div className="card__body">
                          <div>
                            <div className="card__icon">
                              <div className="card__image">
                                <Image layout="fill" alt="Pencil Icon" objectFit="contain" objectPosition="center" src="/img/icon/webhostingicon.png" />
                              </div>
                            </div>
                            <h3 className="card__heading">Web Hosting</h3>
                            <br />
                            <div className="pricingTable__priceUnderline"></div>
                            <p className="card__text">
                              Enterprise-class hosting at the touch of a button.
                              Leveraging the power of cloud computing and modern
                              systems architecture, Good Program can provide
                              hosting that is secure, reliable, and
                              fast...really fast.
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="grid__col--outer" />
        </section>
        <section className="body__row--2-1 grid">
          <div className="body__background--2-1" />

          <div className="grid__col--outer" />
          <div className="grid__col--inner body__row-container">
            <div className="grid">
              <div className="grid__col--third">
                <Reveal effect="fadeIn" style={{ height: "100%" }}>
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image unoptimized alt="nodejs hosting sydney Australia" layout="fill" objectFit="contain" objectPosition="center" src="/img/webCluster1.png" />
                  </div>
                </Reveal>
              </div>
              <div
                style={{ padding: "1rem" }}
                className="grid__col--two-third flex flex--center-v"
              >
                <div>
                  <Reveal effect="fadeInRight">
                    <h2 className="body__header--2-1">
                      We make sense of the web
                    </h2>
                  </Reveal>
                  <Reveal delay={150} effect="fadeInRight">
                    <p>...and push it as far as it can go.</p>
                  </Reveal>
                  <Reveal delay={isMobile ? 150 : 300} effect="fadeInRight">
                    <p>
                      The online world is a new and challenging
                      frontier for many young businesses and over the years we've come
                      to learn that our clients seek clear results above all else. At
                      Good Program, our Australian team of qualified professionals focus on un-tangling
                      the web and leveraging the complexity to its full
                      potential. In years of un-matched service we've taken
                      businesses at all stages of online integration and
                      accelerated their growth.
                    </p>
                  </Reveal>
                  <Reveal delay={isMobile ? 150 : 450} effect="fadeInRight">
                    <p>
                      We specialise in growing businesses of all types, including
                      services, e-commerce, advertising, blogs and so many more.
                    </p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <div className="grid__col--outer" />
        </section>
        <section className="body__row--3 grid">
          <Reveal delay={isMobile ? 150 : 300} effect="fadeIn">
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >

              <Image unoptimized layout="fill" alt="Code" objectFit="cover" objectPosition="center" src="/img/code1.jpg" />

              <div
                style={{
                  height: "100%",
                  width: "60%",
                  backgroundColor: "white",
                  zIndex: 3,
                }}
              />
              <div style={{ height: "100%", zIndex: 3, position: "relative", width: "10rem" }}>
                <Image unoptimized layout="fill" alt="Row transient" objectFit="cover" objectPosition="center" src="/img/rowTrans.png" />
              </div>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  background:
                    "linear-gradient(90deg, rgba(50,190,250,1) 26%, rgba(34,197,252,1) 51%, rgba(0,212,255,0) 100%)",
                  position: "absolute",
                  opacity: 1,
                }}
              />
            </div>
          </Reveal>

          <div className="grid__col--outer" />
          <div className="grid__col--inner body__row-container">
            <div className="grid">
              <div className="grid__col--two-third">
                <Reveal effect="fadeInRight">
                  <h2 className="body__header--2">
                    Let us sweat the nitty-gritty
                  </h2>
                </Reveal>
                <Reveal delay={150} effect="fadeInRight">
                  <p>
                    At Good Program we pride ourselves on our ability to make
                    the web accessible. We provide flexible solutions for business at all
                    levels of online integration and can take care of as much or
                    as little as needed!
                  </p>
                </Reveal>

              </div>
              <div className="grid__col--half">

              </div>
            </div>
          </div>
        </section>
        <section className="body__row--4 grid">
          <RowBackground
            bgImgSrc="/img/texture.png"
            bgImgAlt="test"
            bgColor="black"
            bgImgOpacity={0.7}
            bgGradient="ttb"
            rotation={360}
            parallax={30}
          />
          <div className="grid__col--outer" />
          <div className="grid__col--inner body__row-container">
            <div className="grid">
              <div className="grid__col--full">
                <Reveal effect="fadeInDown">
                  <h2 className="body__header--4">
                    We are full-service
                  </h2>
                </Reveal>
              </div>
              <div className="grid__col--full flex flex--center-h">
                <ServiceGrid />
              </div>
            </div>
          </div>
          <div className="grid__col--outer" />
        </section>
        <section
          className="body__row--4-1 grid"
          style={{ backgroundColor: "white" }}
        >
          <div className="body__background body__background--4-1" />
          <div className="body__background body__overlay--4-1" />
          <div className="body__background body__overlay--2--4-1" />

          <div className="grid__col--outer" />
          <div className="grid__col--inner body__row-container">
            <div className="grid">
              <div
                className="grid__col--half flex flex--center-v"
                style={{ padding: "1rem" }}
              >
                <div>
                  <Reveal effect="fadeInDown">
                    <h2 className="body__header--4-1">The Engine</h2>
                  </Reveal>
                  <Reveal delay={150} effect="fadeInDown">
                    <p>
                      Alongside our huge array of services, Good Program offers
                      an enterprise class Microservice-based Online Business
                      tool. The Engine offers affordable services such as
                      self-managed Wordpress and other website Hosting, Cloud
                      Systems, Email Hosting, Invoicing tools, Headless CMS and
                      much more.
                    </p>
                  </Reveal>
                  <Reveal delay={isMobile ? 150 : 300} effect="fadeInDown">
                    <p>Register for a free account and try it now!</p>
                  </Reveal>
                  <BlocksButton
                    link={"https://engine.goodprogram.com.au/users/register"}
                    text="Sign up now"
                    buttonType={3}
                    className="hidden"
                  />
                </div>
              </div>
              <div
                className="grid__col--half flex flex--center-v"
                style={{
                  overflow: "hidden",
                  position: "relative",
                  padding: "1rem",
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                  <Image alt="good program engine" layout="fill" objectFit="contain" objectPosition="center" src="/img/the-engine/good-program-engine-1.jpg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="body__row--3 grid">
          <div className="grid__col--outer" />
          <div className="grid__col--inner body__row-container">
            <ClientScroller />
          </div>
          <div className="grid__col--outer" />
        </section>
        <section className="body__row--5 grid">
          <CTA />
        </section>
      </Layout>
    );
  }
}

export default index;
