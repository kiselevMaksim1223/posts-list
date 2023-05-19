import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { BrowserRouter } from 'react-router-dom'

import { Header } from '../features/header/header'
import { Posts } from '../features/posts/posts'

function App() {
  return (
    <BrowserRouter>
      <div className={'App'}>
        <Header />
        <Posts />
      </div>
    </BrowserRouter>
  )
}

export default App
