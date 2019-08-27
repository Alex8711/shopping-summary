import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";

class EstimatedTotal extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Est. total</h2>
          </Col>
          <Col>
            <h2>${this.props.estimatedTotalAmount}</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EstimatedTotal;
