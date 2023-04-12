import { AppRootStateType } from '../../State/Store'

export const getPriceScrewSelector = (state: AppRootStateType) => {
  return state.data.find(item => item.type === 'fix')?.price
}
