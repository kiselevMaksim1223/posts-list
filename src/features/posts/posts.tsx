import React from 'react'

import { ListGroup } from 'react-bootstrap'

import { Post } from './post/post'

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

const posts: PostType[] = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipitsuscipit recusandae consequuntur expedita et cum\nreprehende',
  },
  {
    userId: 2,
    id: 3,
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
    <div>
      <h1>Список постов</h1>
      <ListGroup>
        {posts.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </ListGroup>
    </div>
  )
}
