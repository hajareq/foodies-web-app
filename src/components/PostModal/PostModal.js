import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import button from "../Button";
import "./PostModal.css";
import PostComment from "../PostComment/PostComment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px"
  }
};

class PostModal extends Component {
  state = {
    modalIsOpen: false,
    inputValue: ""
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  _handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  _renderComments = () => {
    return (
      <Fragment>
        <PostComment />
        <PostComment />
      </Fragment>
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="post-modal-container">
            <img src={this.props.img} alt="" />
            <div className="post-modal-reacts-container">
              <div className="post-modal-profile-container">
                <img
                  src={this.props.img}
                  alt=""
                  className="post-modal-profile-image"
                />
                <span className="post-modal-profile-username">Jane DOE</span>
              </div>
              <div className="post-modal-likes">
                <ThumbUpAltIcon fontSize="large" />
                <span className="post-modal-number-of-likes">100K</span>
              </div>
              {this._renderComments()}
              <div className="post-modal-add-comment">
                <input
                  type="text"
                  placeholder="Type your comment..."
                  value={this.state.inputValue}
                  className="post-modal-input"
                  onChange={this._handleChange}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
PostModal.propTypes = {
  img: PropTypes.string
};

PostModal.defaultProps = {
  img:
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
};

export default PostModal;
