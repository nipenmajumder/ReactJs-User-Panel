import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from "react-html-parser";
export default class AboutPrivacy extends Component {
  constructor() {
    super();
    this.state = {
      desc: "",
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information).then((result) => {
      this.setState({ desc: result[0]["privacy"] });
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={12} lg={12}>
              {ReactHtmlParser(this.state.desc)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
