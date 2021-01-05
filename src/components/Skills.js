import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeroCured from './HeroCured';
import pythonLogo from '../static/technologies/python-logo.png';
import nodeJsLogo from '../static/technologies/nodejs-logo.png';
import javaLogo from '../static/technologies/java-logo.png';
import djangoLogo from '../static/technologies/django-logo.png';
import cLogo from '../static/technologies/c-logo.png';
import cppLogo from '../static/technologies/cpp-logo.png';
import reactjsLogo from '../static/technologies/react-logo.png';
import htmlLogo from '../static/technologies/html-logo.png';
import cssLogo from '../static/technologies/css-logo.png';
import javascriptLogo from '../static/technologies/javascript-logo.png';
import androidstudioLogo from '../static/technologies/androidstudio-logo.png';
import mongodbLogo from '../static/technologies/mongodb-logo.jpg';
import mysqlLogo from '../static/technologies/mysql-logo.png';
import phpMyAdminLogo from '../static/technologies/phpmyadmin-logo.png';
import postgresqlLogo from '../static/technologies/postgresql-logo.png';
import kerasLogo from '../static/technologies/keras-logo.png';
import tensorflowLogo from '../static/technologies/tensorflow-logo.png';
import pytorchLogo from '../static/technologies/pytorch-logo.png';
import adobexdLogo from '../static/technologies/adobxd-logo.png';
import photoshopLogo from '../static/technologies/photoshop-logo.png';
import lunacyLogo from '../static/technologies/lunacy-logo.png';
import SkillCategory from './SkillCategory';


class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items1: [
                {
                    category: 'Backend',
                    technologies: [
                        { name: 'NodeJS', link: nodeJsLogo, grade: 'A', sign: '+' },
                        { name: 'Java', link: javaLogo, grade: 'B', sign: '-' },
                        { name: 'Django', link: djangoLogo, grade: 'A', sign: '+' },
                    ]
                },
                {
                    category: 'Desktop',
                    technologies: [
                        { name: 'Python', link: pythonLogo, grade: 'A', sign: '+' },
                        { name: 'C', link: cLogo, grade: 'A', sign: '+' },
                        { name: 'C++', link: cppLogo, grade: 'A', sign: '+' },
                        { name: 'Java', link: javaLogo, grade: 'B', sign: '-' },
                    ]
                },
                {
                    category: 'Frontend',
                    technologies: [
                        { name: 'ReactJs', link: reactjsLogo, grade: 'B', sign: '+' },
                        { name: 'React Native', link: reactjsLogo, grade: 'A', sign: '-' },
                        { name: 'HTML', link: htmlLogo, grade: 'A', sign: '+' },
                        { name: 'CSS', link: cssLogo, grade: 'A', sign: '+' },
                        { name: 'Javascript', link: javascriptLogo, grade: 'A', sign: '+' },
                        { name: 'Android Studio', link: androidstudioLogo, grade: 'C', sign: '+' }
                    ]
                },
            ],
            items2: [
                {
                    category: 'Database',
                    technologies: [
                        { name: 'MongoDB', link: mongodbLogo, grade: 'B', sign: '+' },
                        { name: 'SQL/MySQL', link: mysqlLogo, grade: 'B', sign: '+' },
                        { name: 'phpMyAdmin', link: phpMyAdminLogo, grade: 'C', sign: '+' },
                        { name: 'PostgreSQL', link: postgresqlLogo, grade: 'A', sign: '-' }
                    ]
                },
                {
                    category: 'Artificial Intelligence',
                    technologies: [
                        { name: 'Keras', link: kerasLogo, grade: 'B', sign: '+' },
                        { name: 'TensorFlow', link: tensorflowLogo, grade: 'B', sign: '+' },
                        { name: 'PyTorch', link: pytorchLogo, grade: 'C', sign: '+' }
                    ]
                },
                {
                    category: 'Design',
                    technologies: [
                        { name: 'Adobe XD', link: adobexdLogo, grade: 'B', sign: '+' },
                        { name: 'Photoshop', link: photoshopLogo, grade: 'A', sign: '+' },
                        { name: 'Lunacy', link: lunacyLogo, grade: 'B', sign: '+' }
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <HeroCured title={'Skills'} subTitle={"I have proficiency in the following skills"} titleSize={'display-4'} />
                {/* <HeroCured title={'Skills'} subTitle={"I have proficiency in the following skills"} titleSize={'display-4'} /> */}
                <Container className="mb-2 container-skill" >
                    <Row>
                        <Col>
                            {
                                this.state.items1.map((item) => {
                                    return (
                                        <SkillCategory item={item} />
                                    )
                                })
                            }
                        </Col>
                        <Col>
                            {
                                this.state.items2.map((item) => {
                                    return (
                                        <SkillCategory item={item} />
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Skills;