import React from 'react'
import ReactDOM from 'react-dom/client'
import MyForm from './assets/f'
import Lifecycle from './assets/lifeCycle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <MyForm />
    <hr />
    <Lifecycle />
  </React.Fragment>,
)
