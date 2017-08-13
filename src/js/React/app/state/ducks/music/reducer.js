import * as types from './types';

const INITIAL_STATE = {
  songSelected: null,
  playMusic: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.PLAY_MUSIC:
      return { songSelected: action.songSelected, playMusic: true }
    case types.STOP_MUSIC:
      return {playMusic: false}
    default:
      return state
  }
};
