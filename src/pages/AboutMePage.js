import React from 'react';
import { Card, Col, Container, Row, Image, Button } from 'react-bootstrap';
import { IoDownload } from 'react-icons/io5';
import Content from '../components/Content';
import HeroCured from '../components/HeroCured';
import DownloadLink from "react-download-link";

import Skills from '../components/Skills';
import profile from '../static/profile.jpg';

function AboutMePage({ id, data }) {
    const name = 'Herradi Reda';
    const degree = "Bachelor in Computer Science and Engineering";
    const graduationYear = 2020;
    const school = 'Al Akhawayn University in Ifrane';
    const email = 'Herradi.R@gmail.com';
    const phone = '(+212) 697444476';

    return (
        <Container className="div-about" id={id} fluid>
            <HeroCured title={"About Me"} marginNone/>
            <Row>
                <Col>
                    <div className="mt-5">
                        <Card fluid style={{border: 'none'}}>
                            <Row style={{ display: 'flex', alignItems: 'center'}}>
                                <Col className="mt-3" md={6}>
                                    <Card style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
                                        <Card.Body>
                                            <Row>
                                                <Col className="d-flex align-items-center justify-content-center p-0">
                                                    <Image style={{ maxHeight: '90%', maxWidth: '90%' }} variant="top" src={profile} rounded />
                                                </Col>
                                                <Col className="mt-2 p-0">
                                                    <p><span className="font-weight-bold">Name: </span>{name}</p>
                                                    <p><span className="font-weight-bold">Degree: </span>{degree + ' - ' + graduationYear}</p>
                                                    <p><span className="font-weight-bold">School: </span>{school}</p>
                                                    <p><span className="font-weight-bold">Email: </span>{email}</p>
                                                    <p><span className="font-weight-bold">Phone: </span>{phone}</p>
                                                    <Row className="mb-1">
                                                        <Col md={{ span: 6, offset: 2 }}>
                                                            <Button variant="outline-dark" href={`http://18.222.138.3:8080/files/herradireda_resume_eng.pdf`}>Get Resume <IoDownload className="mb-1" size={'1.5em'} /></Button>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="mt-3" md={6}>
                                    <Card  style={{ height: '100%', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', }}>
                                        <Card.Body style={{ padding: '2em', textAlign: 'center', verticalAlign: 'middle' }}>
                                            <Content>
                                                <p>My name is Reda Herradi and I'm a computer science engineer. I graduated from Al Akhawayn University in Ifrane with a Bachelor's in Computer Science and Engineering in 2020. I have experience in Full Stack Development, User Experience Design. However, I am seeking to expand my skills in Data Science.</p>
                                                <p>My most recent accomplishment has been my work with Cosmic, a startup which is developing a networking app. I have taken charge of the full development process on my own and have set a base for future coding engineers to develop on.</p>
                                                <p>I am actively searching for new challenges, and welcome any contact regarding new opportunities.</p>
                                            </Content>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-3" >
                                <Col>
                                    {/* <Card style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', }}> */}
                                        <Skills />
                                    {/* </Card> */}
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