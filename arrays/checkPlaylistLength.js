/**
 * Проверить, равна ли длина плейлиста ожидаемому значению
 *
 * @param {number[]} playlist - массив треков
 * @param {number} expectedLength - ожидаемая длина плейлиста
 *
 * @returns {boolean} true если длина плейлиста равна ожидаемой, иначе false
 */
function checkPlaylistLength(playlist, expectedLength) {
  return playlist.length === expectedLength;
}
const expectedLength = 5;
console.log(checkPlaylistLength([6, 9, 3, 12, 1], expectedLength));