import { PROMO_CODE } from "../actions/promoCode";

const promoCodeReducerDefaultState = { value: "" };
export default (state = promoCodeReducerDefaultState, action) => {
  switch (action.type) {
    case PROMO_CODE:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};
