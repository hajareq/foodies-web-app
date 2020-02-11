export const FETCH_RECIPE_POSTS = "FETCH_RECIPE_POSTS";
export const FETCH_REVIEW_POSTS = "FETCH_REVIEW_POSTS";
export const FETCH_REVIEWS_BY_RESTAURANT = "FETCH_REVIEWS_BYRESTAURANT";

export const fetchRecipePosts = posts => {
  return {
    type: FETCH_RECIPE_POSTS,
    payload: posts
  };
};

export const fetchReviewPosts = posts => {
  return {
    type: FETCH_REVIEW_POSTS,
    payload: posts
  };
};

export const fetchReviewsByRestaurant = posts => {
  return {
    type: FETCH_REVIEWS_BY_RESTAURANT,
    payload: posts
  };
};
