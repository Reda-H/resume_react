import React from 'react';
import Carousel from '../components/Carousel';
import HeroCured from '../components/HeroCured';
import WorkExperience from '../components/WorkExperience';

function ProjectsPage({ data, id }) {
    return (
        <div className="div-projects" id={id}>
            <HeroCured title={data.title}/>
            {/* <Carousel /> */}
            <WorkExperience />
        </div>
    );
}

export default ProjectsPage;