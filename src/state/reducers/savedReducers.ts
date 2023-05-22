import { ActionType } from "../action-types";
import { Action } from "../actions";
import { RepoItem } from "./reposReducers";

interface savedState{
  saved: RepoItem[];
}

const initState = {
  saved: []
};

export const savedReducer = (
  state: savedState = initState, 
  action: Action
): savedState => {
  switch (action.type) {
    case ActionType.SAVE_REPOS:
      return { saved: action.payload };
    case ActionType.DELETE_REPOS:
      return { saved: action.payload };
    case ActionType.TOGGLE_SAVED_SELECTION:
      return { saved: action.payload };
    default:
      return state;
  }
};

export default savedReducer;