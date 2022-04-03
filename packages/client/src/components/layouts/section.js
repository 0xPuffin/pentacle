import React from "react";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  return <>{children}</>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
