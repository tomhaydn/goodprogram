import React, { Component } from "react";
import Block from "./LinkUnderlineBlock";

import dynamic from "next/dynamic";
dynamic(() => import("./LinkUnderline.scss"));

class LinkUnderline extends Component {
  state = {};
  currentBlock = 0;

  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
      active: false
    };
  }

  componentDidMount() {
    this.blocks().then(data => { });
  }

  // Build blocks in class
  blocks = async () => {
    let blocks = {};

    for (let i = 0; i < 10; i++) {
      let blockNo = `block_${i}`;
      blocks[blockNo] = "hidden";
    }
    this.setState({ blocks });
    return;
  };

  // Render blocks in button
  renderBlocks = () => {
    let blocks = this.state.blocks;
    let out = [];

    for (let block in blocks) {
      let delay = Math.floor(Math.random() * 150) + 100;
      out.push(<Block delay={delay} key={block} />);
    }
    return out;
  };

  render() {
    if (this.props.active) {
      return <div className="linkUnderline grid">{this.renderBlocks()}</div>;
    } else {
      return <div className="linkUnderline"></div>;
    }
  }
}

export default LinkUnderline;
