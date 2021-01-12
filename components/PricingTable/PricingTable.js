import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import BlocksButton from "../../components/BlocksButton/BlocksButton";
import "./PricingTable.scss";

class PricingTable extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    buildTable() {
        let { items } = this.props;
        if (typeof items === "undefined") {
            return;
        }
        let out = [];
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            out.push(
                <tr className={`pricingTable__item ${item.highlight && "pricingTable__item--highlighted"}`}>
                    <td className={`pricingTable__itemText`}><div className="pricingTable__itemIcon">{item.icon}</div> {item.value}</td>
                </tr>
            )
        }
        return out;
    }

    render() {
        return (
            <table className={`pricingTable ${this.props.emphasis && "pricingTable--emphasis"}`}>
                <thead>
                    <tr>
                        <td>
                            <h2 className="pricingTable__header">{this.props.title}</h2>
                            <p style={{ textAlign: "center" }}>Starting From:</p>
                            <h3 className="pricingTable__price">{this.props.price}<span className="pricingTable__zeros">.00</span></h3>
                            <div className="pricingTable__priceUnderline"></div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {this.buildTable()}
                </tbody>

            </table>
        );
    }
}

export default PricingTable;
