const ADD_PRODUCT = "ADD_PRODUCT";

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.playload];
    default:
      return state;
  }
}

export default cartReducer;
