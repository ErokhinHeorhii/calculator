import * as React from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { getFrameSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

export const SelectFrame = () => {
  const frames = useAppSelector(getFrameSelector)
  const [frame, setFrame] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setFrame(event.target.value as string)
  }
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
        <InputLabel id="demo-simple-select-label">Frame</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={frame}
          label="Frame"
          onChange={handleChange}
        >
          {menuItem}
        </Select>
      </FormControl>
    </Box>
  )
}
