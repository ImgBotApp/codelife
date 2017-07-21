import React, {Component} from "react";
import {translate} from "react-i18next";
import {Link} from "react-router";
import {connect} from "react-redux";
import "./Footer.css";

// Nav Component
// Contains a list of links in Footer format, inserted at the bottom of each page

class Nav extends Component {

  render() {

    const {t, user} = this.props;

    return (
      <footer id="footer">
        <Link className="link" to="/glossary">{ t("Glossary") }</Link>
      </footer>
    );
  }
}

Nav = connect(state => ({
  user: state.auth.user
}))(Nav);
Nav = translate()(Nav);
export default Nav;