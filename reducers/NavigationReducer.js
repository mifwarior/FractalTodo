import { actions } from "../constants";

export default function NavigationReducer(state = 0, action) {
  switch (action.type) {
    case actions.GO_HOME:
      return 0;
    case actions.GO_INTO:
      return action.payload.id;
    default:
      return state;
  }
}