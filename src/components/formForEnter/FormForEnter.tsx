import React from 'react'

import { SelectFrame } from './selectFrame'
import { SliderLength } from './selectLengthMateruial'
import { SelectListMaterial } from './selectListMateruial'
import { SelectPipeMaterial } from './selectPipeMateruial'
import { SliderWidth } from './selectWidthMateruial'

export const FormForEnter = () => {
  return (
    <div>
      <SelectListMaterial />
      <SelectPipeMaterial />
      <SliderWidth />
      <SliderLength />
      <SelectFrame />
    </div>
  )
}
