import * as React from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

import { getLengthSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

function valuetext(value: number) {
  return `${value}m`
}

export const SliderLength = ({ register }: any) => {
  const length = useAppSelector(getLengthSelector)
  const min = length.find(item => item.min)
  const max = length.find(item => item.max)

  return (
    <Box sx={{ width: 300, m: 2, mt: 4 }}>
      <Slider
        aria-label="length"
        defaultValue={5}
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={1}
        marks
        min={min && min.min}
        max={max && max.max}
        {...register('length', { required: true })}
      />
      <Typography>Length, m</Typography>
    </Box>
  )
}
