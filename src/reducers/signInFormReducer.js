import {REDUCER_TYPES, TYPES} from '../types/reducerTypes';

export const initialState = {
  username: '',
  password: '',
};

export function signInFormReducer(state, action) {
  switch (action.type) {
    case REDUCER_TYPES: {
      // set key value
      return {...state, [action.payload.key]: action.payload.value};
    }
    default:
      return initialState;
  }
}
