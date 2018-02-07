import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import cloneDeep from 'lodash.clonedeep'
import get from 'lodash.get'

import initialState from './initialState';

const appReducer = (state = initialState, action) => {
  console.log('action', action)
  const newState = cloneDeep(state)

  switch (action.type) {
    // Menu
    case 'toggleMenu':
      newState.menuHidden = !state.menuHidden
      break
    case 'gotFields':
      newState.ts = Date.now()
      newState.fields = action.fields.data
      break
    case 'editField':
      newState.values[action.field._id] = action.value
      localStorage.setItem('values', JSON.stringify(newState.values))
      break
    case 'savedRecord':
      newState.saveError = initialState.saveError
      break
    case 'saveRecordFailed':
      newState.saveError = action.error
    default:
      break;
  }

  global.state = newState
  return newState;
};

export const rootReducer = combineReducers({
  routing: routerReducer,
  app: appReducer,
});
