import React, { Component, Fragment } from "react";
import Modal from "react-modal";
import axios from "axios";
import PropTypes from "prop-types";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import PostComment from "../PostComment/PostComment";
import PostOwner from "../PostOwner/PostOwner";
import CuisineChip from "../CuisineChip";
import GetRestaurantRating from "../GetRestaurantRatings";
import "./PostModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    width: "80%",
    height: "80%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px"
  }
};

class PostModal extends Component {
  state = {
    modalIsOpen: false,
    inputValue: "",
    comments: [],
    showCuisines: false,
    showRating: false
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/comment/bypost/${this.props.post.id}`)
      .then(res => {
        this.setState({ comments: res.data }, () => {
          if (this.props.showModal) {
            this.openModal();
          }
        });
      });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    this.props.onClose();
  };
  _handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  _renderComments = () => {
    return (
      <div style={{ width: "100%", padding: "1rem" }}>
        {this.state.comments.map((comment, index) => {
          return <PostComment key={index} comment={comment} />;
        })}
      </div>
    );
  };
  _handleShowCuisinesOnClick = () => {
    this.setState(prevState => ({
      showCuisines: !prevState.showCuisines
    }));
  };

  _handleShowRatingOnClick = () => {
    this.setState(prevState => ({
      showRating: !prevState.showRating
    }));
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="post-modal-container">
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1f4343"
              }}
            >
              <img
                style={{ width: "100%" }}
                src={`data:image/jpeg;base64,${this.props.post.image}`}
                alt=""
              />
            </div>
            <div className="post-modal-reacts-container">
              <div style={{ padding: "1rem" }}>
                <PostOwner user={this.props.post.user} />
              </div>
              <div>
                <div className="post-modal-text">{this.props.post.text}</div>
                {this.props.type === "recipe" && (
                  <Fragment>
                    <div
                      style={{
                        color: "#1f4343",
                        marginLeft: "0.8rem",
                        width: "fit-content",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        cursor: "pointer"
                      }}
                      onClick={this._handleShowCuisinesOnClick}
                    >
                      show cuisines for recipe
                      {this.state.showCuisines ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </div>
                    <div>
                      {this.state.showCuisines && (
                        <div style={{ margin: "0.8rem" }}>
                          {this.props.post.cuisines.map((cuisine, index) => {
                            return (
                              <CuisineChip key={index} label={cuisine.name} />
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </Fragment>
                )}
                {this.props.type === "review" && (
                  <Fragment>
                    <div
                      style={{
                        color: "#1f4343",
                        marginLeft: "0.8rem",
                        width: "fit-content",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        cursor: "pointer"
                      }}
                      onClick={this._handleShowRatingOnClick}
                    >
                      Show ratings details
                      {this.state.showRating ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </div>
                    {this.state.showRating && (
                      <div style={{ marginRight: "0.8rem" }}>
                        <GetRestaurantRating
                          label="Dish"
                          rating={this.props.post.rating.dish}
                        />
                        <GetRestaurantRating
                          label="Price"
                          rating={this.props.post.rating.price}
                        />
                        <GetRestaurantRating
                          label="Service"
                          rating={this.props.post.rating.service}
                        />
                        <GetRestaurantRating
                          label="Location of restaurant"
                          rating={this.props.post.rating.location}
                        />
                        <GetRestaurantRating
                          label="restaurant's accessibility"
                          rating={this.props.post.rating.accessibility}
                        />
                      </div>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="post-modal-likes">
                <ThumbUpAltIcon />
                <span className="post-modal-number-of-likes">
                  {this.props.post.likes}
                </span>
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
