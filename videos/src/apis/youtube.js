import axios from 'axios'

const KEY = 'AIzaSyDCl_K3lj-V1ejR_u2mqdS1pqydzri1NOM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});