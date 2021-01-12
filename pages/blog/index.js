import Layout from "../../components/Layout/Layout";
import { NextSeo, BlogJsonLd } from "next-seo";
import React, { Component } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import Reveal from "react-reveal/Reveal";
import Image from "next/image";

dynamic(() => import("./blog.scss"));
const currentDate = new Date();

const date = currentDate.getDate();
const month = currentDate.getMonth(); //Be careful! January is 0 not 1
const year = currentDate.getFullYear();

const dateString = date + "-" + (month + 1) + "-" + year;

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    const url =
      "https://polarhcms.com/api/v1/spots/spot/entries?sid=34&atype=json&start=0&lim=20&ordf=date&ord=desc";

    try {
      let res = await axios.get(url);
      let posts = res.data.data.spot_entries;
      this.setState({ posts });
    } catch (err) {
    }
  };

  buildPosts() {
    let posts = [];
    let out = [];
    for (let i = 0; i < this.state.posts.length; i++) {
      let post = this.state.posts[i];
      let block_data = post.block_data;
      out.push(
        <Reveal className="hidden" effect="fadeInUp" delay={(i + 1) * 100}>
          <article className="grid__col--quarter postCard">
            <Link href={`/blog/post/${block_data.Category.data}/${post.slug}`}>
              <a>
                <figure
                  className="postCard__figure"
                >
                  <div style={{ position: "relative", height: "10rem" }}>
                    <Image layout="fill" objectFit="cover" objectPosition="center" src={`${block_data.Thumbnail ? block_data.Thumbnail.data.src : "/img/full-logo-trim.png"}`} />
                  </div>
                  <figcaption>
                    <h3 className="postCard__title">{block_data["Post Title"].data}</h3>
                    <span className="postCard__date">
                      {new Date(post.release_date).toLocaleDateString()} -{" "}
                    </span>
                    <span className="postCard__date">Good Program</span>
                  </figcaption>
                </figure>

              </a>
            </Link>
          </article>
        </Reveal>
      );
    }

    return out;
  }

  render() {
    let seoTitle = "Blog | How To Improve Your Business Online | Good Program";
    let seoDesc =
      "Instructional articles and information about general programming/software, how to design websites, improve SEO rankings and other web tech.";

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
        <BlogJsonLd
          url="https://goodprogram.com.au/blog"
          title={seoTitle}
          images={["https://goodprogram.com.au/img/full-logo-trim.png"]}
          datePublished="2020-02-05T08:00:00+08:00"
          dateModified={dateString}
          authorName="Good Program"
          description={seoDesc}
        />
        <div className="grid page__content">
          <div className="grid__col--outer" />
          <div className="grid__col--inner">
            <h1>Words from the team</h1>
            <p>We're working on this one...</p>
            <div className="grid">{this.buildPosts()}</div>
          </div>
          <div className="grid__col--outer" />
        </div>
      </Layout>
    );
  }
}

export default Blog;
