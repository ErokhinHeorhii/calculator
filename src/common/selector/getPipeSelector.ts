import { AppRootStateType } from '../../State/Store'

export const getPipeSelector = (state: AppRootStateType) => {
  return state.data.filter(item => item.type === 'pipe')
}
