import React, { FC, useState } from 'react'

import { Button, Card, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { useAppSelector } from '../../../app/store'
import ava from '../../../common/assets/Avatar.svg'
import { Comments } from '../comments/comments'
import { fetchCommentsAC } from '../comments/comments-reducer'
import { PostType } from '../posts'

export type CommentType = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const Post: FC<{ post: PostType }> = ({ post }) => {
  const dispatch = useDispatch()

  const commentStatus = useAppSelector(state => state.app.commentsStatus)
  const [showComments, setShowComments] = useState(false)

  const toggleComments = () => {
    setShowComments(!showComments)
    dispatch(fetchCommentsAC(post.id))
  }

  return (
    <Card key={post.id} style={{ width: '100%', margin: '0  auto 1rem', padding: '1rem' }}>
      <Card.Header className={'d-flex align-items-center'}>
        <Card.Img className="flex-shrink-0" variant="left" src={ava} width={50} height={50} />
        <Card.Title className="flex-grow-1 ms-3 ">{post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        {showComments &&
          (commentStatus === 'loading' ? (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <Spinner animation="grow" />
            </div>
          ) : (
            <Comments />
          ))}
        <Button variant="secondary" onClick={toggleComments} className="mt-3">
          {showComments ? 'Hide comments' : 'Comments'}
        </Button>
      </Card.Body>
    </Card>
  )
}
