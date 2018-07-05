import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { UploadGifComponentHoc } from '../uploadGifComponent/upload-gif.component';

export class HeaderComponent extends Component {

    render = () => (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <div className="navbar-container col-md-8 pull-right">
                    <Link to="/" className="navbar-item-link">
                        <div className="col-md-3 navbar-item">trending</div>
                    </Link>
                    <Link to="/favourite-gifs" className="navbar-item-link">
                        <div className="col-md-3 navbar-item">favourites</div>
                    </Link>
                    <div className="col-md-3 navbar-item">
                        <UploadGifComponentHoc />
                    </div>
                </div>
            </div>
        </nav>
    )
}
