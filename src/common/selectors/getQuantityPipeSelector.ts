import { AppRootStateType } from '../../State/Store'

export const getQuantityPipeSelector = (state: AppRootStateType) => {
  const chosenLength = state.chosenData?.length
  const chosenWidth = state.chosenData?.width
  const chosenPipe = state.chosenData?.pipeMaterial

  const frame = state.chosenData?.frame
  const step = state.config?.find(item => item.name === frame)?.step as number

  const numberColumns = Math.ceil(chosenLength / step) + 1
  const quantityPipeInColumns = numberColumns * chosenWidth

  const numberRows = Math.ceil(chosenWidth / step) + 1
  const chosenWidthPipes =
    state.data.length && (state.data.find(item => item.name === chosenPipe)?.width as number)
  const quantityPipeInRows =
    numberRows * (chosenLength - chosenLength * (chosenWidthPipes / 100) - chosenWidthPipes / 100)
  const quantityPipe = quantityPipeInColumns + quantityPipeInRows

  return [Math.ceil(quantityPipe || 0), step || 0]
}
