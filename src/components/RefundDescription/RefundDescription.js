import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/loading";
import WentWrong from "../WentWrong/WentWrong";
export default class RefundDescription extends Component {
  constructor() {
    super();
    this.state = {
      desc: "",
      loading: true,
      error: false,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Information).then((result) => {
      if (result == null) {
        this.setState({ error: true, loading: false });
      } else {
        this.setState({ desc: result[0]["refund"], loading: false });
      }
    });
  }
  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else if (this.state.error == false) {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>{ReactHtmlParser(this.state.desc)}</Row>
          </Container>
        </Fragment>
      );
    } else if (this.state.error == true) {
      return <WentWrong />;
    }
  }
}
