import { UPDATE_PROFILE, TOGGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  isVisibleProfile: true,
  firstName: "firstName",
  lastName: "lastName",
  role: "user",
  phone: "79001234567",
  country: "Russia",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE_PROFILE:
      return { ...state, isVisibleProfile: !state.isVisibleProfile };
    case UPDATE_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
