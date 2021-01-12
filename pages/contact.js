import Layout from "../components/Layout/Layout";
import { NextSeo } from "next-seo";
import Reveal from "react-reveal/Reveal";
import Form from "../components/Form/Form";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlinePushpin
} from "react-icons/ai";
import Head from 'next/head'

import "../styles/contact.scss";

const formFields = [
  {
    name: "Name",
    label: "Name",
    placeholder: "",
    required: true,
    maxlength: 255,
    type: "text"
  },
  {
    name: "Email",
    label: "Email",
    placeholder: "",
    required: true,
    maxlength: 255,
    type: "text"
  },
  {
    name: "Phone",
    label: "Phone Number",
    placeholder: "",
    required: false,
    maxlength: 11,
    type: "text"
  },
  {
    name: "Message",
    label: "Message",
    placeholder: "",
    required: true,
    maxlength: 255,
    type: "textarea"
  }
];

const contact = () => {
  let seoTitle =
    "Contact | Speak With A Professional Web Designer | Good Program";
  let seoDesc =
    "Our team of web professionals are ready and waiting to discuss how we can improve your online strategy! Make a change, call, email or leave an enquiry today";
  return (
    <Layout>
      <Head>

        <script dangerouslySetInnerHTML={{
          __html: `gtag('event', 'conversion', {'send_to': 'AW-657301328/CvGmCO6k_9UBENC-trkC'});`
        }} />
      </Head>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/contact",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/services/services.png",
              width: 1200,
              height: 1200,
              alt:
                "Good Program Sydney/Central Coast web design, development hosting and seo"
            }
          ]
        }}
      />
      <Reveal effect="" force={true} duration={1500}>
        <div className="grid page__content">
          <div className="grid__col--outer" />
          <div className="grid__col--inner">
            <div className="grid">
              <div className="grid__col--full" style={{ marginBottom: "1rem" }}>
                <Reveal className="hidden" effect="fadeInRight">
                  <h1>Speak with a Professional</h1>
                </Reveal>
                <Reveal className="hidden" effect="fadeInRight">
                  <p>
                    Our team of industry experts are ready and waiting to help
                    guide your business to online success. Please feel free to
                    call, email and send us an enquiry any time!
                  </p>
                </Reveal>
              </div>
              <div className="grid__col--half">
                <section className="grid">
                  <Form fields={formFields} />
                </section>
              </div>

              <div className="grid__col--half">
                <section className="grid contact" style={{ paddingBottom: "1rem" }}>
                  <address>
                    <h3 style={{ color: "white", marginBottom: "1rem" }}>
                      We love to talk
                    </h3>
                    <table>
                      <thead />
                      <tbody>
                        <tr className="contact__item">
                          <td className="contact__iconWrapper">
                            <AiOutlineMail
                              className="contact__icon"
                              color="white"
                            />
                          </td>
                          <td>
                            <a
                              className="contact__link"
                              href="mailto:info@goodprogram.com.au"
                            >
                              info@goodprogram.com.au
                            </a>
                          </td>
                        </tr>
                        <tr className="contact__item">
                          <td className="contact__iconWrapper">
                            <AiOutlinePhone
                              className="contact__icon"
                              color="white"
                            />
                          </td>
                          <td>
                            <a className="contact__link" href="tel:0450874299">
                              0450 874 299
                            </a>
                          </td>
                        </tr>
                        <tr className="contact__item">
                          <td className="contact__iconWrapper">
                            <AiOutlinePushpin
                              className="contact__icon"
                              color="white"
                            />
                          </td>
                          <td>
                            <a
                              className="contact__link"
                              target="_blank"
                              href="https://goo.gl/maps/CsYFFvjonJahM6S87"
                            >
                              Unit 4/3 Koala Cres, West Gosford NSW 2250
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h3
                      style={{
                        color: "white",
                        marginBottom: "1rem",
                        marginTop: "1rem"
                      }}
                    >
                      Contact Hours
                    </h3>
                    <table>
                      <thead />
                      <tbody>
                        <tr className="contact__item">
                          <td>Mon:</td>
                          <td>9am-5pm</td>
                        </tr>
                        <tr className="contact__item">
                          <td>Tue:</td>
                          <td>9am-5pm</td>
                        </tr>
                        <tr className="contact__item">
                          <td>Wed:</td>
                          <td>9am-5pm</td>
                        </tr>
                        <tr className="contact__item">
                          <td>Thur:</td>
                          <td>9am-5pm</td>
                        </tr>
                        <tr className="contact__item">
                          <td>Fri:</td>
                          <td>9am-5pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </address>
                </section>
                <div
                  style={{
                    height: "20rem",
                    display: "flex",
                    padding: "1rem",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div style={{ height: "10rem" }}>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <img
                        style={{ maxWidth: "70%" }}
                        src="/img/full-logo-trim.png"
                        alt=""
                      />
                    </div>
                    <p style={{ width: "100%", textAlign: "center" }}>
                      75 133 120 616
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid__col--outer" />
        </div>
      </Reveal>
    </Layout>
  );
};

export default contact;
