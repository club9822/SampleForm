import {REDUCER_TYPES, } from '../types/reducerTypes';
import {ACTION_TYPES} from '../types/actionTypes';

export const initialState = {
  username: '',
  password: '',
};

 function formReducer(state, action) {
     if(__DEV__){
         console.log('log::--reducer',state,action)
     }
  switch (action.type) {
    case REDUCER_TYPES: {
      // set key value
      return {...state, [action.payload.key]: action.payload.value};
    }

      case ACTION_TYPES.DISPATCH_FROM_PAYLOAD:{

          return {...state,...action.payload}
      }
    default:
      return initialState;
  }
}

export default formReducer
