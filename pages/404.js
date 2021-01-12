import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { NextSeo } from 'next-seo';

const four04 = () => {
    return (
        <Layout>
            <NextSeo
                title="Whoops!"
                description="404"
            />
            <div className="grid page__content">
                <div className="grid__col--outer" />
                <div className="grid__col--inner">
                    <h1>Looks like you found something that doesn't exist...yet!</h1>
                    <p>We're constantly improving our systems and it's likely you ran into this because we're building something bigger and better, check back soon!</p>
                </div>
                <div className="grid__col--outer" />
            </div>
        </Layout>
    );
};

export default four04;
