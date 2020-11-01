import Location from '@/models/location'
import { render } from '@testing-library/vue'
import { location } from '@/helpers/location'
import LocationCard from '@/components/location/LocationCard'

describe('Test Location Card Component', () => {
  it('should display location name', () => {
    const { getByText } = render(LocationCard, {
      props: {
        selected: location.id,
        location: new Location(location)
      }
    })
    getByText(location.name)
  })
})
