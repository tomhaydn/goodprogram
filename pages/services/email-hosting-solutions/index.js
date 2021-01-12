import Layout from "../../../components/Layout/Layout";
import { NextSeo } from "next-seo";
import BlocksButton from "../../../components/BlocksButton/BlocksButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import CTA from "../../../components/CTA/CTA";
import Reveal from "react-reveal/Reveal";

const EmailHosting = () => {
  let seoTitle =
    "Custom Business Email | Better Email At Lower Costs | Good Program";
  let seoDesc =
    "Custom business email help, setup, configuration and purchasing. Get help with your business email address in Gosford, Central Coast and Sydney.";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services/email-hosting-solutions",
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
                Custom Business Emails
              </h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={150}>
              <p>
                As a business owner, you know the importance of having a
                recognisable brand and we understand it too. It's for this
                reason that custom E-mail addresses have become essential.
                Custom E-mails generate a greater sense of professionalism in
                the conversations you have.
              </p>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight" delay={300}>
              <p>
                Alongside all web projects, we offer custom email addresses on
                any domains whether they have been purchased by us or another
                provider. i.e. 'yourname@yourdomainname.com'
              </p>
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default EmailHosting;
