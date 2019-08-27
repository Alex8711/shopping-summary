import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class EstimatedTaxesFees extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Est. taxes&fees</Col>
          <Col>${this.props.taxesFeesAmount}</Col>
        </Row>
      </Container>
    );
  }
}

export default EstimatedTaxesFees;
