import React, { Component } from "react";
import { Row, Col, Container, Media, Collapse } from "reactstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      itemDetailsCollapse: false
    };
  }
  toggle() {
    this.setState(state => ({
      itemDetailsCollapse: !state.itemDetailsCollapse
    }));
  }
  render() {
    return (
      <Container>
        <Row>
          <Col
            id="item-details"
            style={{ textDecoration: "underline", color: "black" }}
            onClick={this.toggle}
          >
            {this.state.itemDetailsCollapse
              ? "Hide item details -"
              : "See item details +"}
          </Col>
        </Row>
        <Row>
          <Collapse isOpen={this.state.itemDetailsCollapse}>
            <Media>
              <Media left>
                <img
                  alt="Gaming Chair"
                  width="100"
                  height="100"
                  src="https://i5.walmartimages.com/asr/3e2b5dff-afc4-4085-a2d5-6f3aa658e490_1.11ab96630285b84d37758ed8af0569bd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                />
              </Media>
              <Media body>
                Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair,Red
                <Row>
                  <Col>$99</Col>
                  <Col>Qty:1</Col>
                </Row>
                <Row>
                  <Col
                    style={{ textDecoration: "line-through", color: "grey" }}
                  >
                    $101
                  </Col>
                </Row>
              </Media>
            </Media>
          </Collapse>
        </Row>
      </Container>
    );
  }
}

export default ItemDetails;
