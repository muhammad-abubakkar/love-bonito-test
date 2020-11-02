import Location from '@/models/location'
import { render } from '@testing-library/vue'
import { location } from '@/helpers/location'
import LocationCharacters from '@/components/location/LocationCharacters'

describe('Test Location Characters Component', () => {
  it('should display location name', () => {
    const { getByText } = render(LocationCharacters, {
      props: {
        character: {
          loading: false,
          list: []
        },
        location: new Location(location)
      }
    })
    getByText(location.name)
  })
})
