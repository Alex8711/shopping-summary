import React, { Component } from "react";
import { Container } from "reactstrap";
import Subtotal from "./components/Subtotal";
import PickupSavings from "./components/PickupSavings";
import EstimatedTaxesFees from "./components/EstimatedTaxesFees";
import EstimatedTotal from "./components/EstimatedTotal";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { handleChange } from "./actions/promoCode";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 100,
      savings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      taxesFeesRate: 0.05
    };
  }
  componentDidMount = () => {
    this.setState(
      { taxes: this.state.price * this.state.taxesFeesRate },
      function() {
        this.setState({
          estimatedTotal:
            this.state.price + this.state.savings + this.state.taxes
        });
      }
    );
  };

  handleApplyPromoCode = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      });
    }
  };

  render() {
    return (
      <div>
        <Container className="shopping-summary-page">
          <Subtotal priceAmount={this.state.price} />
          <PickupSavings savingsAmount={this.state.savings} />
          <EstimatedTaxesFees taxesFeesAmount={this.state.taxes} />
          <hr />
          <EstimatedTotal
            estimatedTotalAmount={this.state.estimatedTotal.toFixed(2)}
          />
          <ItemDetails />
          <PromoCode giveDiscount={() => this.handleApplyPromoCode()} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(App);
