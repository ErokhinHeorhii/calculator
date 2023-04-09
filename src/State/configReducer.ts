import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ConfigStateType = {
  type: string
  key: string
  name: string
  min?: number
  max?: number
  step?: number
  value?: number
}

const initialState: Array<ConfigStateType> = []

const slice = createSlice({
  name: 'config',
  initialState: initialState,
  reducers: {
    getConfigAC(state, action: PayloadAction<{ config: ConfigStateType[] }>) {
      return (state = action.payload.config)
    },
  },
})

export const { getConfigAC } = slice.actions
export const configReducer = slice.reducer
