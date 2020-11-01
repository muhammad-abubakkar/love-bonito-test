export function getCharacterIds (location) {
  return location.residents.map(resident => {
    const segments = resident.split('/')
    return segments.slice(-1)
  }).join(',')
}

export const location = {
  id: 71,
  type: 'Planet',
  dimension: 'Pizza Dimension',
  name: 'Earth (Pizza Dimension)',
  created: '2018-04-15T17:55:04.478Z',
  url: 'https://rickandmortyapi.com/api/location/71',
  residents: [
    'https://rickandmortyapi.com/api/character/424',
    'https://rickandmortyapi.com/api/character/425'
  ]
}
