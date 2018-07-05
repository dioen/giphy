import React, { Component } from 'react';

export class LikeButtonComponent extends Component {

    toggleActiveClass = (e) => e.target.classList.toggle('active');

    handleButtonClick = (e, gifObject) => {
        this.toggleActiveClass(e);
        const favourites = JSON.parse(localStorage.getItem('favourite_gifs'));
        if (favourites.filter(gif => gif.id === gifObject.id).length === 0) {
            favourites.push(gifObject);
            localStorage.setItem('favourite_gifs', JSON.stringify(favourites));
        }
    }

    componentDidMount = () => ((localStorage.getItem('favourite_gifs') === null) ? localStorage.setItem('favourite_gifs', '[]') : null)

    render = () => (<div className="like-button" onClick={(e) => {
        this.handleButtonClick(e, this.props.gifObject);
    }}>&#10084;</div>)
}