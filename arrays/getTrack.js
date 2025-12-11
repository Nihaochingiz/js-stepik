/**
 * Получить трек из плейлиста по указанной позиции (индекс начинается с 0)
 *
 * @param {number[]} playlist - массив треков
 * @param {number} position - позиция трека в плейлисте
 *
 * @returns {number} трек по указанной позиции
 */
function getTrack(playlist, position) {
  if (
    typeof position !== "number" ||
    position < 0 ||
    position >= playlist.length
  ) {
    return undefined;
  }

  return playlist[position];
}
