/**
 * Удалить последний трек из плейлиста
 *
 * @param {number[]} playlist - массив треков
 *
 * @returns {number[]} плейлист без последнего трека
 */
function removeLastTrack(playlist) {
  playlist.pop();
  return playlist;
}
console.log(removeLastTrack([6, 9, 3, 12, 1]));
console.log(removeLastTrack([1, 2, 3]));
// => [6, 9, 3, 12]