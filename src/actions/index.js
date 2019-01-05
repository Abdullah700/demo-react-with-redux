// action creator
 export const selectSong = song => {
	// return as action //#endregion
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};


