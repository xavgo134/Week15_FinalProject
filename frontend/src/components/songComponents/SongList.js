import React, { Component } from 'react';
import Song from './Song.js';
import Request from '../../helper/request.js';
import {Link} from 'react-router-dom';

const SongList = (props) => {

	const songs = props.songs.map((song) => {
		return (
					<div key={song.id} className = "list-item">
						<Link to = {"/songs/" + song.id} className="noLine">
							<Song song={song} />
						</Link>
					</div>
		)
	})

	return (
		<div className="component-list">
	    {songs}
	  </div>

	)
}
 export default SongList;
