export const FETCH_ALL_POSTS = "FETCH_ALL_POSTS";

const fetchAllPosts = posts => {
  return {
    type: FETCH_ALL_POSTS,
    payload: posts
  };
};

export default fetchAllPosts;
