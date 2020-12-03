import React from 'react';

import CardInfo from './CardInfo';

function Card({item, onClick, key}) {

    return (
        <div key={key} className="d-inline-block g-card" onClick={(e) => onClick(item)}>
            <img className="g-card-image" src={item.imgSrc} alt={item.imgSrc}/>
            { item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link}/> }
        </div>
    );
}

export default Card;