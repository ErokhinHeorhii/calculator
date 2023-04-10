import * as React from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { getListSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

export const SelectListMaterial = ({ register, errors }: any) => {
  const list = useAppSelector(getListSelector)

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
        <InputLabel id="demo-simple-select-label" aria-label="listMaterial">
          {errors.listMaterial ? errors.listMaterial.message : 'List-Material'}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="listMaterial"
          error={!!errors.listMaterial?.message}
          {...register('listMaterial', { required: 'Required' })}
        >
          {menuItem}
        </Select>
      </FormControl>
    </Box>
  )
}
