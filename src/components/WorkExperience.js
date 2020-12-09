import React from 'react';
import { Chrono } from 'react-chrono';

import medSaharanLogo from '../static/technologies/med-saharan-logo.png';
import reacLogo from '../static/technologies/reac-logo.png';
import paylogicLogo from '../static/technologies/paylogic-logo.png';
import unireverLogo from '../static/technologies/unirever-logo.png';
import cosmicLogo from '../static/technologies/cosmic-logo.png';

const items = [
    {
        title: "Sep 2017 – Feb 2018",
        cardTitle: "Head of Committee - AUI MedSaharan Challenge | Al Akhawayn University | Morocco, Ifrane",
        cardDetailedText: "Complete organization of an international sports tournament, my team and I had to take care of all the work related to the tournament, more precisely I was taking care of the communication systems and external/ internal communication during the tournament, a work that includes, creating a simple system on Android to send messages between the parties, and communicating with the sponsors and the incoming teams and universities.",
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
        cardDetailedText: "Volunteering experience during which I developed a website for the Organization that I volunteered at, with the help of another volunteer we were able to create a simple website in JS, HTML and CSS to organize the facade of REAC. ",
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
        cardDetailedText: "My internship at PayLogic as a Java Backend Developer. In this internship, I have worked with Spring framework to develop a routing system between two interfaces and therefore create a reliable communication link to exchange data.I have also learned many of my soft skills in this company.",
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
        cardDetailedText: "An internship in which I have worked as a User Experience Designer in a fast, growing startup. My job was to test the system in many aspects, such as Perspicuity, Usability, Attractiveness etc...and find solutions to areas that lack in efficiency.I have learned to design journey maps and user personas, as well as prepare wireframes for the front- end team.I have learned to work with design tools such as Adobe XD, Lunacy, to communicate on a constant basis with the engineers",
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
        cardDetailedText: "I worked as a Full Stack App Developer. I have developed a networking app using React Native, Django, PostgreSQL and AWS. I have led the development of the main app of the company. Worked in close interactions with the CEO for translating the requirements to what would be developed, as well as preparing the architecture of the app for high usage scaling.",
        media: {
            name: "Cosmic Logo",
            source: {
                url: cosmicLogo
            },
            type: "IMAGE"
        },
    }];

function WorkExperience({}) {
    console.log(items);
    return(
        <div>
            <Chrono items={items} mode="VERTICAL" hideControls/>
        </div>
    );

}

export default WorkExperience;