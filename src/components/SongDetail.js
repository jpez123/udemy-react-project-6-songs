//Imports
import React from 'react';
import { connect } from 'react-redux';

//Component
const SongDetail = ({song}) => {
    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}<br />
                Duration: {song.duration}
            </p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

//Export
export default connect(mapStateToProps)(SongDetail);