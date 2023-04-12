import React, { useEffect } from 'react'

import { Container } from '@mui/material'

import { FormForEnter } from './components/formForEnter/FormForEnter'
import { TableResult } from './components/tableResult/TableResult'
import { getConfig } from './services/getConfig'
import { getData } from './services/getData'
import { getConfigAC } from './State/configReducer'
import { getDataAC } from './State/dataReducer'
import { useAppDispatch } from './State/Store'
import './App.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getData().then(res => dispatch(getDataAC({ material: res })))
    getConfig().then(res => dispatch(getConfigAC({ config: res })))
  }, [])

  return (
    <div className="App">
      <Container sx={{ mt: 4 }}>
        <FormForEnter />
      </Container>
      <Container sx={{ mt: 4 }}>
        {' '}
        <TableResult />
      </Container>
    </div>
  )
}

export default App
