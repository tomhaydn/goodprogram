import Layout from "../components/Layout/Layout";
import { NextSeo } from "next-seo";
import ServiceGrid from "../components/ServiceGrid/ServiceGrid";

const Services = () => {
  let seoTitle = "Services | Good Program | The value that your business needs";
  let seoDesc =
    "Good Program delivers Web Design, Web Development, Domain Names & DNS, Content Management Systems, E-Commerce, Wordpress Hosting, Cloud Hosting and SEO";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/services",
          type: "website",
          title: seoTitle,
          description: seoDesc,
          images: [
            {
              url: "https://goodprogram.com.au/img/services/services.png",
              width: 1737,
              height: 1074,
              alt:
                "Good Program Sydney/Central Coast web design, development hosting and seo",
            },
          ],
        }}
      />
      <div className="grid page__content">
        <div className="grid__col--outer" />
        <div className="grid__col--inner">
          <h1>Services</h1>
          <p>
            At Good Program we strive to deliver value across our huge range of
            quality web and IT services.
          </p>
          <ServiceGrid />
        </div>
        <div className="grid__col--outer" />
      </div>
    </Layout>
  );
};

export default Services;
