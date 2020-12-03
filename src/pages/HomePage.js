import React from 'react';
import Hero from '../components/Hero';

function HomePage({ data, id }) {
    return (
        <div id={id}>
            <Hero data={data} />
        </div>
    );
}

export default HomePage;