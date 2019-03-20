import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID 81e073c0e421ecf6f9858277d550ca1d2692c380d252a525bd2d9e703383cc3d',
      }
})