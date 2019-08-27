import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Collapse
} from "reactstrap";
import { connect } from "react-redux";
import { handleChange } from "../actions/promoCode";

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      promoCodeCollapse: false
    };
  }

  toggle() {
    this.setState(state => ({
      promoCodeCollapse: !this.state.promoCodeCollapse
    }));
  }

  handleChange = e => {
    this.props.handleChange(e);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col
            id="promo-code"
            style={{ textDecoration: "underline", color: "black" }}
            onClick={this.toggle}
          >
            {this.state.promoCodeCollapse
              ? "Hide promo code -"
              : "See promo code +"}
          </Col>
        </Row>
        <Row>
          <Col>
            <Collapse isOpen={this.state.promoCodeCollapse}>
              <Form>
                <FormGroup>
                  <Label for="promoCode">Promo Code</Label>
                  <Input
                    type="string"
                    name="promoCode"
                    id="promoCode"
                    value={this.props.promoCode}
                    placeholder="please input promo code"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <Button onClick={this.props.giveDiscount}>Apply</Button>
              </Form>
            </Collapse>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.value
});

export default connect(
  mapStateToProps,
  { handleChange }
)(PromoCode);
