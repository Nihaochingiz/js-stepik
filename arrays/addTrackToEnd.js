/**
 * Добавить новый трек в конец плейлиста
 *
 * @param {number[]} playlist - массив треков
 * @param {number} newTrack - новый трек для добавления
 *
 * @returns {number[]} плейлист с добавленным треком
 */
function addTrackToEnd(playlist, newTrack) {
  playlist.push(newTrack);
  return playlist;
}
const newTrack = 15;
console.log(addTrackToEnd([2, 7, 11, 4], newTrack));