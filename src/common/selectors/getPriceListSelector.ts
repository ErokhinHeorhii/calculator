import { AppRootStateType } from '../../State/Store'

export const getPriceListSelector = (state: AppRootStateType) => {
  const list = state.chosenData?.listMaterial?.split(' ').slice(0, -1).join(' ').trim()

  return state.data?.find(item => {
    return item.name === list
  })?.price
}
