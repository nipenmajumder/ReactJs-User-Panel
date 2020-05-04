import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from "react-html-parser";
export default class RefundDescription extends Component {
  constructor() {
    super();
    this.state = {
      desc: "",
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information).then((result) => {
      this.setState({ desc: result[0]["refund"] });
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>{ReactHtmlParser(this.state.desc)}</Row>
        </Container>
      </Fragment>
    );
  }
}
