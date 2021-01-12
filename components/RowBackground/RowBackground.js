import React, { Component } from "react";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

dynamic(() => import("./RowBackground.scss"));

class RowBackground extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.bgRef = React.createRef();
    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.parallaxShift);
  }

  parallaxShift = () => {
    this.setState({
      offset: window.pageYOffset,
    });
  };

  render() {

    let { parallax, bgColor, bgImgSrc, bgImgAlt, rotation, bgGradient, bgImgOpacity, overlay, overlayOpacity } = this.props;
    if (!parallax) parallax = 0;
    if (!overlay) overlay = "gradient";
    if (overlayOpacity === null || overlayOpacity == undefined) overlayOpacity = 1;

    return (
      <div
        style={
          bgGradient ? { opacity: bgImgOpacity } : { backgroundColor: bgColor }
        }
        className="rowBackground"
        ref={this.bgRef}
      >
        <div className="rowBackground__container">
          <div
            className="rowBackground__overlay"
            style={
              overlay === "gradient"
                ? {
                  backgroundImage: `linear-gradient(${rotation}deg, rgba(255,255,255,0), rgba(255,255,255,1) )`,
                }
                : {
                  background: `rgba(255,255,255,${overlayOpacity})`,
                }
            }
          ></div>
          <Parallax className="rowBackground__parallax" y={[(0 - parallax), parallax]}>
            <div
              className="rowBackground__image"
            >
              <Image layout="fill" objectFit="cover" objectPosition="center" alt={bgImgAlt} src={bgImgSrc} />
            </div>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default RowBackground;
