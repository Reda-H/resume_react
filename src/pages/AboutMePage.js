import React from 'react';
import { Card, Col, Container, Row, Image, Button } from 'react-bootstrap';
import { IoDownload } from 'react-icons/io5';
import Content from '../components/Content';
import HeroCured from '../components/HeroCured';

import Skills from '../components/Skills';
import profile from '../static/profile.jpg';
import profile2 from '../static/profile-3-cropped.png';

function AboutMePage({ id, data }) {
    const name = 'Herradi Reda';
    const degree = "Bachelor in Computer Science and Engineering";
    const graduationYear = 2020;
    const school = 'Al Akhawayn University in Ifrane';
    const email = 'Herradi.R@gmail.com';
    const phone = '(+212) 697444476';

    return (
        <Container className="div-about" id={id} fluid>
            <HeroCured title={"About Me"} marginNone />
            <Row>
                <Col>
                    <div className="mt-5">
                        <Card fluid className="second-color-background fifth-color m-auto" style={{ border: 'none', display: 'flex', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', maxWidth: '70%' }}>
                            <Row style={{ display: 'flex', alignItems: 'center' }}>
                                <Card.Body style={{ padding: '2em', textAlign: 'center', verticalAlign: 'middle' }}>
                                    <Row>
                                        <Col className="d-flex align-items-center justify-content-center p-0">
                                            <Image style={{ maxHeight: '90%', maxWidth: '90%' }} variant="top" src={profile2} rounded />
                                        </Col>
                                        <Col className="mt-5 p-0">
                                            <Row>
                                                <Col className="text-left">
                                                    <p><span className="font-weight-bold">Name: </span>{name}</p>
                                                    <p><span className="font-weight-bold">School: </span>{school}</p>
                                                    <p><span className="font-weight-bold">Phone: </span>{phone}</p>
                                                </Col>
                                                <Col className="text-left">
                                                    <p><span className="font-weight-bold">Degree: </span>{degree + ' - ' + graduationYear}</p>
                                                    <p><span className="font-weight-bold">Email: </span>{email}</p>
                                                </Col>
                                            </Row>
                                            <Row className="mb-1 mt-1">
                                                <Col md={{ span: 6, offset: 2 }}>
                                                    <Button variant="outline-light" href={`./herradireda_resume_eng.pdf`}>Get Resume <IoDownload className="mb-1" size={'1.5em'} /></Button>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="p-0">
                                                    <Content>
                                                        <Row className="justify-content-center text-justify">
                                                            <Col className="p-0 pr-5 mt-4">
                                                                <p>My name is Reda Herradi and I'm a computer science engineer. I graduated from Al Akhawayn University in Ifrane with a Bachelor's in Computer Science and Engineering in 2020. I have experience in Full Stack Development, User Experience Design. However, I am seeking to expand my skills in Data Science.</p>
                                                                <p>My most recent accomplishment has been my work with Cosmic, a startup which is developing a networking app. I have taken charge of the full development process on my own and have set a base for future coding engineers to develop on.</p>
                                                                <p>I am actively searching for new challenges, and welcome any contact regarding new opportunities.</p>
                                                            </Col>
                                                        </Row>
                                                    </Content>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Row>
                        </Card>
                        <Row className="mt-3" >
                            <Col>
                                <Skills />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMePage;