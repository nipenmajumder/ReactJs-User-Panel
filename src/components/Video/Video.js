import React, { Component, Fragment } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      video_description: "",
      video_url: "",
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Video).then((result) => {
      this.setState({
        video_description: result[0]["video_description"],
        video_url: result[0]["video_url"],
      });
    });
  }
  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col lg={12} md={12} sm={12} className="videoCard">
              <div>
                <p className="videoTitle">How I Do</p>
                <p className="videoDes"> {this.state.video_description}</p>
                <p>
                  <FontAwesomeIcon
                    onClick={this.modalOpen}
                    className="playBtn"
                    icon={faPlayCircle}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player>
              <source src={this.state.video_url} />
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}
