import React, { Component } from 'react';

import { GifsContext } from '../contexts/gifs.context';


export const GifsContextHoc = InputComponent => {
    return class GifsContextHoc extends Component {

        render = () => (
            <GifsContext.Consumer>
                {
                    data => {
                        return <InputComponent context={data} {...this.props} />
                    }
                }
            </GifsContext.Consumer>
        )
    }
}
