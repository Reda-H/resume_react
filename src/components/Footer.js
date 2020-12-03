import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer({ username }) {

    return (
        <footer className="">
            <Container fluid>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={6}>
                        {username}
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} sm={6}>
                        This site was made by {username}.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
