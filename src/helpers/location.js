export function getCharacterIds (location) {
  return location.residents.map(resident => {
    const segments = resident.split('/')
    return segments.slice(-1)
  }).join(',')
}
