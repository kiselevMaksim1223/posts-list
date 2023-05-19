import React from 'react'

import { Container, ListGroup } from 'react-bootstrap'

import { Post } from './post/post'

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

export const posts: PostType[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat ',
    body: 'quia et suscipitsuscipit ',
  },
  {
    userId: 2,
    id: 2,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehende',
  },
  {
    userId: 3,
    id: 3,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehende',
  },
]

export const Posts = () => {
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
