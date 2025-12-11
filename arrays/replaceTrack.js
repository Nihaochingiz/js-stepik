/**
 * Заменить трек в плейлисте по указанной позиции на новый трек
 *
 * @param {number[]} playlist - массив треков
 * @param {number} position - позиция трека для замены
 * @param {number} newTrack - новый трек для замены
 *
 * @returns {number[]} плейлист с замененным треком
 */
function replaceTrack(playlist, position, newTrack) {
  playlist[position] = newTrack;
  return playlist;
}
const position = 2;
const newTrack = 12;
console.log(replaceTrack([10, 5, 8, 3], position, newTrack));