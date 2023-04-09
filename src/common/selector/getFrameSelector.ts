import { AppRootStateType } from '../../State/Store'

export const getFrameSelector = (state: AppRootStateType) => {
  return state.config.filter(item => item.type === 'frame')
}
