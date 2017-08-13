import * as types from './types'

export function playSong(songSelected, modalProps) {
  return {
    type: types.PLAY_MUSIC,
    songSelected: songSelected,
  };
}

export function stopSong() {
  return {
    type: types.STOP_MUSIC,
  };
}
