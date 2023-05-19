import React from 'react'

import { Container, ListGroup } from 'react-bootstrap'

import { useAppSelector } from '../../app/store'

import { Post } from './post/post'

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

export const Posts = () => {
  const posts = useAppSelector(state => state.posts)

  return (
    <Container fluid="md">
      <h1>Posts</h1>
      <ListGroup className={'mt-4'}>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </ListGroup>
    </Container>
  )
}
