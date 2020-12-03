import React from 'react';
import Carousel from '../components/Carousel';
import HeroCured from '../components/HeroCured';

function ProjectsPage({ data, id }) {
    return (
        <div className="div-projects" id={id}>
            <HeroCured title={data.title}/>
            <Carousel />
        </div>
    );
}

export default ProjectsPage;