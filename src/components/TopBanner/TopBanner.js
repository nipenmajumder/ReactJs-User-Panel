import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/loading";
export default class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      loaderClass: "text-center",
      mainDivClass: "d-none",
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeTopTitle)
      .then((result) => {
        this.setState({
          title: result[0]["home_title"],
          subtitle: result[0]["home_subtitle"],
          loaderClass: "d-none",
          mainDivClass: "text-center",
        });
      })
      .catch((error) => {
        this.setState({
          title: "???",
          subtitle: "???",
        });
      });
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className={this.state.loaderClass}>
                  <Loading />
                </Col>
                <Col className={this.state.mainDivClass}>
                  <h1 className="topTitle">{this.state.title}</h1>
                  <h4 className="topSubTitle">{this.state.subtitle}</h4>
                  <Button variant="primary">More Info</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}
