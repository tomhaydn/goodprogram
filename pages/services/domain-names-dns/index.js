import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const DomainNamesDNS = () => {
  let seoTitle =
    "Domain Name and DNS Management | Web Made Simple | Good Program";
  let seoDesc =
    "Buy domain names, get managed dns systems. Help getting your domain name working. Complex DNS configuration assistance.";

  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/domain-names-dns",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/OGIMAGE/dns.png",
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
        <section className="page__row">
          <div className="page__rowContent">
            <Reveal className="hidden" effect="fadeInDown" delay={150}>
              <h1 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Domain Names & DNS
              </h1>
            </Reveal>
            <p>
              When it comes to domains we've noticed that many individuals and
              businesses aren't leveraging modern-day DNS technologies. To
              counteract this, we work closely with clients demonstrating all
              possibilities, ultimately helping the client hone in on the
              perfect domain name and DNS configuration.
            </p>
            <p>
              Good Program can purchase domain names and manage everything for
              you, mitigating the hassle of linking the domain to websites (with
              us or another provider) and dealing with complex DNS Records.
            </p>
            <p>
              Take a look below and see if the domain you're thinking about is
              available!
            </p>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default DomainNamesDNS;
