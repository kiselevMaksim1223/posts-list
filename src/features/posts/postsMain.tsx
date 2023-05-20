import React, { useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { Posts } from './posts'
import { cleanPostsAC, fetchPostsAC } from './posts-reducer'

export const PostsMain = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsAC())

    //clean posts data then unmount
    return () => {
      dispatch(cleanPostsAC())
    }
  }, [])

  return (
    <Container fluid="md">
      <h1 className={'mt-2'}>Posts</h1>
      <Posts />
    </Container>
  )
}
