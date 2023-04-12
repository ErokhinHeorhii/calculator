import { AppRootStateType } from '../../State/Store'

export const getLengthSelector = (state: AppRootStateType) => {
  return state.config.filter(item => item.type === 'size' && item.key === 'length')
}
