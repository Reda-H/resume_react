import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

function HeroCured({ title, titleSize, subTitle, subText, marginNone }) {

    return (
        <Jumbotron className={`${marginNone ? 'mb-0' : ''} bg-transparent jumbotron-fluid p-0`}>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col md={10} sm={12}>
                        {title && <h2 className={`${titleSize ? titleSize : 'display-1'} font-weight-bolder second-color`}>{title}</h2>}
                        {subTitle && <h3 className="third-color">{subTitle}</h3>}
                        {subText && <h4 className="lead font-weight-light">{subText}</h4>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroCured;