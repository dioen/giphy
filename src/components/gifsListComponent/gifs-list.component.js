import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { GifsContextHoc } from '../../hocs/gifs-context.hoc';
import { LikeButtonComponent } from '../likeButtonComponent/like-button.component';
import { HeaderComponent } from '../headerComponent/header.component';

class GifsListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            sort_type: 'ascending'
        }
    }

    sortByDateDescending = (array) => array.sort((priorElement, nextElement) => (new Date(priorElement.import_datetime).getTime() - new Date(nextElement.import_datetime).getTime()))

    sortData = (sortType) => {
        let data;
        switch (sortType) {
            case 'ascending':
                data = this.sortByDateDescending(this.state.data).reverse();
                break;

            case 'descending':
                data = this.sortByDateDescending(this.state.data);
                break;

            default:
                return;
        }

        this.setState({
            data: data,
            sort_type: sortType
        });
    }

    handleActiveSortButton = (e) => {
        e.preventDefault();
        Array.from(e.target.parentElement.parentElement.childNodes).map(child => child.classList.remove('active'));
        e.target.parentElement.classList.add('active');
    }

    handleScrollToBottom = (e) => {
        if (window.innerHeight + window.scrollY >= document.getElementsByTagName('body')[0].offsetHeight) {
            this.props.context.loadNextGifsOffset();
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScrollToBottom);
        if (this.state.data !== this.props.context.data) {
            this.setState({
                data: this.sortByDateDescending(this.props.context.data).reverse()
            });
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.data !== this.props.context.data) {
            this.setState({
                data: this.sortByDateDescending(this.props.context.data).reverse()
            });
        }
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScrollToBottom);
    }

    render = () => {
        return (
            <div className="row">
                <div className="col-md-12">
                    <HeaderComponent />
                    <div className="row sort-form-wrapper">
                        <ul className="nav nav-pills pull-right">
                            <li className="active" onClick={(e) => {
                                this.handleActiveSortButton(e);
                                this.sortData('ascending');
                            }}><a>ascending</a></li>
                            <li className="" onClick={(e) => {
                                this.handleActiveSortButton(e);
                                this.sortData('descending');
                            }}><a>descending</a></li>
                        </ul>
                    </div>
                    <div className="col-md-12">
                        {
                            this.state.data.map((gif, index) => (
                                <div key={index} className="col-sm-4 gif-card-wrapper">
                                    <div className="card">
                                        <img className="gif-card-img" src={gif.images.fixed_width.url} alt={gif.title} />
                                        <div className="card-body card-body-wrapper">
                                            <h5 className="card-title">{gif.title}</h5>
                                            <a href={gif.embed_url} target="_blank">show embeded</a>
                                            <div className="gif-details-link">
                                                <Link to={{ pathname: "/gif-details", state: { gif } }}>details</Link>
                                            </div>
                                            <LikeButtonComponent gifObject={gif} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export const GifsListComponentHoc = GifsContextHoc(GifsListComponent);