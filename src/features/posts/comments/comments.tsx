import React, { FC } from 'react'

import { ListGroup } from 'react-bootstrap'

import { Comment } from './comment/comment'
import { CommentType } from './comments.type'

export const Comments: FC<{ comments: CommentType[] }> = ({ comments }) => {
  return (
    <ListGroup className="mt-3">
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </ListGroup>
  )
}
