import React from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';
import SkillCard from './SkillCard';


function SkillCategory({ item }) {
    console.log(item);
    return (
        <Row>
            <Col>
                <h4>{item.category}</h4>
                <Card>
                <Container className="m-2" fluid>
                        <Row>
                            {
                                item.technologies.map(skill => {
                                    return (
                                        <SkillCard skill={skill} />
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </Card>
            </Col>
        </Row>
    );
}

export default SkillCategory;