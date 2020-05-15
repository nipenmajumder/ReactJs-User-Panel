import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClient";
import Loading from "../Loading/loading";
import WentWrong from "../WentWrong/WentWrong";
export default class Review extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
      loading: true,
      error: false,
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ClientReview)
      .then((result) => {
        if (result == null) {
          this.setState({ error: true, loading: false });
        } else {
          this.setState({ myData: result, loading: false });
        }
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  render() {
    if (this.state.loading == true) {
      return <Loading />;
    } else if (this.state.error == false) {
      const myList = this.state.myData;
      const myView = myList.map((myList) => {
        return (
          <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <img className="circleImg" src={myList.client_img} />
                <h1 className="serviceName">{myList.client_title}</h1>
                <p className="serviceDescription">
                  {myList.client_description}
                </p>
              </Col>
            </Row>
          </div>
        );
      });
      var settings = {
        autoplaySpeed: 800,
        autoplay: true,
        dots: true,
        speed: 3000,
        infinite: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="serviceMainTitle">CLIENT SAYS</h1>
            <Slider {...settings}>{myView}</Slider>
          </Container>
        </Fragment>
      );
    } else if (this.state.error == true) {
      return <WentWrong />;
    }
  }
}
