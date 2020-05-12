import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/loading";
export default class projectDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      myProjectID: props.id,
      short_description: "",
      project_features: "",
      live_preview: "",
      img_two: "",
      project_name: "",
      loading: true,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectDetails + this.state.myProjectID)
      .then((result) => {
        this.setState({
          short_description: result[0]["short_description"],
          project_features: result[0]["project_features"],
          live_preview: result[0]["live_preview"],
          img_two: result[0]["img_two"],
          project_name: result[0]["project_name"],
          loading: false,
        });
      })
      .catch((error) => {});
  }
  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <img className="mt-4 w-100" src={this.state.img_two} />
              </Col>
              <Col lg={6} md={6} sm={12}>
                <h2 className="serviceName">{this.state.project_name}</h2>
                <p className="serviceDescription">
                  {this.state.short_description}
                </p>
                <ul className="serviceDescription">
                  {ReactHtmlParser(this.state.project_features)}
                </ul>
                <Button variant="primary">{this.state.live_preview}</Button>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }
}
