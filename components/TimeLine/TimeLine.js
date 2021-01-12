import React, { Component } from "react";
import dynamic from "next/dynamic";
import Reveal from "react-reveal/Reveal";

dynamic(() => import("./TimeLine.scss"));

class TimeLine extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  buildTimeLine() {
    let out = [];
    let { items, orientation } = this.props;
    for (let i = 0; i < items.length; i++) {
      out.push(
        <div
          className={`timeLine__item timeLine__item--${orientation}`}
          style={
            this.props.orientation === "vertical"
              ? { flexDirection: i % 2 === 1 ? "row" : "row-reverse" }
              : this.props.orientation === "horizontal"
              ? { flexDirection: "column" }
              : {}
          }
        >
          <div className="timeLine__itemText"></div>
          <div
            style={
              this.props.orientation === "vertical"
                ? { flexDirection: "column" }
                : this.props.orientation === "horizontal"
                ? { flexDirection: "row" }
                : {}
            }
            className={`timeLine__line timeLine__line--${orientation}`}
          >
            <Reveal className="hidden" effect="fadeIn" delay={i * 150}>
              <div className="timeLine__circle" />
            </Reveal>
            {i < items.length - 1 && (
              <Reveal
                className="hidden"
                effect="fadeInDown"
                delay={(i + 1) * 150}
              >
                <div
                  style={
                    this.props.orientation === "vertical"
                      ? { height: "100%" }
                      : this.props.orientation === "horizontal"
                      ? { width: "100%" }
                      : {}
                  }
                  className={`timeLine__lineActual timeLine__lineActual--${orientation}`}
                />
              </Reveal>
            )}
          </div>
          <Reveal className="hidden" effect="fadeInDown" delay={i * 150}>
            <div className="timeLine__itemText timeLine__itemText--containing">
              <p>{items[i].text}</p>
            </div>
          </Reveal>
        </div>
      );
    }
    return out;
  }

  render() {
    return <div className="timeLine">{this.buildTimeLine()}</div>;
  }
}

export default TimeLine;
