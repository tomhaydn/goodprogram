import Layout from "../components/Layout/Layout";
import { NextSeo } from "next-seo";
import Reveal from "react-reveal/Reveal";
import CTA from "../components/CTA/CTA";
import Image from "next/image";
import dynamic from "next/dynamic";

const BlocksButton = dynamic(() =>
  import("../components/BlocksButton/BlocksButton")
);

const theEngine = () => {
  let seoTitle =
    "The Engine | Powerful Pay-Per-Use Business & Web Tools | Good Program";
  let seoDesc =
    "The Engine is a microservice business tool platform designed to provide affordable solutions to everyday business and web problems.";
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
                "Good Program Sydney/Central Coast web design, development hosting and seo",
            },
          ],
        }}
      />
      <div className="page__content">
        <section className="page__row" style={{ padding: "0rem" }}>
          <div className="page__rowContent" style={{ padding: "0rem" }}>
            <Reveal className="hidden" effect="fadeInRight">
              <h1>The Engine</h1>
            </Reveal>
            <Reveal className="hidden" effect="fadeInRight">
              <p>At Good Program we believe in providing <strong>value</strong> above all-else. To us, this means delivering affordable services, that carry quality at every turn. This is why we developed The Engine. The Engine is a central location for our customers to access a range of services that help improve their business. It provides a single place to manage billing, support and access to your services within the Good Program platform.</p>
              <h3>But what are Services?</h3>
              <p>Services are custom developed micro-applications running in the cloud, each built from the ground up to provide, flexibility, scalabilty and most importantly deliver <strong>to-the-minute Billing</strong>.
              That means, when you use a Good Program service, it's extremely unlikely that you'll ever pay for anything you don't use!</p>
              <h3>So how does it work exactly?</h3>
              <p>Let's take for example our new service <i><a target="_blank" href="https://good-cms.goodprogram.com.au/">Polar CMS</a></i>. Polar is a headless CMS system that allows users to build their own content API's in the cloud. Polar leverages query compression, caching, high-performance back-end logic and CDN's to deliver content at extermely high-speeds.</p>
              <div style={{ height: "20rem", width: "100%" }}>
                <Image src="/img/polar.png" layout="fill" objectFit="contain" objectPosition="center" />
              </div>
              <p>After a user has finished creating their account on Good Program, they can automatically activate the service. After an API is created and access begins, you'll be able to track the data transfered day-to-day via the <i>stats</i> section. Inside the user can also see the total cost for their usage that month.</p>
              <div style={{ height: "20rem", width: "100%" }}>
                <Image src="/img/polar1.png" layout="fill" objectFit="contain" objectPosition="center" />
              </div>
              <p>At the end of every given month, the total amount is summed up alongside other service totals and billed from within the central <i>Engine Dashboard</i>. </p>
              <p>This means you have easy-access to powerful tools, pro-rata billing that prevents unneccessary costs, a simple, centralised bill once a month and clear reports that are easy to understand! If that doesn't interest you, perhaps our <a href="/free-tiers">free-usage tiers</a> might!</p>
              <BlocksButton
                link={"https://engine.goodprogram.com.au/users/register"}
                buttonType={2}
                text="Create a free account"
                className="hidden"
                target="_blank"
              />
              <br />
            </Reveal>
          </div>
        </section>
        <CTA />
      </div>
    </Layout>
  );
};

export default theEngine;
