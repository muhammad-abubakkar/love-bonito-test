import { getEpisodeIds } from '@/helpers/episode'
import { character } from '@/helpers/character'

describe('Episode helper functions', () => {
  describe('Test getEpisodeIds', () => {
    it('should return ids of episodes for given character', () => {
      expect(getEpisodeIds(character)).toBe('3,4')
    })
  })
})
