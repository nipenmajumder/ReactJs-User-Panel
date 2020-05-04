import React, { Component, Fragment } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

export default class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="topPageContent">
              <Row>
                <Col className="text-center">
                  <h4 className="pageTitle">{this.props.pagetitle}</h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
