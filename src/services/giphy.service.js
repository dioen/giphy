export class GiphyService {
    constructor() {
        this.endpointUrl = 'https://api.giphy.com';
        this.trendingPath = '/v1/gifs/trending';
        this.uploadPath = 'http://upload.giphy.com/v1/gifs';
        this.apiKey = 'fFH6NGNWoqftugF4B2ux8tIUByNggprr';
        this.limit = 25;
        this.rating = 'G';
    }

    fetchTrendingGifs = (offset = 25) =>
        fetch(this.endpointUrl + this.trendingPath + '?api_key=' + this.apiKey + '&limit=' + this.limit + '&rating=' + this.rating + '&offset=' + offset)
            .then(response => response.json());

    uploadGif = (fileGifBinary) => {
        const form = new FormData();
        form.append("file", fileGifBinary);

        const options = {
            method: 'POST',
            body: form
        }

        return fetch(this.uploadPath + '?api_key=' + this.apiKey, options)
            .then(result => result.json())
            .catch(error => console.log(error))
    }
}