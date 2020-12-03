import React from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';

import HeroCured from './HeroCured';
import pythonLogo from '../static/technologies/python-logo.png';
import nodeJsLogo from '../static/technologies/nodejs-logo.png';
import javaLogo from '../static/technologies/java-logo.png';
import djangoLogo from '../static/technologies/django-logo.png';
import phpLogo from '../static/technologies/php-logo.png';
import SkillCard from './SkillCard';
import SkillCategory from './SkillCategory';


class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    category: 'Backend',
                    technologies: [
                        { name: 'NodeJS', link: nodeJsLogo },
                        { name: 'Java', link: javaLogo },
                        { name: 'Django', link: djangoLogo },
                        { name: 'PHP', link: phpLogo },
                    ]
                },
                {
                    category: 'Desktop',
                    technologies: [
                        { name: 'Python', link: pythonLogo },
                        { name: 'C', link: '' },
                        { name: 'C++', link: '' },
                        { name: 'Java', link: '' },
                    ]
                },
                {
                    category: 'Frontend',
                    technologies: [
                        { name: 'ReactJs', link: '' },
                        { name: 'React Native', link: '' },
                        { name: 'HTML/CSS/Javascript', link: '' },
                        { name: 'Android Studio', link: '' }
                    ]
                },
                {
                    category: 'Database',
                    technologies: [
                        { name: 'MongoDB', link: '' },
                        { name: 'SQL/MySQL', link: '' },
                        { name: 'PHPMyAdmin', link: '' },
                        { name: 'PostgreSQL', link: '' }
                    ]
                },
                {
                    category: 'Artificial Intelligence',
                    technologies: [
                        { name: 'Keras', link: '' },
                        { name: 'TensorFlow', link: '' },
                        { name: 'PyTorch', link: '' }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div >
                <HeroCured title={'Skills'} subTitle={"I have proficiency in the following skills"} titleSize={'display-4'} />
                {
                    // this.state.items.forEach(item => {
                    //     console.log(item);
                    //     return (
                    //         <SkillCategory item={item} />
                    //     )
                    // })
                    this.state.items.map((item) => {
                        return(
                            <SkillCategory item={item} />
                        )
                    })
                }
                {/* <SkillCategory items={this.state.items} />
                <SkillCategory items={this.state.items} /> */}
                {/* { item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} />} */}
            </div>
        );
    }
}

export default Skills;