import React from 'react'

import { Container, Row, Col, Image } from 'react-bootstrap'

import myAva from '../../common/assets/myAvatar.png'

export const About = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4} className="text-center">
          <Image src={myAva} roundedCircle width={200} height={200} />
        </Col>
        <Col md={8}>
          <h2>Обо мне</h2>
          <p>
            Здесь вы можете добавить свое описание, рассказать о себе и о том, какие технологии вы
            владеете. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at convallis
            urna. Nulla feugiat ligula eget tincidunt ultrices. Morbi eu felis mauris. Etiam
            dignissim ante in tincidunt eleifend. Donec vitae feugiat lectus. Sed maximus suscipit
            dolor eget congue. Quisque rutrum volutpat tortor ut vulputate.
          </p>
          <h4>Технологии:</h4>
          <ul>
            <li>Технология 1</li>
            <li>Технология 2</li>
            <li>Технология 3</li>
            {/* Добавьте здесь остальные технологии */}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
