import { render } from '@testing-library/vue'
import { info } from '@/helpers/location'
import LocationPager from '@/components/location/LocationPager'

describe('Test Location Pager Component', () => {
  it('should prev should be total pages and results', () => {
    const { getByText } = render(LocationPager, {
      props: {
        info: info
      }
    })
    getByText(`${info.count} Locations`)
    getByText(`Pages 1 / ${info.pages}`)
  })
})
