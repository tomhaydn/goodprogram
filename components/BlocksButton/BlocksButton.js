import React, { Component } from "react";
import Link from "next/link";
import Block from "./Block";

import dynamic from "next/dynamic";
dynamic(() => import("./BlocksButton.scss"));

class BlocksButton extends Component {
  state = {};
  currentBlock = 0;

  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
      active: false,
    };
  }

  componentDidMount() {
    this.blocks().then((data) => { });
  }

  // Build blocks in class
  blocks = async () => {
    let blocks = {};

    for (let i = 0; i < 40; i++) {
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
      let delay = Math.floor(Math.random() * 500) + 100;
      out.push(<Block delay={delay} key={block} />);
    }
    return out;
  };

  mouseEnter = () => {
    this.setState({ active: true });
  };

  mouseLeave = () => {
    this.setState({ active: false });
  };

  render() {
    let text = this.props.text || "Get a quote";
    let link = this.props.link || "#";
    let target = this.props.target || "";
    let buttonType = this.props.buttonType || "1";

    if (this.state.active) {
      return (
        <Link href={link}>
          <a target={target}>
            <button
              className={`blocksButton blocksButton__${buttonType}--active`}
              onMouseLeave={this.mouseLeave}
            >
              <div className="blocksButton__textContainer blocksButton__textContainer--active">
                {text}
              </div>
              <div className="blocksButton__blocks grid">
                {this.renderBlocks()}
              </div>
            </button>
          </a>
        </Link>
      );
    } else {
      return (
        <Link href={link}>
          <a>
            <button
              onMouseEnter={this.mouseEnter}
              className={`blocksButton blocksButton__${buttonType}--disabled`}
            >
              <div className={`blocksButton__textContainer`}>{text}</div>
            </button>
          </a>
        </Link>
      );
    }
  }
}

export default BlocksButton;
