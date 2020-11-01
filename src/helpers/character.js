export function getCharacterIds (location) {
  return location.residents.map(resident => {
    const segments = resident.split('/')
    return segments.slice(-1)
  }).join(',')
}

export const character = {
  id: 12,
  type: 'unknown',
  gender: 'Male',
  status: 'Dead',
  species: 'Human',
  name: 'Alexander',
  created: '2017-11-04T20:32:33.144Z',
  url: 'https://rickandmortyapi.com/api/character/12',
  episode: ['https://rickandmortyapi.com/api/episode/3'],
  image: 'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
  origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  location: { name: 'Anatomy Park', url: 'https://rickandmortyapi.com/api/location/5' }
}
