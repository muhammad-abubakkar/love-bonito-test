export function getCharacterIds(location) {
    return location.residents.map(resident => {
        let segments = resident.split('/')
        return segments.slice(-1)
    }).join(',')
}