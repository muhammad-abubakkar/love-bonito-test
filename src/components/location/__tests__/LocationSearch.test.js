import setup from '@/setup'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/vue'
import LocationSearch from '@/components/location/LocationSearch'

jest.mock('idb')

describe('Test Location Search Component', () => {
  it('should display input box', () => {
    const { getByPlaceholderText } = render(LocationSearch, {
      ...setup
    })
    getByPlaceholderText('Search')
  })
  it('should allow to type in search box', () => {
    const { getByPlaceholderText } = render(LocationSearch, {
      ...setup
    })
    const searchInput = getByPlaceholderText('Search')
    userEvent.type(searchInput, 'Earth')
    expect(searchInput.value).toBe('Earth')
  })
})
