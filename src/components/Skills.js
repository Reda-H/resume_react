import React from 'react';
import { Card, Col, Container, Row, Image } from 'react-bootstrap';

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
                    ]
                },
                {
                    category: 'Desktop',
                    technologies: [
                        { name: 'Python', link: pythonLogo },
                        { name: 'C', link: cLogo },
                        { name: 'C++', link: cppLogo },
                        { name: 'Java', link: javaLogo },
                    ]
                },
                {
                    category: 'Frontend',
                    technologies: [
                        { name: 'ReactJs', link: reactjsLogo },
                        { name: 'React Native', link: reactjsLogo },
                        { name: 'HTML', link: htmlLogo },
                        { name: 'CSS', link: cssLogo },
                        { name: 'Javascript', link: javascriptLogo },
                        { name: 'Android Studio', link: androidstudioLogo }
                    ]
                },
                {
                    category: 'Database',
                    technologies: [
                        { name: 'MongoDB', link: mongodbLogo },
                        { name: 'SQL/MySQL', link: mysqlLogo },
                        { name: 'PHPMyAdmin', link: phpMyAdminLogo },
                        { name: 'PostgreSQL', link: postgresqlLogo }
                    ]
                },
                {
                    category: 'Artificial Intelligence',
                    technologies: [
                        { name: 'Keras', link: kerasLogo },
                        { name: 'TensorFlow', link: tensorflowLogo },
                        { name: 'PyTorch', link: pytorchLogo }
                    ]
                },
                {
                    category: 'Design',
                    technologies: [
                        { name: 'Adobe XD', link: adobexdLogo },
                        { name: 'Photoshop', link: photoshopLogo },
                        { name: 'Lunacy', link: lunacyLogo }
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <HeroCured title={'Skills'} subTitle={"I have proficiency in the following skills"} titleSize={'display-4'} />
                <Container className="mb-2">
                    {
                        this.state.items.map((item) => {
                            return (
                                <SkillCategory item={item} />
                            )
                        })
                    }
                </Container>
            </div>
        );
    }
}

export default Skills;