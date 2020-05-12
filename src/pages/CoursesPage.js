import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AllCourses from "../components/All Courses/AllCourses";
import Footer from "../components/Footer/Footer";

export default class CoursesPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      coursePassedID: match.params.courseId,
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Courses" />
        <PageTop />
        <AllCourses id={this.state.coursePassedID} />
        <Footer />
      </Fragment>
    );
  }
}
