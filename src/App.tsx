import React, { useEffect } from 'react'

import './App.css'
import { FormForEnter } from './components/formForEnter/FormForEnter'
import { getConfig } from './services/getConfig'
import { getData } from './services/getData'
import { getConfigAC } from './State/configReducer'
import { getDataAC } from './State/dataReducer'
import { useAppDispatch } from './State/Store'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getData().then(res => dispatch(getDataAC({ material: res })))
    getConfig().then(res => dispatch(getConfigAC({ config: res })))
  }, [dispatch])

  return (
    <div className="App">
      <FormForEnter />
    </div>
  )
}

export default App
