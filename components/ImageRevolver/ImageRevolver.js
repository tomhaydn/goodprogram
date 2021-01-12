import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Image from "next/image";

class ImageRevolver extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  mouseEnter = el => { };

  mouseLeave = el => { };

  componentDidMount() { }

  componentWillReceiveProps(nextProps) { }

  render() {
    return (
      <div className="flex flex--center-v" style={{ padding: "1rem", height: "100%" }}>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image alt="nodejs hosting sydney Australia" layout="fill" objectFit="contain" objectPosition="center" src="/img/webCluster1.png" />
        </div>
      </div>
    );
  }
}

export default ImageRevolver;
