import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DataStateType = {
  frame: string
  length: number
  width: number
  listMaterial: string
  pipeMaterial: string
}

const initialState = {} as DataStateType

const slice = createSlice({
  name: 'chosenData',
  initialState: initialState,
  reducers: {
    getChosenDataAC(state, action: PayloadAction<{ chosenData: DataStateType }>) {
      return (state = action.payload.chosenData)
    },
  },
})

export const { getChosenDataAC } = slice.actions
export const ChosenDataReducer = slice.reducer
