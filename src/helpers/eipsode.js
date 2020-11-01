export function getEpisodeIds (character) {
  return character.episode.map(episode => {
    const segments = episode.split('/')
    return segments.slice(-1)
  }).join(',')
}

export const episode = {
  id: 5,
  name: 'Meeseeks and Destroy',
  air_date: 'January 20, 2014',
  episode: 'S01E05',
  characters: [
    'https://rickandmortyapi.com/api/character/1',
    'https://rickandmortyapi.com/api/character/2',
    'https://rickandmortyapi.com/api/character/38',
    'https://rickandmortyapi.com/api/character/41',
    'https://rickandmortyapi.com/api/character/89',
    'https://rickandmortyapi.com/api/character/116',
    'https://rickandmortyapi.com/api/character/117',
    'https://rickandmortyapi.com/api/character/120',
    'https://rickandmortyapi.com/api/character/175',
    'https://rickandmortyapi.com/api/character/193',
    'https://rickandmortyapi.com/api/character/238',
    'https://rickandmortyapi.com/api/character/242',
    'https://rickandmortyapi.com/api/character/271',
    'https://rickandmortyapi.com/api/character/303',
    'https://rickandmortyapi.com/api/character/326',
    'https://rickandmortyapi.com/api/character/333',
    'https://rickandmortyapi.com/api/character/338',
    'https://rickandmortyapi.com/api/character/343',
    'https://rickandmortyapi.com/api/character/399',
    'https://rickandmortyapi.com/api/character/400'
  ],
  url: 'https://rickandmortyapi.com/api/episode/5',
  created: '2017-11-10T12:56:34.236Z'
}
