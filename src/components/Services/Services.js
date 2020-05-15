import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import WentWrong from "../WentWrong/WentWrong";
export default class Services extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      error: false,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Service).then((result) => {
      if (result == null) {
        this.setState({ error: true, loading: false });
      } else {
        this.setState({ myData: result, loading: false });
      }
    });
  }
  render() {
    if (this.state.error == false) {
      const myList = this.state.myData;
      const myView = myList.map((myList) => {
        return (
          <Col lg={4} md={6} sm={12}>
            <div className="serviceCard text-center">
              <img src={myList.service_logo} />
              <h2 className="serviceName">{myList.service_name}</h2>
              <p className="serviceDescription">{myList.service_description}</p>
            </div>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">MY SERVICES</h1>
            <Row>{myView}</Row>
          </Container>
        </Fragment>
      );
    } else if (this.state.error == true) {
      return <WentWrong />;
    }
  }
}
