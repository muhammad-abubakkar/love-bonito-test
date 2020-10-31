export default class Episode {
  constructor (episode) {
    this.id = episode.id
    this.name = episode.name
    this.air_date = episode.air_date
    this.episode = episode.episode
    this.characters = episode.characters
    this.url = episode.url
    this.created = episode.created
  }
}
