import React from 'react';
import { Chrono } from 'react-chrono';

import medSaharanLogo from '../static/technologies/med-saharan-logo.png';
import reacLogo from '../static/technologies/reac-logo.png';
import paylogicLogo from '../static/technologies/paylogic-logo.png';
import unireverLogo from '../static/technologies/unirever-logo.png';
import cosmicLogo from '../static/technologies/cosmic-logo.png';
import { Col, Row, Image, Container } from 'react-bootstrap';

const items = [
    {
        title: "Sep 2017 – Feb 2018",
        cardTitle: "Head of Committee - AUI MedSaharan Challenge | Al Akhawayn University | Morocco, Ifrane",
        cardDetailedText: "My responsibilities as head of committee included the complete organization of an international sports tournament. My position handled the communication systems as well as external/internal communication during the tournament. This work specifically involved creating a simple system on Android to send messages between the parties. Moreover, it enabled the communication between the sponsors, the incoming teams, and universities.",
        media: {
            name: "AUI MedSaharan Challenge",
            source: {
                url: medSaharanLogo
            },
            type: "IMAGE"
        },
    },
    {
        title: "Sep 2018 – Dec 2019 ",
        cardTitle: "Volunteer Web Developer | REAC Organization | Morocco, Casablanca",
        cardDetailedText: "My time volunteering for REAC, in which I developed a website for the organization with the help of my teammate, has taught me how to relay information and knowledge to other parties with greater ease. I taught French and web development to marginalized groups and was able to create a simple website in JS, HTML and CSS to organize the REAC’s façade.",
        media: {
            name: "REAC Logo",
            source: {
                url: reacLogo
            },
            type: "IMAGE"
        },
    },
    {
        title: "Aug 2019 – Feb 2020",
        cardTitle: "Intern Java Developer | PayLogic | Casablanca, Morocco ",
        cardDetailedText: "My internship focused on the Java Backend Developer, where I worked with Spring framework to develop a routing system between two interfaces. This created a reliable communication link to exchange data. My time with this company has helped progress and develop my soft skills.",
        media: {
            name: "PayLogic Logo",
            source: {
                url: paylogicLogo
            },
            type: "IMAGE"
        },
    },
    {
        title: "Aug 2019 – May 2020",
        cardTitle: "Intern UX Designer | UniRever | Massachusetts, Boston",
        cardDetailedText: "I worked as a User Experience Designer in this fast-growing start-up. My job involved testing the system for perspicuity, usability, attractiveness and more. My role involved resolving areas that lacked efficiency. This internship has helped develop design journey maps and user personas. Furthermore, I also learned how to prepare wireframes for the front-end team and work with design tools such as Adobe XD and Lunacy in order to communicate with ease with the engineers. The second part of my internship involved work as a front-end developer with ReactJs to progress the wireframes that I had previously helped design.",
        media: {
            name: "UniRever Logo",
            source: {
                url: unireverLogo
            },
            type: "IMAGE"
        },
    },
    {
        title: "Aug 2020 - Dec 2020",
        cardTitle: "Lead Application Developer | Cosmic | Morocco, Casablanca",
        cardDetailedText: "My work as a Full Stack App Developer with Cosmic has truly expanded my aptitude. By working closely with the CEO, I led the development of a networking app and set up the whole system using Django framework, as well as React Native, PostgreSQL and AWS. I applied the setup of the development process with an agile methodology as well as Gitflow Workflow. By working on the backend, frontend and database design, I was able to expand my skill set exponentially. Moreover, I also translated all the requirements and prepared the architecture of the app for high usage scaling.",
        media: {
            name: "Cosmic Logo",
            source: {
                url: cosmicLogo
            },
            type: "IMAGE"
        },
    }];

function WorkExperience() {
    console.log(items);
    return (
        <div>
            <Chrono theme={{ cardBgColor: '#FFCB9A'}} mode="VERTICAL_ALTERNATING">
                {items.map((item) => {
                    return (
                        <div className="experience-card">
                            <Row style={{display: 'flex', alignItems: 'center'}}>
                                <Col style={{ maxWidth: '210px', display: 'inline-block', height: '100%', verticalAlign: 'middle' }}>
                                    <Image style={{ maxWidth: '100%' }} src={item.media.source.url} />
                                </Col>
                                <Col style={{ verticalAlign: 'middle' }}>
                                    <h5 className="first-color">{item.cardTitle}</h5>
                                    <p className="second-color lead font-italic">{item.title}</p>
                                    <p className="m-1 first-color" style={{ fontSize: '14px' }}>{item.cardDetailedText}</p>
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </Chrono>
        </div>
    );

}

export default WorkExperience;