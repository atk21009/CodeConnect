import { FETCH_FORMS } from "../actions/types";

export default function formReducer(state = [], action) {
  switch (action.type) {
    case FETCH_FORMS:
      return action.payload;
    default:
      return state;
  }
}
