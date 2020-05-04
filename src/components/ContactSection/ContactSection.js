import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
export default class ContactSection extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      email: "",
      phone: "",
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.Footer).then((result) => {
      this.setState({
        address: result[0]["address"],
        email: result[0]["email"],
        phone: result[0]["phone"],
      });
    });
  }
  sendContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    let JsonObject = { name: name, email: email, msg: msg };

    RestClient.PostRequest(AppUrl.ContactSend, JSON.stringify(JsonObject))
      .then((result) => {
        alert(result);
      })
      .catch((error) => {
        alert("Error");
      });
  }
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName ">Quick Connect</h1>
              <Form>
                <Form.Group>
                  <Form.Label className="serviceDescription">Name</Form.Label>
                  <Form.Control id="name" type="text" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Email Address
                  </Form.Label>
                  <Form.Control id="email" type="email" />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="serviceDescription">
                    Message
                  </Form.Label>
                  <Form.Control id="msg" as="textarea" rows="3" type="text" />
                </Form.Group>
                <Button onClick={this.sendContact} variant="primary">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName ">Discuss Now</h1>
              <p className="serviceDescription">{this.state.address}</p>
              <p className="serviceDescription">
                <FontAwesomeIcon icon={faEnvelope} /> {this.state.email}
              </p>
              <p className="serviceDescription">
                <FontAwesomeIcon icon={faPhone} /> {this.state.phone}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
