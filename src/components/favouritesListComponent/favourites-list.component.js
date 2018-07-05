import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { HeaderComponent } from '../headerComponent/header.component';

export class FavouritesListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favourites: []
        }
    }

    componentDidMount = () => {
        const localStorageData = JSON.parse(localStorage.getItem('favourite_gifs'));

        this.setState({
            favourites: localStorageData
        })
    }

    render = () => (
        <div className="container">
            <div className="col-md-12">
                <div className="row">
                    <HeaderComponent />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            this.state.favourites.map((gif, index) => (
                                <div key={index} className="col-sm-4 gif-card-wrapper">
                                    <div className="card">
                                        <img className="gif-card-img" src={gif.images.fixed_width.url} alt={gif.title} />
                                        <div className="card-body card-body-wrapper">
                                            <h5 className="card-title">{gif.title}</h5>
                                            <a href={gif.embed_url} target="_blank">show embeded</a>
                                            <div className="gif-details-link">
                                                <Link to={{ pathname: "/gif-details", state: { gif } }}>details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
