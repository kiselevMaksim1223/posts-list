import React from 'react'

import { Card, ListGroup } from 'react-bootstrap'

import { Post } from '../posts/post/post'
import { posts } from '../posts/posts'

export const UserDetails = () => {
  return (
    <div>
      <Card className="mb-4">
        <Card.Header>User details</Card.Header>
        <Card.Body>
          <Card.Title>user.name</Card.Title>
          <Card.Text>
            <strong>Email:</strong> user.email
          </Card.Text>
          <Card.Text>
            <strong>Company:</strong> user.company.name
          </Card.Text>
          {/* Добавьте другую информацию о пользователе, если необходимо */}
        </Card.Body>
      </Card>
      <h4>Список постов пользователя</h4>
      <ListGroup>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ListGroup>
    </div>
  )
}
