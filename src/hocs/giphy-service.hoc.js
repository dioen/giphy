import React, { Component } from 'react';
import { GiphyService } from '../services/giphy.service';

export const GiphyServiceHoc = InputComponent => {
    return class GiphyServiceHoc extends Component {
        constructor(props) {
            super(props);

            this.GiphyService = new GiphyService();
        }

        render = () => (<InputComponent GiphyService={this.GiphyService} {...this.props} />)
    }
}