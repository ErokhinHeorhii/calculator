import React from 'react'

import { SelectFrame } from './selectFrame'
import { SelectLengthMaterial } from './selectLengthMateruial'
import { SelectListMaterial } from './selectListMateruial'
import { SelectPipeMaterial } from './selectPipeMateruial'
import { SelectWidthMaterial } from './selectWidthMateruial'

export const FormForEnter = () => {
  return (
    <div>
      <SelectListMaterial />
      <SelectPipeMaterial />
      <SelectWidthMaterial />
      <SelectLengthMaterial />
      <SelectFrame />
    </div>
  )
}
