export const ADD_RECIPE_POST = "ADD_RECIPE_POST";

export const addRecipePost = recipe => {
  return {
    type: ADD_RECIPE_POST,
    payload: recipe
  };
};
