import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo({ title, subTitle, link}) {

    const style = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <animated.div className="g-card-info text-center" style={style}>
            <p className="g-card-title">{ title }</p>
            <p className="g-card-sub-title">{ subTitle }</p>
            <a href={link} target="_blank" rel="noopenver noreferrer">View</a>
        </animated.div>

    );

}

export default CardInfo;