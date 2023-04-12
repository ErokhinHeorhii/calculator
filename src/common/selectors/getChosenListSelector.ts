import { AppRootStateType } from '../../State/Store'

export const getChosenListSelector = (state: AppRootStateType) => {
  return state.chosenData && state.chosenData.listMaterial
}
