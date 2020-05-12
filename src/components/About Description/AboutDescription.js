import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/loading";
export default class AboutDescription extends Component {
  constructor() {
    super();
    this.state = {
      desc: "",
      loading: true,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information).then((result) => {
      this.setState({ desc: result[0]["about"], loading: false });
    });
  }
  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>
              <Col
                sm={12}
                md={12}
                lg={12}
                className="serviceName"
                className="serviceDescription"
              >
                {ReactHtmlParser(this.state.desc)}
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
