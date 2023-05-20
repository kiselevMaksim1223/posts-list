import React, { useEffect } from 'react'

import { Container, ListGroup, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../app/store'

import { Post } from './post/post'
import { fetchPostsAC } from './posts-reducer'

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

export const Posts = () => {
  const posts = useAppSelector(state => state.posts)
  const postsStatus = useAppSelector(state => state.app.postsStatus)
  const dispatch = useDispatch()

  console.log(posts)
  useEffect(() => {
    dispatch(fetchPostsAC())
  }, [])

  return (
    <Container fluid="md">
      <h1>Posts</h1>
      <ListGroup className={'mt-4'}>
        {postsStatus === 'loading' ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="grow" />
          </div>
        ) : (
          posts.map(post => <Post post={post} key={post.id} />)
        )}
      </ListGroup>
    </Container>
  )
}
