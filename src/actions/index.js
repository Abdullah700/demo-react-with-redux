// action creator
 export const selectSong = song => {
	// return as action 
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};


