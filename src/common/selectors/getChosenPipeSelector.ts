import { AppRootStateType } from '../../State/Store'

export const getChosenPipeSelector = (state: AppRootStateType) => {
  return state.chosenData && state.chosenData.pipeMaterial
}
