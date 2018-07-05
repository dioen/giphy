import React, { Component } from 'react';

import { GiphyServiceHoc } from '../hocs/giphy-service.hoc';

export const GifsContext = React.createContext();

class GifsContextComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            current_offset: 25
        }
    }

    loadNextGifsOffset = () => this.props.GiphyService.fetchTrendingGifs(this.state.current_offset)
        .then(giphsData => {
            this.setState({
                data: [...this.state.data, ...giphsData.data],
                current_offset: this.state.current_offset + 25
            });
        });

    componentDidMount = () => this.loadNextGifsOffset();

    render = () => {
        return (
            <GifsContext.Provider value={{
                data: this.state.data,
                loadNextGifsOffset: () => {
                    this.loadNextGifsOffset();
                }
            }}>
                {this.props.children}
            </GifsContext.Provider>
        )
    }
}

export const GiphyContextHoc = GiphyServiceHoc(GifsContextComponent);