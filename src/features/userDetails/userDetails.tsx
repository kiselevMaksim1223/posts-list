import React, { useEffect } from 'react'

import { Button, Card, Container } from 'react-bootstrap'
import { IoReturnDownBack } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '../../app/store'
import { SpinnerLoad } from '../../common/components/spinner/spinner'
import { Posts } from '../posts/posts'
import { cleanPostsAC } from '../posts/posts-reducer'

import { fetchUserAC } from './user-reducer'
import { UserType } from './user.type'

export const UserDetails = () => {
  const dispatch = useDispatch()
  const user = useAppSelector(state => state.user as UserType)
  const userStatus = useAppSelector(state => state.app.userStatus)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchUserAC(user.id as number))

    //cleanup posts data then unmount
    return () => {
      dispatch(cleanPostsAC())
    }
  }, [])

  const onClickBack = () => {
    navigate('/posts')
  }

  if (userStatus === 'loading') {
    return <SpinnerLoad />
  }

  return (
    <Container fluid="md">
      <Button variant="secondary" className={'mt-3 mb-3'} onClick={onClickBack}>
        <IoReturnDownBack size={20} />
      </Button>
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
      <h4>User posts</h4>
      <Posts />
    </Container>
  )
}
