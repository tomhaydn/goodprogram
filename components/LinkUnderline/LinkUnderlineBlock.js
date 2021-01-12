import React, { Component } from "react";

import dynamic from "next/dynamic";
dynamic(() => import("./LinkUnderline.scss"));


class LinkUnderlineBlock extends Component {
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
          className={`grid__col--tenth linkUnderline__block linkUnderline__block--active`}
        ></div>
      );
    } else {
      return (
        <div
          className={`grid__col--tenth linkUnderline__block linkUnderline__block--hidden`}
        ></div>
      );
    }
  }
}

export default LinkUnderlineBlock;
