import React, { Component, Fragment } from "react";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/Recent Projects/RecentProject";
import OurCourses from "../components/Our Courses/OurCourses";
import Video from "../components/Video/Video";
import Review from "../components/Review/Review";
import Footer from "../components/Footer/Footer";
export default class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Home" />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <OurCourses />
        <Video />
        <Review />
        <Footer />
      </Fragment>
    );
  }
}
