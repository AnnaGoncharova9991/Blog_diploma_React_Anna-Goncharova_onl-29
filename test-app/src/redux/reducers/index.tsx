import { AnyAction, combineReducers } from 'redux';
import { LOGOUT } from '../actions/actions';
import authReducer from './authReducer';
import blogsReducer from './blogsReducer';
import articlesReducer from './articlesReducer';

const appReducer = combineReducers({
  auth: authReducer,
  blogs: blogsReducer,
  articles: articlesReducer,
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
  if (action.type === LOGOUT) {
    localStorage.clear();
    return appReducer({} as ReturnType<typeof appReducer>, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
