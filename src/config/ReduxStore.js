import {createStore, applyMiddleware, combineReducers} from 'redux';

import ReduxThunk from 'redux-thunk';

import formReducer from '../reducers/formReducer';

/**
 *
 * Combine reducers and config storage for each if needed
 *
 */
const rootReducer = combineReducers({
  form: formReducer,
});

//create redux store
export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));
