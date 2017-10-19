import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import cloneDeep from 'lodash.clonedeep'
import get from 'lodash.get'

import initialState from './initialState';

const appReducer = (state = initialState, action) => {
  console.log('action', action)
  const newState = cloneDeep(state)

  global.state = newState
  return newState;
};

export const rootReducer = combineReducers({
  routing: routerReducer,
  app: appReducer,
});
