import React from 'react'

import { Card, Container, ListGroup } from 'react-bootstrap'

import { useAppSelector } from '../../app/store'
import { Post } from '../posts/post/post'

export const UserDetails = () => {
  const posts = useAppSelector(state => state.posts)
  const user = useAppSelector(state => state.user)

  return (
    <Container fluid="md">
      <Card className="mb-4">
        <Card.Header>User details</Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {user.email}
          </Card.Text>
          <Card.Text>
            <strong>Phone:</strong> {user.phone}
          </Card.Text>
          <Card.Text>
            <strong>Company:</strong> {user.company.name}
          </Card.Text>
        </Card.Body>
      </Card>
      <h4>Список постов пользователя</h4>
      <ListGroup>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ListGroup>
    </Container>
  )
}
