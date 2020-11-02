import setup from '@/setup'
import Location from '@/models/location'
import Character from '@/models/character'
import { render } from '@testing-library/vue'
import { location } from '@/helpers/location'
import { character } from '@/helpers/character'
import LocationCharacters from '@/components/location/LocationCharacters'

jest.mock('idb')

describe('Test Location Characters Component', () => {
  it('should display location name', () => {
    const { getByText } = render(LocationCharacters, {
      ...setup,
      computed: {
        character: () => ({
          loading: false,
          list: [new Character(character)]
        }),
        location: () => new Location(location)
      }
    })
    getByText(location.name)
  })
})
