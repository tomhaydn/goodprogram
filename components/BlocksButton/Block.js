import React, { Component } from "react";

import dynamic from "next/dynamic";
dynamic(() => import("./BlocksButton.scss"));

class Block extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ active: true });
    }, this.props.delay);
  }

  render() {
    if (this.state.active) {
      return (
        <div
          className={`grid__col--tenth blocksButton__block blocksButton__block--active`}
        ></div>
      );
    } else {
      return (
        <div
          className={`grid__col--tenth blocksButton__block blocksButton__block--hidden`}
        ></div>
      );
    }
  }
}

export default Block;
