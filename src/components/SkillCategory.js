import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import SkillCard from './SkillCard';


function SkillCategory({ item }) {
    console.log(item);
    return (
        <Row className="row-skillcategory">
            <Col>
                <h4 className="border-bottom">{item.category}</h4>
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
            </Col>
        </Row>
    );
}

export default SkillCategory;