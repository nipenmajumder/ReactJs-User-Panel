import React, { Component, Fragment } from "react";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/loading";
import WentWrong from "../WentWrong/WentWrong";
export default class RecentProject extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
      error: false,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Project).then((result) => {
      if (result == null) {
        this.setState({ error: true, loading: false });
      } else {
        this.setState({ myData: result, loading: false });
      }
    });
  }
  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else if (this.state.error == false) {
      const myList = this.state.myData;
      const myView = myList.map((myList) => {
        return (
          <Col sm={12} md={6} lg={4} className="p-2">
            <h1>
              <Card className="projectCard">
                <Card.Img variant="top" src={myList.img_one} />
                <Card.Body>
                  <Card.Title className="projectCardTitle">
                    {myList.project_name}
                  </Card.Title>
                  <Card.Text className="projectCardDes">
                    {myList.short_description}
                  </Card.Text>
                  <Button variant="primary">
                    <Link
                      className="link-style"
                      to={
                        "/ProjectDetails/" +
                        myList.id +
                        "/" +
                        myList.project_name
                      }
                    >
                      Details
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </h1>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">Recent Projects</h1>
            <Row>{myView}</Row>
          </Container>
        </Fragment>
      );
    } else if (this.state.error == true) {
      return <WentWrong />;
    }
  }
}
