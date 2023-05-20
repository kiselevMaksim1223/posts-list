import React from 'react'

import Spinner from 'react-bootstrap/Spinner'

export const SpinnerLoad = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Spinner animation="grow" />
    </div>
  )
}
