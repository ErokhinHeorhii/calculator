import { AppRootStateType } from '../../State/Store'

export const getQuantityScrewSelector = (state: AppRootStateType) => {
  const chosenLength = state.chosenData?.length
  const chosenWidth = state.chosenData?.width
  const figureArea = chosenLength * chosenWidth
  const chosenQuantityMaterial =
    state.chosenData?.listMaterial?.endsWith('plastic') === true ? 10 : 5

  return Math.ceil(chosenQuantityMaterial * figureArea)
}
