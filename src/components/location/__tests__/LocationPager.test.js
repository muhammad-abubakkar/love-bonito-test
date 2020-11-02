import setup from '@/setup'
import { info } from '@/helpers/location'
import { render, fireEvent } from '@testing-library/vue'
import LocationPager from '@/components/location/LocationPager'

jest.mock('idb')

const options = {
  ...setup,
  props: {
    info
  }
}

describe('Test Location Pager Component', () => {
  it('should display total pages and results', () => {
    const { getByText } = render(LocationPager, options)
    getByText(`${info.count} Locations`)
    getByText(`Page 1 / ${info.pages}`)
  })

  it('should have prev button disabled', () => {
    const { getByTestId } = render(LocationPager, options)
    const prevBtn = getByTestId('prev-btn')
    expect(prevBtn.disabled).toBe(true)
  })

  it('should have next button active', () => {
    const { getByTestId } = render(LocationPager, options)
    const nextBtn = getByTestId('next-btn')
    expect(nextBtn.disabled).toBe(false)
  })

  it('should call onNext method on next button click', () => {
    const methods = {
      onNext: jest.fn()
    }
    const { getByTestId } = render(LocationPager, {
      ...options,
      methods: methods
    })
    const nextBtn = getByTestId('next-btn')
    fireEvent.click(nextBtn)
    expect(methods.onNext.mock.calls.length).toBe(1)
  })
})
