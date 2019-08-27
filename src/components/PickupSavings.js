import React, { Component } from "react";
import { Row, Col, Container, Tooltip } from "reactstrap";

class PickupSavings extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col
            id="pickupSavings"
            style={{
              textDecoration: "underline",
              color: "black"
            }}
          >
            Pickup savings
          </Col>
          <Tooltip
            placement="bottom"
            isOpen={this.state.tooltipOpen}
            target="pickupSavings"
            toggle={this.toggle}
          >
            Picking up your order in the store helps cut costs, and we pass the
            savings on to you.
          </Tooltip>
          <Col>-${this.props.savingsAmount * -1}</Col>
        </Row>
      </Container>
    );
  }
}

export default PickupSavings;
