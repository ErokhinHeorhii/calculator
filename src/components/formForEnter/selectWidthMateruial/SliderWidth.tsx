import * as React from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

import { getWidthSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

function valuetext(value: number) {
  return `${value}m`
}

export const SliderWidth = () => {
  const width = useAppSelector(getWidthSelector)
  const min = width.find(item => item.min)
  const max = width.find(item => item.max)

  return (
    <Box sx={{ width: 300, m: 2, mt: 4 }}>
      <Slider
        aria-label="Width"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks
        min={min && min.min}
        max={max && max.max}
      />
      <Typography>Width, m</Typography>
    </Box>
  )
}
