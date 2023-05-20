import React from 'react'

import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'

import myAva from '../../common/assets/myAvatar.png'

export const About = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={4} className="text-center">
          <Image src={myAva} roundedCircle width={200} height={200} />
          <ListGroup className={'mt-3'}>
            <ListGroup.Item className={'bg-light'}>
              {' '}
              <strong>Email:</strong>
              <a className={'text-decoration-none'} href={'mailto:kiselev1223maksim@gmail.com'}>
                kiselev1223maksim@gmail.com
              </a>
            </ListGroup.Item>
            <ListGroup.Item className={'bg-light'}>
              <div className={'d-flex gap-3 justify-content-center align-items-center'}>
                <a
                  href={'http://linkedin.com/in/maksim-kiselev-1a1516259'}
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <AiFillLinkedin size={30} />
                </a>
                <a href={'https://github.com/kiselevMaksim1223'} target={'_blank'} rel="noreferrer">
                  <AiFillGithub size={30} />
                </a>
                <a href={'http://t.me/beamer_boi'} target={'_blank'} rel="noreferrer">
                  <BsTelegram size={27} />
                </a>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={8}>
          <h2>Обо мне</h2>
          <ListGroup>
            <ListGroup.Item className={'bg-light'}>
              <p>
                Привет, я Frontend-разработчик и я специализируюсь на React JS, HTML, CSS и JS. Я
                увлечен программированием и постоянно изучаю новые технологии и развиваю свои навыки
                через пет-проекты. Также в будущем я вижу себя как fullstack разработчика. Когда я
                не программирую, я улучшаю свой английский язык. Не стесняйтесь связаться со мной по
                электронной почте или мессенджерам, чтобы обсудить потенциальные проекты или
                сотрудничество.
              </p>
            </ListGroup.Item>
          </ListGroup>
          <h4 className={'mt-2'}>Технологии:</h4>
          <ListGroup>
            <ListGroup.Item className={'bg-light'}>
              <li>React/Redux/RTK</li>
              <li>TypeScript/JavaScript</li>
              <li>GatsbyJS</li>
              <li>Axios/Rest API/GraphQL</li>
              <li>Redux-Thunk</li>
              <li>Unit Testing/Jest/StoryBook</li>
              <li>HTML/CSS/SCSS</li>
              <li>MUI/Styled-Components</li>
              <li>Formik/React-hook-form</li>
              <li>GIT/GitHub</li>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
