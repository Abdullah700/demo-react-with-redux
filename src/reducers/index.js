import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '3:40' },
		{ title: 'Macarena', duration: '4:20' },
		{ title: 'All Star', duration: '2:45' },
		{ title: 'I Want IT That Way', duration: '3:26' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};


export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
