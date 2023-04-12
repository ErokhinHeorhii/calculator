import { combineReducers } from 'redux'

import { chosenDataReducer } from './chosenDataReducer'
import { configReducer } from './configReducer'
import { dataReducer } from './dataReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  chosenData: chosenDataReducer,
  config: configReducer,
})
