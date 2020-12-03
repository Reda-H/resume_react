import React from 'react';
import Content from '../components/Content';

import HeroCured from '../components/HeroCured';
import Skills from '../components/Skills';

function AboutPage({ data, id }) {
    const auiLink = 'http://www.aui.ma/en/';
    const gitLink = 'https://github.com/Reda-H';
    const contactLink = '';

    return (
        <div className="div-about" id={id}>
            <div className="mt-5">
                <HeroCured title={data.title} />

                <Content>
                    <p>I'm a Full Stack Web Developer / Software Engineer / Data Scientist / Computer Scientist and recent graduate from <a href={auiLink} className="a-aui" target="_blank" rel="noopenver noreferrer">Al Akhawayn University in Ifrane</a> with a B.Sc in Computer Sciences</p>
                    <p>Currently, I'm working on <a href={gitLink} className="a-project" target="_blank" rel="noopenver noreferrer">personal projects</a> and looking for a project to pour my passion into !</p>
                    <p>To contact me, send me a mail through <a href={contactLink} className="a-contact" target="_blank" rel="noopenver noreferrer">Here !</a></p>

                    <Skills />
                </Content>
            </div>
        </div>
    );
}

export default AboutPage;