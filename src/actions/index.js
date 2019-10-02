//Action creator to select song (named export)
export const selectSong = (song) => {
    //Return an action (type, payload)
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

