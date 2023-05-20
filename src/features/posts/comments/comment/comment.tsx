import React, { FC } from 'react'

import { ListGroup } from 'react-bootstrap'

import { CommentType } from '../comments.type'

export const Comment: FC<{ comment: CommentType }> = ({ comment }) => {
  return (
    <ListGroup.Item key={comment.id}>
      <div>
        <strong>Email: </strong>
        {comment.email}
      </div>
      <div>{comment.body}</div>
    </ListGroup.Item>
  )
}
