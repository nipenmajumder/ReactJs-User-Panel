import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/Course Details/CourseDetails";
import Footer from "../components/Footer/Footer";
import AppUrl from "../RestApi/AppUrl";
import RestClient from "../RestApi/RestClient";
export default class CourseDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      MyCourseID: match.params.courseId,
      CourseData: [],
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    RestClient.GetRequest(AppUrl.CourseDetails + this.state.MyCourseID)
      .then((result) => {
        this.setState({ CourseData: result });
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Course Details" />
        <CourseDetails CourseData={this.state.CourseData} />
        <Footer />
      </Fragment>
    );
  }
}
