import React from 'react'

import { ListGroup } from 'react-bootstrap'

import { useAppSelector } from '../../app/store'
import { SpinnerLoad } from '../../common/components/spinner/spinner'

import { Post } from './post/post'

export const Posts = () => {
  const posts = useAppSelector(state => state.posts)
  const postsStatus = useAppSelector(state => state.app.postsStatus)

  return (
    <ListGroup className={'mt-4'}>
      {postsStatus === 'loading' ? (
        <SpinnerLoad />
      ) : (
        posts.map(post => <Post post={post} key={post.id} />)
      )}
    </ListGroup>
  )
}
