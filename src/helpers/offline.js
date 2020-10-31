import { openDB } from 'idb'

const dbPromise = openDB('montydb', 1, {
  upgrade (db) {
    db.createObjectStore('location')
    db.createObjectStore('character')
    db.createObjectStore('episode')
  }
})

export const dbStorage = {
  async getLocations (key) {
    return (await dbPromise).get('location', key)
  },
  async setLocations (key, val) {
    return (await dbPromise).put('location', val, key)
  },
  async getCharacters (key) {
    return (await dbPromise).get('character', key)
  },
  async setCharacters (key, val) {
    return (await dbPromise).put('character', val, key)
  },
  async getEpisodes (key) {
    return (await dbPromise).get('episode', key)
  },
  async setEpisodes (key, val) {
    return (await dbPromise).put('episode', val, key)
  }
}
