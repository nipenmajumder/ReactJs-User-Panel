import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class AllProject extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ProjectAll).then((result) => {
      this.setState({ myData: result });
    });
  }
  render() {
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
                    to={"/ProjectDetails/" + myList.id}
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
        <Container className="text-center mt-5">
          <Row>{myView}</Row>
        </Container>
      </Fragment>
    );
  }
}
