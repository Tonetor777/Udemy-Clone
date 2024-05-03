import { ADD_TO_CART, REMOVE_CART_ITEM, CLEAR_CART, GET_CART_TOTAL } from '../actions';

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const tempArr = state.cart.filter((item) => item.courseID === action.payload.courseID);
      if (tempArr.length < 1) {
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      }
      return { ...state };

    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter(item => item.courseID !== action.payload);
      return {
        ...state,
        cart: tempCart
      };

    case GET_CART_TOTAL:
      const totalAmount = state.cart.reduce((total, cartItem) => {
        total += cartItem.discounted_price;
        return total;
      }, 0);
      return {
        ...state,
        total_items: state.cart.length,
        total_amount: totalAmount
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    default:
      throw new Error(`No matching "${action.type}" - action type`);
  }
};

export default cart_reducer;
