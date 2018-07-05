import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GifsListComponentHoc } from '../components/gifsListComponent/gifs-list.component';
import { gifDetailsComponentHoc } from '../components/gifDetailsComponent/gif-details.component';
import { FavouritesListComponent } from '../components/favouritesListComponent/favourites-list.component';

export class AppRouter extends Component {
    render = () => (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={GifsListComponentHoc} />
                <Route path="/gif-details" component={gifDetailsComponentHoc} />
                <Route path="/favourite-gifs" component={FavouritesListComponent} />
                <Route component={GifsListComponentHoc} />
            </Switch>
        </BrowserRouter>
    )
}