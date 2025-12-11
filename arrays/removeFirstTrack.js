/**
 * Удалить первый трек из плейлиста
 *
 * @param {number[]} playlist - массив треков
 *
 * @returns {number[]} плейлист без первого трека
 */
function removeFirstTrack(playlist) {
  playlist.shift();
  return playlist;
}
