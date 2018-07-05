import React, { Component } from 'react';

import { GiphyServiceHoc } from '../../hocs/giphy-service.hoc';

class UploadGifComponent extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { GiphyService } = this.props;
        const file = e.target.files[0];

        GiphyService.uploadGif(file)
            .then(response =>
                alert('gif uploaded\n here is the link\n\nhttps://giphy.com/gifs/' + response.data.id));
    }

    componentDidMount = () => {
        const inputTag = document.getElementById('file-upload');

        inputTag.addEventListener('change', this.handleFormSubmit);
    }

    render = () => (
        <form encType="multipart/form-data">
            <div className="upload-file-content">
                <label htmlFor="file-upload" className="custom-file-upload">
                    Custom Upload
                </label>
                <input id="file-upload" type="file" />
            </div>
        </form>
    )
}

export const UploadGifComponentHoc = GiphyServiceHoc(UploadGifComponent);