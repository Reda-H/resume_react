import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

function Hero({ data }) {

    return (
        <div className="div-hero">
            <Jumbotron className="bg-transparent jumbotron-fluid p-0 img-fluid" >
                <Container fluid>
                    <Row className="justify-content-center text-light">
                        <Col md={'auto'} sm={12}>
                            {data.title && <h4 className="h4-my-name m-0 mt-5">Hello, my name is</h4>}
                            {data.title && <h2 className="hero-title display-1 font-weight-bolder">{data.title + ','}</h2>}
                            {data.subTitle && <h3 className="display-5 font-weight-light">
                                <Typewriter
                                    options={{
                                        delay: 50,
                                        deleteSpeed: 10,
                                        loop: true
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter.typeString("I work in ")
                                            .pauseFor(700)
                                            .typeString("<span class='font-weight-normal'>Software Engineering</span>")
                                            .pauseFor(700)
                                            .deleteChars('Software Engineering'.length)
                                            .pauseFor(700)
                                            .typeString("<span class='font-weight-normal'>Data Science</span>")
                                            .pauseFor(700)
                                            .deleteChars('Data Science'.length)
                                            .pauseFor(700)
                                            .typeString("<span class='font-weight-normal'>Full Stack Development</span>")
                                            .pauseFor(700)
                                            .deleteChars('Full Stack Development'.length)
                                            .start()
                                    }} />
                            </h3>}
                            
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Hero;