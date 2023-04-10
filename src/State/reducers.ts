import { combineReducers } from 'redux'

import { ChosenDataReducer } from './chosenDataReducer'
import { configReducer } from './configReducer'
import { dataReducer } from './dataReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  chosenData: ChosenDataReducer,
  config: configReducer,
})
