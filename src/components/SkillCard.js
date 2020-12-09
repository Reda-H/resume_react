import React from 'react';
import { Card, Image } from 'react-bootstrap';


function SkillCard({skill}) {
    console.log(skill)
    return(
        <Card className="text-center ml-2 mr-2" style={{ minHeight: '135px', minWidth: '95px', border: 'none', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',}}>
            <Image className="m-2 mx-auto" src={skill.link} rounded style={{ height: '70px', width: '70px' }} />
            <Card.Footer>{skill.name}</Card.Footer>
        </Card>
    );
}

export default SkillCard;