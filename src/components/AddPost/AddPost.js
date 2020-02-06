import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import StarRatings from "react-star-ratings";
import Button from "../Button";
import { addRecipePost } from "../../redux/actions/addPostAction";
import "./AddPost.css";
import CuisineChip from "../CuisineChip/CuisineChip";
import PhotoIcon from "@material-ui/icons/Photo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

class AddPost extends Component {
  state = {
    inputValue: "",
    imagePreviewURL: "",
    addRating: false,
    addRecipe: true,
    showCuisines: false,
    cuisines: [],
    rating: 0
  };
  _handleRatingOnChange = newRating => {
    this.setState({
      rating: newRating
    });
  };
  _handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsBinaryString(file);
    reader.onloadend = () => {
      this.setState({
        imagePreviewURL: btoa(reader.result)
      });
    };
  }
  handleRecipeOnClick = () => {
    this.setState({ addRecipe: true, addRating: false });
  };
  handleRecomendationOnClick = () => {
    this.setState({ addRecipe: false, showCuisines: false });
  };
  _handleShowCuisinesOnClick = () => {
    this.setState(prevState => ({
      showCuisines: !prevState.showCuisines
    }));
  };
  _handleOnPost = () => {
    const data = new FormData();
    data.append("file", this.state.file);
    const recipe = {
      cuisines: this.state.cuisines,
      image: this.state.imagePreviewURL,
      text: this.state.inputValue
    };
    axios.post("http://localhost:8080/api/post/recipe/1", recipe).then(res => {
      this.props.addRecipePost(res.data);
    });
  };
  _handleCuisineOnClick = id => {
    if (this.state.cuisines.some(cuisine => cuisine.id === id)) {
      let cuisines = this.state.cuisines;
      cuisines = cuisines.filter(item => item.id !== id);
      this.setState({ cuisines: cuisines });
    } else {
      this.setState(prevState => ({
        cuisines: [...prevState.cuisines, { id: id }]
      }));
    }
  };
  _handleAddRatingOnClick = () => {
    this.setState(prevState => ({
      addRating: !prevState.addRating
    }));
  };
  render() {
    const cuisines = [
      { id: 20, label: "Healthy" },
      { id: 41, label: "Diet meals" },
      { id: 12, label: "American" },
      { id: 10, label: "Ice cream" },
      { id: 5, label: "Asian" },
      { id: 42, label: "Biscuit" },
      { id: 43, label: "Drinks" },
      { id: 44, label: "Burgers" },
      { id: 28, label: "Chinese" },
      { id: 45, label: "Chocolate" },
      { id: 51, label: "Couscous" },
      { id: 52, label: "Crepe" },
      { id: 46, label: "Kids" },
      { id: 15, label: "Fast food" },
      { id: 4, label: "Sea food" },
      { id: 47, label: "Pastery" },
      { id: 19, label: "Grill" },
      { id: 7, label: "Indian" },
      { id: 13, label: "Italian" },
      { id: 53, label: "Juice" },
      { id: 54, label: "Kebab" },
      { id: 26, label: "Moroccan" },
      { id: 55, label: "Paella" },
      { id: 56, label: "Panninis" },
      { id: 16, label: "Pizza" },
      { id: 57, label: "Fish" },
      { id: 58, label: "Chicken" },
      { id: 59, label: "Pasta" },
      { id: 60, label: "Fresh food" },
      { id: 49, label: "Salads" },
      { id: 61, label: "Sandwiches" },
      { id: 50, label: "Soups" },
      { id: 8, label: "Sushis" },
      { id: 48, label: "Tacos" },
      { id: 27, label: "Tapas" },
      { id: 21, label: "Meats" },
      { id: 32, label: "Bakery" },
      { id: 30, label: "Vegan" }
    ];

    let { imagePreviewURL } = this.state;
    let $imagePreview = null;
    if (imagePreviewURL) {
      $imagePreview = (
        <img
          className="add-new-post-image-preview"
          src={`data:image/jpeg;base64,${imagePreviewURL}`}
          alt="preview"
        />
      );
    }

    return (
      <div className="add-new-post-container">
        <div className="add-new-post-title-container">Add a new post</div>
        <div>
          <div className="add-new-post-profile-picture-input-container">
            <img
              alt={`your profile avatar`}
              className="profile-picture"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1143810714.jpg?crop=0.668xw:1.00xh;0.0425xw,0&resize=480:*"
            ></img>

            <input
              type="text"
              className="add-new-post-input"
              placeholder="Write down your foody thought"
              value={this.state.inputValue}
              onChange={this._handleChange}
            />
          </div>
          <div className="add-new-post-buttons-container">
            <div className="add-new-post-photo-upload-btn-wrapper">
              <Button
                label="Add Photo"
                outlined="true"
                textColor="#1f4343"
                icon={<PhotoIcon />}
              />
              <input
                type="file"
                name="myfile"
                accept="image/*"
                onChange={e => this._handleImageChange(e)}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "fit-content", marginRight: "0.5rem" }}>
                <Button
                  label="Recipe"
                  outlined={!this.state.addRecipe}
                  onClick={this.handleRecipeOnClick}
                />
              </div>
              <div style={{ width: "fit-content" }}>
                <Button
                  label="Recomendation"
                  outlined={this.state.addRecipe}
                  onClick={this.handleRecomendationOnClick}
                />
              </div>
            </div>
          </div>
          <div style={{ margin: "0.8rem" }}>{$imagePreview}</div>
          {this.state.addRecipe && (
            <div
              style={{
                color: "#1f4343",
                margin: "0.8rem",
                width: "fit-content",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                cursor: "pointer"
              }}
              onClick={this._handleShowCuisinesOnClick}
            >
              Choose cuisines for your recipe
              {this.state.showCuisines ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          )}
          {this.state.showCuisines && (
            <div style={{ margin: "0.8rem" }}>
              {cuisines.map((cuisine, index) => {
                return (
                  <CuisineChip
                    key={index}
                    onClick={() => this._handleCuisineOnClick(cuisine.id)}
                    label={cuisine.label}
                  />
                );
              })}
            </div>
          )}
          {!this.state.addRecipe && (
            <div
              style={{
                color: "#1f4343",
                margin: "0.8rem",
                width: "fit-content",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                cursor: "pointer"
              }}
              onClick={this._handleAddRatingOnClick}
            >
              Choose your rating
              {this.state.addRating ? (
                <ArrowDropUpIcon />
              ) : (
                <ArrowDropDownIcon />
              )}
            </div>
          )}
          {this.state.addRating && (
            <div style={{ margin: "0.8rem" }}>
              <StarRatings
                starDimension="20px"
                rating={this.state.rating}
                starHoverColor="#8de4af"
                starRatedColor="#1f4343"
                changeRating={this._handleRatingOnChange}
                numberOfStars={5}
                name="rating"
              />
            </div>
          )}

          <div style={{ padding: "1rem" }}>
            <Button
              label="Post"
              width="15rem"
              outlined={this.state.imagePreviewURL ? false : true}
              onClick={this.state.imagePreviewURL ? this._handleOnPost : null}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { addRecipePost })(AddPost);
