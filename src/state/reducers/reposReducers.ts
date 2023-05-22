import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface RepoItem{
  data: PackageData;
  selected: boolean;
}

export interface PackageData{
  name: string;
  scope: string;
  version: string;
  description: string;
}

interface ReposState{
  loading: boolean;
  error: string | null;
  data: RepoItem[];
}

const initState = {
  loading: false,
  error: null,
  data: []
};

export const reposReducer = (
  state: ReposState = initState, 
  action: Action
): ReposState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionType.TOGGLE_RESULT_SELECTION:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default reposReducer;