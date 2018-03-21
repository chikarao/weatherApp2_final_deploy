import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      //a new [{city}, {city}, {city}]
      //cannot do state.push[action.payload.data]
      // must create new array to have it recognize change in state
      // just list setState
      // can do state.concat([action.payload.data])
  }
  return state;
}
