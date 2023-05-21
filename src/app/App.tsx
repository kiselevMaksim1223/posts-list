import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Routes, Navigate } from 'react-router-dom'

import { About } from '../features/about/about'
import { Header } from '../features/header/header'
import { PostsMain } from '../features/posts/postsMain'
import { UserDetails } from '../features/userDetails/userDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/posts'} />} />
        <Route path={'/posts'} element={<PostsMain />} />
        <Route path={'/posts/:userId'} element={<UserDetails />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/404'} element={<div>Page not found 404</div>} />
        <Route path={'*'} element={<Navigate to={'/404'} />} />
      </Routes>
    </>
  )
}

export default App
