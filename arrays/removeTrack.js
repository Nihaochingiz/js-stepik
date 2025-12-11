/**
 * Удалить трек из плейлиста по указанной позиции
 *
 * @param {number[]} playlist - массив треков
 * @param {number} position - позиция трека для удаления
 *
 * @returns {number[]} плейлист без удаленного трека
 */
function removeTrack(playlist, position) {
  const updatedPlaylist = [...playlist];
  updatedPlaylist.splice(position, 1);

  return updatedPlaylist;
}
const position = 2;
console.log(removeTrack([6, 9, 3, 12, 1], position));