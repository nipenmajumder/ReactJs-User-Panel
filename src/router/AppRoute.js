import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import Portfolio from "../pages/Portfolio";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectPage from "../pages/ProjectPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
export default class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/course" component={CoursesPage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/terms" component={TermsPage} />
          <Route exact path="/policy" component={PrivacyPage} />
          <Route
            exact
            path="/ProjectDetails/:projectId"
            component={ProjectPage}
          />
          <Route exact path="/CourseDetails" component={CourseDetailsPage} />
        </Switch>
      </Fragment>
    );
  }
}
