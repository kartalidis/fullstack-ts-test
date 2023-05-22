import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { RepoItem } from '../reducers/reposReducers';

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOS
    });

    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', { params: { text: term } });

      const packages = data.objects.map((result: any) => {
        const repoItem: RepoItem = {data: result.package, selected: false};
        return repoItem;
      });

      dispatch({
        type: ActionType.SEARCH_REPOS_SUCCESS,
        payload: packages
      })
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOS_ERROR,
          payload: err.message,
        });
      }
    }
  };
};

export const toggleSavedSelection = (name: string, repos: RepoItem[]) => {
  const result : RepoItem[] = repos.map( (item: RepoItem) => {
    if(name !== item.data.name) {
      return item;
    }

    return {
      ...item,
      selected: !item.selected
    }
  });
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_SAVED_SELECTION,
      payload: result
    });
  };
};

export const toggleResultSelection = (name: string, repos: RepoItem[]) => {
  const result : RepoItem[] = repos.map( (item: RepoItem) => {
    if(name !== item.data.name) {
      return item;
    }

    return {
      ...item,
      selected: !item.selected
    }
  });
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_RESULT_SELECTION,
      payload: result
    });
  };
};

export const saveRepos = (repos: RepoItem[], saved: RepoItem[]) => {
  const selected = repos.filter(repo => repo.selected);
  const reposToSave = selected.map(repo => repo.selected === true ? {...repo, selected: false} : repo);
  const result = saved.concat(reposToSave);
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_REPOS,
      payload: result
    });
  };
};

export const deleteRepos = (saved: RepoItem[]) => {
  const result = saved.filter(repo => !repo.selected);
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_REPOS,
      payload: result
    });
  };
};