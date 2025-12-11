/**
 * Добавить новый трек в начало плейлиста
 *
 * @param {number[]} playlist - массив треков
 * @param {number} newTrack - новый трек для добавления
 *
 * @returns {number[]} плейлист с добавленным треком в начале
 */
function addTrackToBeginning(playlist, newTrack) {
  playlist.unshift(newTrack);
  return playlist;
}
