import { AppRootStateType } from '../../State/Store'

export const getPricePipeSelector = (state: AppRootStateType) => {
  const pipe = state.chosenData?.pipeMaterial

  return state.data?.find(item => {
    return item.name === pipe
  })?.price
}
