export function getEpisodeIds (character) {
  return character.episode.map(episode => {
    const segments = episode.split('/')
    return segments.slice(-1)
  }).join(',')
}
