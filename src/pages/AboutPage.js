import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/About Description/AboutDescription";
import Footer from "../components/Footer/Footer";
export default class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="About" />
        <PageTop pagetitle="About Me" />
        <AboutDescription />
        <Footer />
      </Fragment>
    );
  }
}
