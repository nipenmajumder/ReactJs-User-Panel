import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutPrivacy from "../components/AboutPrivacy/AboutPrivacy";
import Footer from "../components/Footer/Footer";
export default class PrivacyPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Policy" />
        <PageTop pagetitle="Terms of Use" />
        <AboutPrivacy />
        <Footer />
      </Fragment>
    );
  }
}
