export default class Location {
    constructor(location) {
        this.id = location.id
        this.name = location.name
        this.type = location.type
        this.dimension = location.dimension
        this.residents = location.residents
        this.url = location.url
        this.created = location.created
    }
}