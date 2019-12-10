import { combineReducers } from 'redux'

import { dataReducer, DataState } from './data.reducer'
import { viewReducer, ViewState } from './view.reducer'

export type AppState = {
  data: DataState
  view: ViewState
}
export const rootReducer = combineReducers({
  view: viewReducer,
  data: dataReducer
})
