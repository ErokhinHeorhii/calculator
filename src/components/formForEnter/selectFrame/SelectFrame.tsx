import * as React from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { getFrameSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

export const SelectFrame = ({ register, errors }: any) => {
  const frames = useAppSelector(getFrameSelector)

  const menuItem = frames.map((item, index) => {
    return (
      <MenuItem key={index} value={item.name}>
        {item.name}
      </MenuItem>
    )
  })

  return (
    <Box sx={{ minWidth: 120, maxWidth: 300, m: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {' '}
          {errors.frame ? errors.frame.message : 'Frame'}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="frame"
          error={!!errors.frame?.message}
          {...register('frame', { required: 'Required' })}
        >
          {menuItem}
        </Select>
      </FormControl>
    </Box>
  )
}
