import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class Subtotal extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Subtotal</Col>
          <Col>${this.props.priceAmount}</Col>
        </Row>
      </Container>
    );
  }
}

export default Subtotal;
