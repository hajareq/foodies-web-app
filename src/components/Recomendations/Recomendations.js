import React, { Component } from "react";
import RecomendationCard from "./RecomendationCard";
import "./assets/css/index.css";
import Healthy from "./assets/healthy.jpg";
import American from "./assets/american.jpg";
import Asian from "./assets/asian.jpg";
import Biscuits from "./assets/biscuits.jpg";
import Burgers from "./assets/burgers.jpg";
import DietMeals from "./assets/diet-meals.jpg";
import Drinks from "./assets/drinks.jpg";
import IceCream from "./assets/ice-cream.jpg";
import Couscous from "./assets/couscous.jpg";
import Chinese from "./assets/chinese.jpg";
import Chocolate from "./assets/chocolate.jpg";
import Crepe from "./assets/crepe.jpg";
import KidsFood from "./assets/kids-food.jpg";
import FastFood from "./assets/fast-food.jpg";
import SeaFood from "./assets/sea-food.jpg";
import Pastery from "./assets/pastery.jpg";
import Grill from "./assets/grill.jpg";
import Indian from "./assets/indian.jpg";
import Italian from "./assets/italian.jpg";
import Juice from "./assets/juice.jpg";

class Recomendations extends Component {
  render() {
    const cards = [
      {
        img: Healthy,
        label: "Healthy"
      },
      { img: DietMeals, label: "Diet meals" },
      { img: American, label: "American" },
      { img: IceCream, label: "Ice cream" },
      { img: Asian, label: "Asian" },
      { img: Biscuits, label: "Biscuit" },
      { img: Drinks, label: "Drinks" },
      { img: Burgers, label: "Burgers" },
      { img: Chinese, label: "Chinese" },
      { img: Chocolate, label: "Chocolate" },
      { img: Couscous, label: "Couscous" },
      { img: Crepe, label: "Crepe" },
      { img: KidsFood, label: "Kids" },
      { img: FastFood, label: "Fast food" },
      { img: SeaFood, label: "Sea food" },
      { img: Pastery, label: "Pastery" },
      { img: Grill, label: "Grill" },
      { img: Indian, label: "Indian" },
      { img: Italian, label: "Italian" },
      { img: Juice, label: "Juice" },
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
