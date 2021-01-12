import Layout from "../../../../components/Layout/Layout";
import { NextSeo, BlogJsonLd } from "next-seo";
import React, { Component } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'

dynamic(() => import("./Post.scss"));

function Post({ entry, error }) {
    let seoTitle = "Blog | How To Improve Your Business Online | Good Program";
    let seoDesc =
        "Instructional articles and information about general programming/software, how to design websites, improve SEO rankings and other web tech.";
    const router = useRouter();
    const { slug } = router.query

    if (error) {
        return (
            <Layout>
                <NextSeo
                    title={seoTitle}
                    description={seoDesc}
                    openGraph={{
                        url: "https://goodprogram.com.au/blog",
                        type: "website",
                        title: seoTitle,
                        description: seoDesc,
                        images: [
                            {
                                url: "https://goodprogram.com.au/img/full-logo-trim.png",
                                width: 2649,
                                height: 628,
                                alt:
                                    "Good Program Sydney/Central Coast web design, development hosting and seo"
                            }
                        ]
                    }}
                />

                <div className="grid page__content">
                    <div className="grid__col--outer" />
                    <div className="grid__col--inner">
                        <h1>Error finding post data</h1>
                    </div>
                    <div className="grid__col--outer" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <NextSeo
                title={seoTitle}
                description={seoDesc}
                openGraph={{
                    url: "https://goodprogram.com.au/blog",
                    type: "website",
                    title: seoTitle,
                    description: seoDesc,
                    images: [
                        {
                            url: "https://goodprogram.com.au/img/full-logo-trim.png",
                            width: 2649,
                            height: 628,
                            alt:
                                "Good Program Sydney/Central Coast web design, development hosting and seo"
                        }
                    ]
                }}
            />

            <div className="grid page__content">
                <div className="grid__col--outer" />
                <div className="grid__col--inner">
                    <h1>{entry.block_data["Post Title"].data}</h1>
                    <p>Good Program || {new Date(entry.release_date).toString()}</p>
                    <div dangerouslySetInnerHTML={{ __html: entry.block_data["Post Body"].data }} />
                </div>

                <div className="grid__col--outer" />
            </div>
        </Layout>
    );

}

Post.getInitialProps = async ({ query }) => {
    const { slug } = query;
    let error = false;
    let entry;

    try {
        const res = await axios.get(`https://polarhcms.com/api/v1/spots/spot/entry?sid=34&atype=json&getter=slug&slug=${slug}`);
        entry = res.data.data.entry;
    } catch (err) {
        error = err.toString();
    }
    return { error, entry };
}

export default Post;
