import React, { Component } from "react";
import dynamic from "next/dynamic";
import { AiOutlineCaretUp } from "react-icons/ai";

dynamic(() => import("./ScrollToTop.scss"));

class ScrollToTop extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.listenToScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    this.setState({
      scroll: winScroll,
    });
  };

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div
        onClick={() => {
          this.scrollTop();
        }}
        className={`scrollToTop ${
          this.state.scroll > 700 && "scrollToTop--visible"
        }`}
      >
        <div className="scrollToTop__icon">
          <AiOutlineCaretUp />
        </div>
      </div>
    );
  }
}

export default ScrollToTop;
