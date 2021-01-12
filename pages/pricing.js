import Layout from "../components/Layout/Layout";
import { NextSeo } from "next-seo";

const Pricing = () => {
  let seoTitle =
    "Pricing | Speak with a professional web designer | Good Program";
  let seoDesc =
    "Affordable web design, web development, SEO and web hosting solutions for all industries. Take a look at our pre-packaged options.";
  return (
    <Layout>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          url: "https://goodprogram.com.au/pricing",
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
      <div className="grid page__content">
        <div className="grid__col--outer" />
        <div className="grid__col--inner">
          <h1>Pricing</h1>
          <p>We're working on this one...</p>
        </div>
        <div className="grid__col--outer" />
      </div>
    </Layout>
  );
};

export default Pricing;
