import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import BlocksButton from "../../components/BlocksButton/BlocksButton";
import "./CTA.scss";

class CTA extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    return (
      <div className="grid cta">
        <div className="cta__overlay"></div>
        <div className="cta__inner grid__col--half">
          <Reveal effect="fadeInRight">
            <h2 style={{ color: "white" }}>Let's make a change</h2>
          </Reveal>
          <Reveal delay={150} effect="fadeInRight">
            <p style={{ color: "white" }}>
              Speak to a professional about improving your business.
            </p>
          </Reveal>
          <Reveal delay={300} effect="fadeInRight">
            <BlocksButton link={"/contact"} buttonType={3} />
          </Reveal>
        </div>
      </div>
    );
  }
}

export default CTA;
