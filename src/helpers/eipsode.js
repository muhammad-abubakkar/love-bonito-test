export function getEpisodeIds(character) {
    return character.episode.map(episode => {
        let segments = episode.split('/')
        return segments.slice(-1)
    }).join(',')
}