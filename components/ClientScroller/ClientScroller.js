import React, { Component } from "react";
import dynamic from "next/dynamic";
import Reveal from "react-reveal/Reveal";
import Image from "next/image";

dynamic(() => import("./ClientScroller.scss"));

const IMAGE_WIDTH = 350;

class ClientScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      count: 0,
      intervalCount: 0,
      images: [
        { file: "edv.png" },
        { file: "analoguedawn.png" },
        { file: "tsakscon.png" },
        { file: "dprint.png" },
        { file: "tttlogofull.png" },
        { file: "restorerschoice.png" }
      ]
    };
  }

  componentDidMount() {
    let interval = setInterval(this.runner, 10);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.runner);
  }

  runner = () => {
    if (this.state.count === IMAGE_WIDTH) {
      let next = this.state.images;
      next.push(next.shift());
      this.setState({
        count: 0,
        intervalCount: this.state.intervalCount + 1,
        images: next
      });
    }
    this.setState({ count: this.state.count + 0.5 });
  };

  images() {
    let out = [];
    let images = this.state.images;
    for (let i = 0; i < images.length; i++) {
      out.push(
        <Reveal delay={i * 150} effect="fadeInUp">
          <div
            style={{
              left: IMAGE_WIDTH * i - this.state.count
            }}
            className="clientScroller__image"
          >
            <Image unoptimized alt="nodejs hosting sydney Australia" layout="fill" objectFit="contain" objectPosition="center" src={`/img/clientLogo/${images[i].file}`} />
          </div>
        </Reveal>
      );
    }
    return out;
  }

  render() {
    return <section className="clientScroller">
      <div className="clientScroller__overlay" />
      {this.images()}
    </section>;
  }
}

export default ClientScroller;
