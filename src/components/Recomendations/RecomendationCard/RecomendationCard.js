import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./assets/css/RecomendationCard.css";

class RecomendationCard extends Component {
  render() {
    return (
      <Fragment>
        <div
          className="recomendation-container"
          style={{ backgroundImage: `url(${this.props.img})` }}
        >
          <div className="overlay"></div>
          <div className="recomendation-title">{this.props.label}</div>
        </div>
      </Fragment>
    );
  }
}

RecomendationCard.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string
};

RecomendationCard.defaultProps = {
  img:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*",
  label: "Beauty"
};
export default RecomendationCard;
