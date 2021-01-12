import Link from "next/link";
import LinkUnderline from "../LinkUnderline/LinkUnderline";
import Submenu from "./Submenu";
import MobileSubmenu from "./MobileSubmenu";
import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { AiOutlineMenu, AiOutlineClose, AiFillPhone } from "react-icons/ai";
import menuItems from "./MenuItems";
import Reveal from "react-reveal/Reveal";
import Image from "next/image";
import dynamic from "next/dynamic";
dynamic(() => import("./Navbar.scss"));

class Navbar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      hover: {
        Services: false,
      },
      mobileMenuActive: false,
    };
  }

  mouseEnter = (el) => {
    let newHover = this.state.hover;
    Object.keys(newHover).forEach(function (key) {
      newHover[key] = false;
    });
    newHover[el] = true;
    this.setState({
      hover: newHover,
    });
  };

  mouseLeave = (el) => {
    let newHover = this.state.hover;
    Object.keys(newHover).forEach(function (key) {
      newHover[key] = false;
    });

    this.setState({
      hover: newHover,
    });
  };

  toggleMobileMenu = () => {
    this.setState({ mobileMenuActive: !this.state.mobileMenuActive });
  };

  buildMenu() {
    let out = [];

    if (isMobile) {
      out.push(
        <li
          key={0}
          className="navigation__element"
          onClick={() => {
            this.toggleMobileMenu();
          }}
        >
          <div className="navigation__elementContainer">
            <Reveal>
              {this.state.mobileMenuActive ? (
                <AiOutlineClose size={"1.5rem"} color={"white"} />
              ) : (
                  <AiOutlineMenu size={"1.5rem"} color={"white"} />
                )}
            </Reveal>
          </div>
        </li>
      );
    } else {
      for (let i = 0; i < menuItems.length; i++) {
        let menuItem = menuItems[i];
        out.push(
          <li
            key={i}
            onMouseEnter={() => {
              this.mouseEnter(menuItem.name);
            }}
            onMouseLeave={() => {
              if (menuItem.name !== "Services") this.mouseLeave(menuItem.name);
            }}
            className={`${menuItem.name === "phone" &&
              `navigation__element--special`
              } navigation__element`}
          >
            <Link href={menuItem.ref}>
              <a
                className={`${menuItem.name === "phone" &&
                  `navigation__elementContainer--phone`
                  } navigation__elementContainer`}
              >
                <div className="navigation__link">
                  {menuItem.name === "phone" && (
                    <AiFillPhone style={{ marginRight: "0.5rem" }} />
                  )}

                  {menuItem.label}
                </div>
                {menuItem.name !== "phone" && (
                  <LinkUnderline
                    active={this.state.hover[menuItem.name]}
                    className="navigation__underline"
                  />
                )}

              </a>
            </Link>
          </li>
        );
      }
    }

    return out;
  }

  render() {
    return (
      <nav className="grid navigation">
        <div className="grid navigation__menu">
          <div className="grid__col--outer" />
          <div className="grid__col--inner">
            <ul className="navigation__container">
              <li className="navigation__element--group">
                <Reveal>
                  <Link href="/">
                    <div className="navigation__image">
                      <Image layout="fill" alt="web design development sydney australia wordpress" objectFit="contain" objectPosition="center" src="/img/full-logo-trim-white.png" />
                    </div>
                  </Link>
                </Reveal>
              </li>
              <li className="navigation__element--group">
                <ul style={{ paddingLeft: 0 }} className="navigation__element--group">
                  {this.buildMenu()}
                </ul>
              </li>
            </ul>
          </div>
          <div className="grid__col--outer" />
        </div>
        <Submenu
          mouseLeave={this.mouseLeave}
          active={this.state.hover.Services}
        />
        <MobileSubmenu active={this.state.mobileMenuActive} />
      </nav>
    );
  }
}

export default Navbar;
