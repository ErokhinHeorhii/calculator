import React from 'react'

import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

import { getChosenDataAC } from '../../State/chosenDataReducer'
import { useAppDispatch } from '../../State/Store'

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
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
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
    dispatch(getChosenDataAC({ chosenData: data }))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '400px' }}>
      <SelectListMaterial register={register} errors={errors} />
      <SelectPipeMaterial register={register} errors={errors} />
      <SliderWidth register={register} />
      <SliderLength register={register} />
      <SelectFrame register={register} errors={errors} />
      <Button
        type={'submit'}
        variant="outlined"
        style={{ width: '55px', textAlign: 'center', marginLeft: '130px' }}
      >
        Submit
      </Button>
    </form>
  )
}
