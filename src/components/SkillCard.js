import React from 'react';
import { Card, Image } from 'react-bootstrap';


function SkillCard({skill}) {
    console.log(skill)
    return(
        <Card style={{margin: '1em', maxHeight: '10em', maxWidth: '10em', minWidth: '7em'}}>
            {/* <Card.Img variant="top" thumbnail src={pythonLogo} /> */}
            <Image className="m-2" src={skill.link} rounded style={{ maxHeight: 100, maxWidth: 100 }} />
            <Card.Text>{skill.name}</Card.Text>
        </Card>
    );
}

export default SkillCard;