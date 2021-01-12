import React, { Component } from "react";
import Link from "next/link";
import services from "../Services";

import dynamic from "next/dynamic";
dynamic(() => import("./Navbar.scss"));

class Submenu extends Component {
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
    this.props.mouseLeave("services");
    this.setState({
      hover: { ...this.state.hover, [el]: false },
    });
  };

  componentDidMount() {
    this.toggleMenu(this.props.active);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.active });
  }

  toggleMenu(state) {
    if (this.state.open != state) {
      this.setState({ open: state });
    }
  }

  buildMenu = () => {
    let out = [];

    for (let key in services) {
      let inner = [];
      let item = services[key];

      for (let i = 0; i < item.length; i++) {
        inner.push(
          <Link key={i} href={`${item[i].ref}`}>
            <a>
              <li className="submenu__item submenu__item--body">
                {item[i].icon}{item[i].name}
              </li>
            </a>
          </Link>
        );
      }

      out.push(
        <div key={key} className="grid__col--third">
          <ul className="submenu">
            <li className="submenu__item submenu__item--header">{key}</li>
            {inner}
          </ul>
        </div>
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
        className={
          this.state.open
            ? "grid navigation__submenu"
            : "grid navigation__submenu navigation__submenu--hidden"
        }
      >
        <div className="grid__col--outer" />
        <div className="grid__col--inner">
          <div className="grid">{this.buildMenu()}</div>
        </div>
        <div className="grid__col--outer" />
      </nav>
    );
  }
}

export default Submenu;
