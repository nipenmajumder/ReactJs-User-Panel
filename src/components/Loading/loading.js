import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import loading from "../../asset/image/loader.svg";
export default class Loading extends Component {
  render() {
    return (
      <Fragment>
        <Container className=" text-center">
          <Row>
            <Col>
              <img className="loaderAnimation" src={loading} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
