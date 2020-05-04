import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class OurCourses extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.CourseHome).then((result) => {
      this.setState({ myData: result });
    });
  }
  render() {
    const myList = this.state.myData;
    const myView = myList.map((myList) => {
      return (
        <Col lg={6} md={12} sm={12} className="p-2">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img className="courseImg" src={myList.short_img} />
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h5 className=" courseTitle text-justify">
                {myList.short_title}
              </h5>
              <p className=" courseDes text-justify">{myList.short_des}</p>
              <Link className="courseDetails float-left" to="/CourseDetails">
                Details
              </Link>
            </Col>
          </Row>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">OUR COURSES</h1>
          <Row>{myView}</Row>
        </Container>
      </Fragment>
    );
  }
}
