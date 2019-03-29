import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: "Under the Bridge", duration: '4:05' },
        { title: "Californication", duration: '3:45' },
        { title: "Otherside", duration: '4:25' },
        { title: "Throw Away Your Television", duration: '3:37' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})