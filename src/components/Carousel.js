import React from 'react';
import {Container, Row } from 'react-bootstrap';

import Card from './Card';



class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'PayLogic Website',
                    subTitle: 'HTML/CSS Javascript website',
                    imgSrc: 'http://placekitten.com/800/1400',
                    link: 'https://github.com/Reda-H/capstoneProject',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Digital Currency Project',
                    subTitle: 'Title of the Project/Position',
                    imgSrc: 'http://placekitten.com/800/1400',
                    link: 'http://www.google.com',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Portfolio Project',
                    subTitle: 'Title of the Project/Position',
                    imgSrc: 'http://placekitten.com/800/1400',
                    link: 'http://www.google.com',
                    selected: false
                },

                {
                    id: 3,
                    title: 'Cosmic',
                    subTitle: 'Networking Application',
                    imgSrc: 'http://placekitten.com/800/1400',
                    link: 'http://www.google.com',
                    selected: false
                },
            ],
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }
}

export default Carousel;