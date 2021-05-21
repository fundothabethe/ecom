const USER = "USER";

export const user = () => {
  return { type: USER };
};

const reducer = (state = false, action) => {
  //...
  switch (action.type) {
    case "USER":
      return !state;
    default:
      return state;
  }
};

export default reducer;
