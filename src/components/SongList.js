//Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

//Component
class SongList extends Component {
    //Functions
    renderList() {
        return this.props.songs.map( song => {
            return (
                <div className="item" key={ song.title }>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={ ()=> this.props.selectSong(song) }>
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    //Render
    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

//Connect Function (Reducers to Props)
const mapStateToProps = (state) => {
    return { songs: state.songs };

}

//Export (Connect - two functions to connect store/actions to component)
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);