import * as React from 'react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import { getPipeSelector } from '../../../common/selector'
import { useAppSelector } from '../../../State/Store'

export const SelectPipeMaterial = ({ register, errors }: any) => {
  const pipies = useAppSelector(getPipeSelector)
  // const [pipe, setPipe] = React.useState('')
  //
  // const handleChange = (event: SelectChangeEvent) => {
  //   setPipe(event.target.value as string)
  // }
  const menuItem = pipies.map((item, index) => {
    return (
      <MenuItem key={index} value={item.name}>
        {item.name}
      </MenuItem>
    )
  })

  return (
    <Box sx={{ minWidth: 120, maxWidth: 300, m: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" aria-label={'pipeMaterial'}>
          {errors.pipeMaterial ? errors.pipeMaterial.message : 'Pipe-Material'}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="pipeMaterial"
          error={!!errors.pipeMaterial?.message}
          {...register('pipeMaterial', { required: 'Required' })}
        >
          {menuItem}
        </Select>
      </FormControl>
    </Box>
  )
}
