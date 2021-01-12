import Link from "next/link";
import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import services from "../Services";
import dynamic from "next/dynamic";

dynamic(() => import("./ServiceGrid.scss"));

class ServiceGrid extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      serviceSections: {},
    };
  }

  hoverServiceSection = (section, tf) => {
    if (tf) {
      let newSections = {
        design: false,
        development: false,
        hosting: false,
      };
      newSections[section] = true;
      this.setState({ serviceHovering: true, serviceSections: newSections });
    } else {
      this.setState({
        serviceHovering: false,
        serviceSections: { ...this.state.serviceSections, [section]: tf },
      });
    }
  };

  buildServiceGrid = () => {
    let out = [];

    for (let key in services) {
      let item = services[key];
      let inner = [];
      for (let i = 0; i < item.length; i++) {
        inner.push(
          <Reveal delay={i * 100} effect="fadeInRight">
            <Link href={`${item[i].ref}`} passHref>
              <a>
                <div
                  onMouseLeave={() => {
                    this.hoverServiceSection(item[i].name, false);
                  }}
                  onMouseEnter={() => {
                    this.hoverServiceSection(item[i].name, true);
                  }}
                  className="grid serviceGrid__item"
                  style={{ justifyContent: "flex-start" }}
                >
                  <div
                    className={`card__sectionBorder card__sectionBorder--left ${!this.state.serviceSections[item[i].name] &&
                      "card__sectionBorder--left--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--top ${!this.state.serviceSections[item[i].name] &&
                      "card__sectionBorder--top--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--right ${!this.state.serviceSections[item[i].name] &&
                      "card__sectionBorder--right--hidden"
                      }`}
                  ></div>
                  <div
                    className={`card__sectionBorder card__sectionBorder--bottom ${!this.state.serviceSections[item[i].name] &&
                      "card__sectionBorder--bottom--hidden"
                      }`}
                  ></div>

                  <div className="grid__col--third">
                    <div className="serviceGrid__icon">
                      {item[i].iconType === "image" ? (
                        <img alt="" src={`/img/icon/${item[i].icon}`} />
                      ) : (
                          item[i].icon
                        )}
                    </div>
                  </div>
                  <div className="grid__col--two-third flex flex--center-v serviceGrid__itemText">
                    <div>
                      <p className="serviceGrid__text--header">
                        {item[i].name}
                      </p>
                      <p className="serviceGrid__text--sub">{item[i].sub}</p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </Reveal>
        );
      }

      out.push(<div className="grid__col--third">{inner}</div>);
    }
    return out;
  };

  render() {
    return <div className="grid serviceGrid">{this.buildServiceGrid()}</div>;
  }
}

export default ServiceGrid;
