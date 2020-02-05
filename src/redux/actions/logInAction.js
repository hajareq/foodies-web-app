export const LOG_IN = "LOG_IN";

export const logIn = user => {
  return {
    type: LOG_IN,
    payload: user
  };
};
