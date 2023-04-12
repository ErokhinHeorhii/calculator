import { AppRootStateType } from '../../State/Store'

export const getWidthSelector = (state: AppRootStateType) => {
  return state.config.filter(item => item.type === 'size' && item.key === 'width')
}
