import React from 'react';
import { Card, Col, Container, Row, Image, Button } from 'react-bootstrap';
import { IoDownload } from 'react-icons/io5';
import Content from '../components/Content';

import Skills from '../components/Skills';
import profile from '../static/profile.jpg';

function AboutMePage({ id, data }) {
    const name = 'Herradi Reda';
    const degree = "Bachelor in Computer Science and Engineering";
    const school = 'Al Akhawayn University in Ifrane';
    const email = 'Herradi.R@gmail.com';
    const phone = '(+212) 0697444476';

    return (
        <Container className="div-about" id={id} fluid>
            <Row>
                <Col>
                    <div className="mt-5">
                        <Card fluid>
                            <Row>
                                <Col className="pr-0" md={6}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col className="d-flex align-items-center justify-content-center p-0">
                                                    <Image style={{ maxHeight: '90%', maxWidth: '90%' }} variant="top" src={profile} rounded />
                                                </Col>
                                                <Col className="mt-2 p-0">
                                                    <p><span className="font-weight-bold">Name: </span>{name}</p>
                                                    <p><span className="font-weight-bold">Degree: </span>{degree}</p>
                                                    <p><span className="font-weight-bold">School: </span>{school}</p>
                                                    <p><span className="font-weight-bold">Email: </span>{email}</p>
                                                    <p><span className="font-weight-bold">Phone: </span>{phone}</p>
                                                    <Row className="mb-1">
                                                        <Col md={{ span: 6, offset: 2 }}>
                                                            <Button variant="outline-dark">Get Resume <IoDownload className="mb-1" size={'1.5em'} /></Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="pl-0" md={6}>
                                    <Card style={{ height: '100%' }}>
                                        <Card.Body style={{ padding: '2em', textAlign: 'center', verticalAlign: 'middle' }}>
                                            <h4>About Me</h4>
                                            <Content>
                                                <p>I'm a Full Stack Web Developer / Software Engineer / Data Scientist / Computer Scientist and recent graduate from Al Akhawayn University in Ifrane with a B.Sc in Computer Sciences</p>
                                                <p>Currently, I'm working on personal projects and looking for a project to pour my passion into !</p>
                                                <p>To contact me, send me a mail through Here !</p>
                                            </Content>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card>
                                        <Skills />
                                    </Card>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMePage;