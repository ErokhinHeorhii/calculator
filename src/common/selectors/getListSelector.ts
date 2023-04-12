import { AppRootStateType } from '../../State/Store'

export const getListSelector = (state: AppRootStateType) => {
  return state.data.filter(item => item.type === 'list')
}
