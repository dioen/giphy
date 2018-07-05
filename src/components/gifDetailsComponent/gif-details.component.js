import React, { Component } from 'react';

import { HeaderComponent } from '../headerComponent/header.component';
import { GifsContextHoc } from '../../hocs/gifs-context.hoc';
import { LoadingSpinnerComponent } from '../loadingSpinnerComponent/loading-spinner.component';

class gifDetailsComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gif: null,
            related: [],
            gif_loaded: false
        }
    }

    handleImageClick = (e, data) => {
        this.setState({
            gif: data,
            related: [
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)],
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)],
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)],
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)]
            ],
            gif_loaded: false
        });
    }

    handleImageOnLoad = () => {
        this.setState({
            gif_loaded: true
        })
    }

    componentDidMount = () => {
        (localStorage.getItem('favourite_gifs') === null) ? localStorage.setItem('favourite_gifs', '[]') : null
        this.setState({
            gif: this.props.location.state.gif,
            related: [
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)],
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)],
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)],
                this.props.context.data[Math.floor(Math.random() * this.props.context.data.length)]
            ]
        });
    }

    render = () => (
        <div className="container">
            <div className="col-md-12 gif-details-wrapper">
                <HeaderComponent />
                {
                    (this.state.gif !== null && this.state.gif !== undefined) ?
                        (
                            <div>
                                <div className="gif-details-image-wrapper">
                                    <img src={this.state.gif.images.downsized_large.url} onLoad={this.handleImageOnLoad} alt="" />
                                    {
                                        (this.state.gif_loaded) ?
                                            null
                                            :
                                            (<LoadingSpinnerComponent />)
                                    }
                                </div>
                                <div className="col-md-12 gif-details-description-wrapper">
                                    <div className="col-md-3">
                                        <h5>author</h5>
                                        {
                                            (this.state.gif.user !== undefined) ?
                                                (
                                                    <a href={this.state.gif.user.profile_url} target="_blank" title={this.state.gif.user.username}>{this.state.gif.user.display_name}</a>
                                                )
                                                :
                                                <p>anonym</p>
                                        }
                                    </div>
                                    <div className="col-md-3">
                                        <h5>rating</h5>
                                        <p>{this.state.gif.title}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h5>added</h5>
                                        <p>{this.state.gif.import_datetime}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <h5>trending</h5>
                                        <p>{this.state.gif.import_datetime}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (<div></div>)
                }
            </div>

            <div className="col-md-12 gif-details-related-wrapper">
                <h4 className="gif-details-related-header">see also</h4>
                {
                    (this.state.related.length > 0) ?
                        (<div className="">
                            <img className="col-md-3 col-sm-6" src={this.state.related[0].images.fixed_width_small_still.url} onClick={(e) => this.handleImageClick(e, this.state.related[0])} alt="" />
                            <img className="col-md-3 col-sm-6" src={this.state.related[1].images.fixed_width_small_still.url} onClick={(e) => this.handleImageClick(e, this.state.related[1])} alt="" />
                            <img className="col-md-3 col-sm-6" src={this.state.related[2].images.fixed_width_small_still.url} onClick={(e) => this.handleImageClick(e, this.state.related[2])} alt="" />
                            <img className="col-md-3 col-sm-6" src={this.state.related[3].images.fixed_width_small_still.url} onClick={(e) => this.handleImageClick(e, this.state.related[3])} alt="" />
                        </div>)
                        :
                        null
                }
            </div>
        </div>
    )
}

export const gifDetailsComponentHoc = GifsContextHoc(gifDetailsComponent);