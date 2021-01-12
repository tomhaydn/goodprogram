import React, { Component } from "react";
import menuItems from "./MenuItems";
import Link from "next/link";
import Reveal from "react-reveal/Reveal";
import { AiFillPhone } from "react-icons/ai";

import dynamic from "next/dynamic";
dynamic(() => import("./Navbar.scss"));

class MobileSubmenu extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      hover: {
        inMenu: false,
        servicesItem: false,
      },
    };
  }

  mouseEnter = (el) => {
    this.setState({
      hover: { ...this.state.hover, [el]: true },
    });
  };

  mouseLeave = (el) => {
    this.setState({
      hover: { ...this.state.hover, [el]: false },
    });
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.active });
  }

  buildMenu = () => {
    let out = [];

    for (let j = 0; j < menuItems.length; j++) {
      let item = menuItems[j];
      out.push(
        <Reveal delay={j * 50} effect="fadeInUp">
          <li className="mobileSubmenu__item mobileSubmenu__item--body">
            <Link href={item.ref}>
              <a>
                {item.name === "phone" && <AiFillPhone />}&nbsp;{item.label}
              </a>
            </Link>
          </li>
        </Reveal>
      );
    }

    return out;
  };

  render() {
    return (
      <nav
        onMouseEnter={() => {
          this.mouseEnter("inMenu");
        }}
        onMouseLeave={() => {
          this.mouseLeave("inMenu");
        }}
        className={`grid navigation__mobileSubmenu ${
          this.props.active
            ? "navigation__mobileSubmenu--active"
            : "navigation__mobileSubmenu--hidden"
        }`}
      >
        <div className="grid__col--outer" />
        <div className="grid__col--inner">
          <div className="grid">
            <div className="grid__col--third">
              <ul className="mobileSubmenu">
                {this.props.active ? this.buildMenu() : ""}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid__col--outer" />
      </nav>
    );
  }
}

export default MobileSubmenu;
