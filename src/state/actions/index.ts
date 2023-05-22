import { ActionType } from "../action-types";
import { RepoItem } from "../reducers/reposReducers";

interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
}

interface SearchReposSuccessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: RepoItem[];
}

interface SearchReposErrorAction {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

interface ToggleResultSelectionAction {
  type: ActionType.TOGGLE_RESULT_SELECTION;
  payload: RepoItem[];
}

interface ToggleSavedSelectionAction {
  type: ActionType.TOGGLE_SAVED_SELECTION;
  payload: RepoItem[];
}

interface SaveReposAction {
  type: ActionType.SAVE_REPOS;
  payload: RepoItem[];
}

interface DeleteReposAction {
  type: ActionType.DELETE_REPOS;
  payload: RepoItem[];
}

export type Action = SearchReposAction | SearchReposSuccessAction | SearchReposErrorAction | ToggleResultSelectionAction | ToggleSavedSelectionAction | SaveReposAction | DeleteReposAction;