import * as React from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { getListSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

export const SelectListMaterial = () => {
  const list = useAppSelector(getListSelector)
  const [itemPipe, setItemPipe] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setItemPipe(event.target.value as string)
  }

  const menuItem = list.map((item, index) => {
    return (
      <MenuItem key={index} value={item.name}>
        {item.name}; {item.material}
      </MenuItem>
    )
  })

  return (
    <Box sx={{ minWidth: 120, maxWidth: 300, m: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">List-Material</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={itemPipe}
          label="List-Material"
          onChange={handleChange}
        >
          {menuItem}
        </Select>
      </FormControl>
    </Box>
  )
}
