import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/loading";
export default class CourseDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let LongTitle: "";
    let TotalLecture: "";
    let TotalStudent: "";
    let LongDes: "";
    let SkillAll: "";
    let VideoUrl: "";
    let CourseLink: "";

    let CourseDetailsArray = this.props.CourseData;
    if (CourseDetailsArray.length == 1) {
      LongTitle = CourseDetailsArray[0]["long_title"];
      TotalLecture = CourseDetailsArray[0]["total_lecture"];
      TotalStudent = CourseDetailsArray[0]["total_student"];
      LongDes = CourseDetailsArray[0]["long_des"];
      SkillAll = CourseDetailsArray[0]["skill_all"];
      VideoUrl = CourseDetailsArray[0]["video_url"];
      CourseLink = CourseDetailsArray[0]["course_link"];
    }

    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="topPageContentCourse ">
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <h3 className="courseFullTitle">{LongTitle}</h3>
                  <h5 className="courseSubTitle">{TotalLecture}</h5>
                  <h5 className="courseSubTitle">{TotalStudent}</h5>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p className="courseDescription">{LongDes}</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h1 className="serviceName">Skill You Get</h1>
              <ul className="serviceDescription">
                {ReactHtmlParser(SkillAll)}
              </ul>
              <Button variant="primary">Buy Now</Button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Player>
                <source src={VideoUrl} />
                <BigPlayButton position="center" />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
