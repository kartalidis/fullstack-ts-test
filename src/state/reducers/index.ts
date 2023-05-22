import { combineReducers } from 'redux';
import reposReducer from './reposReducers';
import savedReducer from './savedReducers';

const reducers = combineReducers({
  repos: reposReducer,
  saved: savedReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;