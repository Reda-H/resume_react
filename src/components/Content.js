import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Content(props) {
    return (
        <Container fluid>
            <Row className="justify-content-center text-justify ml-auto">
                <Col style={{}}>
                    {props.children}
                </Col>
             </Row>
        </Container>
    );
}

export default Content;