import React, { FC, useState } from 'react'

import { Button, Card, ListGroup } from 'react-bootstrap'

import ava from '../../../common/assets/Avatar.svg'
import { PostType } from '../posts'

import { Comment } from './comment/comment'

export type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const comments: CommentType[] = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem mem quasi reiciend',
  },
  {
    postId: 2,
    id: 2,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem mem quasi reiciend',
  },
  {
    postId: 3,
    id: 3,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem mem quasi reiciend',
  },
]

export const Post: FC<{ post: PostType }> = ({ post }) => {
  const [showComments, setShowComments] = useState(false)

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <Card key={post.id} style={{ width: '70%', marginBottom: '1rem' }}>
      <Card.Header>
        <Card.Img variant="left" src={ava} width={50} height={50} />
        <Card.Title>{post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        {showComments && (
          <ListGroup className="mt-3">
            {comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </ListGroup>
        )}
        <Button variant="secondary" onClick={toggleComments} className="mt-3">
          {showComments ? 'Скрыть комментарии' : 'Комментарии'}
        </Button>
      </Card.Body>
    </Card>
  )
}
