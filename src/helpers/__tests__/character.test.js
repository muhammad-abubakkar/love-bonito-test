import { getCharacterIds } from '@/helpers/character'
import { location } from '@/helpers/location'

describe('Character helper functions', () => {
  describe('Test getCharacterIds', () => {
    it('should return ids of characters from given location', () => {
      expect(getCharacterIds(location)).toBe('424,425')
    })
  })
})
