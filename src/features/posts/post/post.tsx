import React, { FC, useState } from 'react'

import { Button, Card, ListGroup } from 'react-bootstrap'

import { useAppSelector } from '../../../app/store'
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

export const Post: FC<{ post: PostType }> = ({ post }) => {
  const comments = useAppSelector(state => state.comments)
  const [showComments, setShowComments] = useState(false)

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  return (
    <Card key={post.id} style={{ width: '100%', margin: '0  auto 1rem', padding: '1rem' }}>
      <Card.Header className={'d-flex align-items-center'}>
        <Card.Img className="flex-shrink-0" variant="left" src={ava} width={50} height={50} />
        <Card.Title className="flex-grow-1 ms-3 ">{post.title}</Card.Title>
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
          {showComments ? 'Hide comments' : 'Comments'}
        </Button>
      </Card.Body>
    </Card>
  )
}
