import React from 'react'

import { ListGroup } from 'react-bootstrap'

import { useAppSelector } from '../../../app/store'

import { Comment } from './comment/comment'

export const Comments = () => {
  const comments = useAppSelector(state => state.comments)

  return (
    <ListGroup className="mt-3">
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ListGroup>
  )
}
