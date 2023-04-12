import { AppRootStateType } from '../../State/Store'

export const getQuantityListSelector = (state: AppRootStateType) => {
  const chosenLength = state.chosenData?.length
  const chosenWidth = state.chosenData?.width
  const figureArea = chosenLength * chosenWidth

  return Math.ceil(figureArea)
}
