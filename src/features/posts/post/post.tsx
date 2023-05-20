import React, { FC, useState } from 'react'

import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../../app/store'
import ava from '../../../common/assets/Avatar.svg'
import { SpinnerLoad } from '../../../common/components/spinner/spinner'
import { setUserIdAC } from '../../userDetails/user-reducer'
import { Comments } from '../comments/comments'
import { clearPostCommentsAC, fetchCommentsAC } from '../comments/comments-reducer'
import { PostType } from '../posts.type'

export const Post: FC<{ post: PostType }> = ({ post }) => {
  const dispatch = useDispatch()
  const allComments = useAppSelector(state => state.comments)
  const postCommentsStatus = useAppSelector(state => state.app.commentsStatus)
  const navigate = useNavigate()
  const [showComments, setShowComments] = useState(false)

  const postComments = allComments.filter(comments => comments.postId === post.id)
  const isPostCommentsLoading = postCommentsStatus === post.id + 'loading'

  const toggleComments = () => {
    setShowComments(!showComments)

    if (!showComments) {
      dispatch(fetchCommentsAC(post.id))
    } else dispatch(clearPostCommentsAC(post.id))
  }

  const onClickNavigate = () => {
    navigate(`/posts/${post.userId}`)
    dispatch(setUserIdAC(post.userId))
  }

  return (
    <Card key={post.id} style={{ width: '100%', margin: '0  auto 1rem', padding: '1rem' }}>
      <Card.Header className={'d-flex align-items-center'}>
        <Card.Img
          onClick={onClickNavigate}
          role={'button'}
          className="flex-shrink-0"
          variant="left"
          src={ava}
          width={50}
          height={50}
        />
        <Card.Title className="flex-grow-1 ms-3 ">{post.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>{post.body}</Card.Text>
        {showComments &&
          (isPostCommentsLoading ? <SpinnerLoad /> : <Comments comments={postComments} />)}
        <Button variant="secondary" onClick={toggleComments} className="mt-3">
          {showComments ? 'Hide comments' : 'Comments'}
        </Button>
      </Card.Body>
    </Card>
  )
}
