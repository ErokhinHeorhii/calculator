import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DataStateType = {
  type: string
  name: string
  material?: string
  unit: string
  width?: number
  price: number
}

const initialState: Array<DataStateType> = []

const slice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    getDataAC(state, action: PayloadAction<{ material: DataStateType[] }>) {
      return (state = action.payload.material)
    },
  },
})

export const { getDataAC } = slice.actions
export const dataReducer = slice.reducer
