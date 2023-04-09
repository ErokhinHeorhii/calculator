import { combineReducers } from 'redux'

import { configReducer } from './configReducer'
import { dataReducer } from './dataReducer'

export const rootReducer = combineReducers({
  data: dataReducer,
  config: configReducer,
})
