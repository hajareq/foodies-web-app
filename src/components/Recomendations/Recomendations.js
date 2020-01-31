import React, { Component } from "react";
import RecomendationCard from "./RecomendationCard";
import Button from "../Button";
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
import Kebab from "./assets/kebab.jpg";
import Moroccan from "./assets/moroccan.jpg";
import Paella from "./assets/paella.jpg";
import Panninis from "./assets/panninis.jpg";
import Pizza from "./assets/pizza.jpg";
import Fish from "./assets/fish.jpg";
import Chicken from "./assets/chicken.jpg";
import FreshFood from "./assets/fresh-food.jpg";
import Pasta from "./assets/pasta.jpg";
import Salads from "./assets/salads.jpg";
import Sandwiches from "./assets/sandwich.jpg";
import Soups from "./assets/soups.jpg";
import Sushis from "./assets/sushis.jpg";
import Tacos from "./assets/tacos.jpg";
import Tapas from "./assets/tapas.jpg";
import Meats from "./assets/meats.jpg";
import Bakery from "./assets/bakery.jpg";
import Vegan from "./assets/vegan.jpg";

class Recomendations extends Component {
  state = {
    cuisines: []
  };
  handleOnClick = (selected, index) => {
    if (!selected) {
      this.setState(prevState => ({
        cuisines: [...prevState.cuisines, index]
      }));
    } else {
      let cuisines = this.state.cuisines;
      cuisines = cuisines.filter(item => item !== index);
      this.setState({ cuisines: cuisines });
    }
  };
  handleOnClickButton = () => {
    this.props.onClick(this.state.cuisines);
  };
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
      { img: Kebab, label: "Kebab" },
      { img: Moroccan, label: "Moroccan" },
      { img: Paella, label: "Paella" },
      { img: Panninis, label: "Panninis" },
      { img: Pizza, label: "Pizza" },
      { img: Fish, label: "Fish" },
      { img: Chicken, label: "Chicken" },
      { img: FreshFood, label: "Fresh food" },
      { img: Pasta, label: "Pasta" },
      { img: Salads, label: "Salads" },
      { img: Sandwiches, label: "Sandwiches" },
      { img: Soups, label: "Soups" },
      { img: Sushis, label: "Sushis" },
      { img: Tacos, label: "Tacos" },
      { img: Tapas, label: "Tapas" },
      { img: Meats, label: "Meats" },
      { img: Bakery, label: "Bakery" },
      { img: Vegan, label: "Vegan" }
    ];

    return (
      <div className="intersets-cover">
        <div className="intersets-container">
          {cards.map((item, index) => {
            return (
              <RecomendationCard
                key={index}
                img={item.img}
                label={item.label}
                onClick={selected => this.handleOnClick(selected, index)}
              />
            );
          })}
          <Button
            linkTo="/Feed"
            width="50%"
            label="Done"
            onClick={this.handleOnClickButton}
          />
        </div>
      </div>
    );
  }
}
export default Recomendations;
