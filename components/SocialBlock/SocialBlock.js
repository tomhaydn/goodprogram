import React, { Component } from "react";
import dynamic from "next/dynamic";
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin
} from "react-icons/ai";


dynamic(() => import("./SocialBlock.scss"));

const el = [
    { name: "Facebook", ref: "https://www.facebook.com/goodprogramweb", icon: <AiOutlineFacebook /> },
    { name: "Instagram", ref: "https://www.instagram.com/goodprogramweb/", icon: <AiOutlineInstagram /> },
    { name: "LinkedIn", ref: "https://www.linkedin.com/company/good-program", icon: <AiOutlineLinkedin /> }
]

class SocialBlock extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    buildItems() {

        let out = [];

        for (let i = 0; i < el.length; i++) {
            let item = el[i];
            out.push(
                <a rel="noopener" aria-label={item.name} target="_blank" href={item.ref} className="socialBlock__link">
                    {item.icon}
                </a>
            );
        }

        return out;
    }

    render() {

        return (
            <div className="socialBlock">
                {this.buildItems()}
            </div>
        );
    }
}

export default SocialBlock;
