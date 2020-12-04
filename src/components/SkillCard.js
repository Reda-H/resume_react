import React from 'react';
import { Card, Image } from 'react-bootstrap';


function SkillCard({skill}) {
    console.log(skill)
    return(
        <Card className="text-center ml-2 mr-2">
            <Image className="m-2 mx-auto" src={skill.link} rounded style={{ height: '80px', width: '80px' }} />
            <Card.Footer>{skill.name}</Card.Footer>
        </Card>
    );
}

export default SkillCard;