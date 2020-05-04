import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player, BigPlayButton } from "video-react";
export default class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedPage p-0">
          <div className="topPageOverlay">
            <Container className="topPageContentCourse ">
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <h3 className="courseFullTitle">
                    Full Dynamic Website With Admin Panel
                  </h3>
                  <h5 className="courseSubTitle">Total Lecture-30</h5>
                  <h5 className="courseSubTitle">Total Student-30</h5>
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <p className="courseDescription">
                    I am a highly talented, experienced, professional and
                    cooperative software engineer, I am working in programming
                    and web world for more than 4 years .I assure you a wide
                    range of quality IT services. Web development, mobile app
                    development and UI design the major filed i am expert in.
                    Moreover i have teaching passion. I makes video tutorial to
                    share my knowledge. My over all skill makes me a complete
                    software developer, so you can hire me for your projects.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Container className="mt-5">
          <Row>
            <Col sm={12} md={6} lg={6}>
              <h1 className="serviceName">Skill You Get</h1>
              <ul>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
                <li className="serviceDescription">
                  Unlimited Dynamic Product Category
                </li>
              </ul>
              <Button variant="primary">Buy Now</Button>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <Player>
                <source src="https://www.youtube.com/watch?v=B3zK9ZgYmsM" />
                <BigPlayButton position="center" />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
