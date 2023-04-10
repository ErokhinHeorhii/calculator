import React from 'react'

import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import { SelectFrame } from './selectFrame'
import { SliderLength } from './selectLengthMateruial'
import { SelectListMaterial } from './selectListMateruial'
import { SelectPipeMaterial } from './selectPipeMateruial'
import { SliderWidth } from './selectWidthMateruial'

type FormData = {
  listMaterial: string
  pipeMaterial: string
  width: number
  length: number
  frame: string
}

export const FormForEnter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      listMaterial: '',
      pipeMaterial: '',
      width: 5,
      length: 5,
      frame: '',
    },
  })

  const onSubmit = (data: FormData) => {
    debugger
    console.log('data', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SelectListMaterial register={register} errors={errors} />
      <SelectPipeMaterial register={register} errors={errors} />
      <SliderWidth register={register} />
      <SliderLength register={register} />
      <SelectFrame register={register} errors={errors} />
      <Button type={'submit'} variant="outlined">
        Submit
      </Button>
    </form>
  )
}
