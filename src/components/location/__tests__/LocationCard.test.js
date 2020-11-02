import Location from '@/models/location'
import { render, fireEvent } from '@testing-library/vue'
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
  it('should display location dimension', () => {
    const { getByText } = render(LocationCard, {
      props: {
        selected: location.id,
        location: new Location(location)
      }
    })
    getByText(location.dimension)
  })
  it('should display location type', () => {
    const { getByText } = render(LocationCard, {
      props: {
        selected: location.id,
        location: new Location(location)
      }
    })
    getByText(location.type)
  })
  it('should emit select event on click', async () => {
    const methods = {
      onSelect: jest.fn()
    }
    const { findByTestId } = render(LocationCard, {
      props: {
        selected: location.id,
        location: new Location(location)
      },
      methods: methods
    })
    const card = await findByTestId('location-card')
    await fireEvent.click(card)
    expect(methods.onSelect.mock.calls.length).toBe(1)
  })
})
