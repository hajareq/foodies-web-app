import React, { Component } from "react";
import RecomendationCard from "./RecomendationCard";
import "./assets/css/index.css";

class Recomendations extends Component {
  render() {
    const cards = [
      { img: "", label: "Healthy" },
      { img: "", label: "Diet meals" },
      { img: "", label: "American" },
      { img: "", label: "Ice cream" },
      { img: "", label: "Asian" },
      { img: "", label: "Biscuit" },
      { img: "", label: "Drinks" },
      { img: "", label: "Burgers" },
      { img: "", label: "Chawarmas" },
      { img: "", label: "Chinese" },
      { img: "", label: "Chocolate" },
      { img: "", label: "Couscous" },
      { img: "", label: "Crepe" },
      { img: "", label: "Kids" },
      { img: "", label: "Fast food" },
      { img: "", label: "Sea food" },
      { img: "", label: "Pastery" },
      { img: "", label: "Grill" },
      { img: "", label: "Indian" },
      { img: "", label: "Italian" },
      { img: "", label: "Juice" },
      { img: "", label: "Kebab" },
      { img: "", label: "Moroccan" },
      { img: "", label: "Paella" },
      { img: "", label: "Panninis" },
      { img: "", label: "Pizza" },
      { img: "", label: "Fish" },
      { img: "", label: "Chicken" },
      { img: "", label: "Fresh food" },
      { img: "", label: "Pasta" },
      { img: "", label: "Salads" },
      { img: "", label: "Sandwiches" },
      { img: "", label: "Soups" },
      { img: "", label: "Sushis" },
      { img: "", label: "Tacos" },
      { img: "", label: "Tapas" },
      { img: "", label: "Meats" },
      { img: "", label: "Bakery" },
      { img: "", label: "Vegan" }
    ];

    return (
      <div className="intersets-cover">
        <div className="intersets-container">
          {cards.map((item, key) => {
            return (
              <RecomendationCard key={key} img={item.img} label={item.label} />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Recomendations;
