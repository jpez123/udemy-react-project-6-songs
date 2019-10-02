//Imports
import { combineReducers } from 'redux';

//Reducers
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '3:00' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type == 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

//Reducer Store
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});