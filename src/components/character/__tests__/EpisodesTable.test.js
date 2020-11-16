import setup from '@/setup'
import Episode from '@/models/episode'
import { episode } from '@/helpers/episode'
import { render } from '@testing-library/vue'
import EpisodesTable from '@/components/character/EpisodesTable'

jest.mock('idb')

describe('Test Character Episode Table', () => {
  it('should display loading text', () => {
    const { getByText } = render(EpisodesTable, {
      ...setup,
      props: {
        episode: {
          loading: true,
          list: []
        }
      }
    })
    getByText('Loading Episodes...')
  })
  it('should display no result text', () => {
    const { getByText } = render(EpisodesTable, {
      ...setup,
      props: {
        episode: {
          loading: false,
          list: []
        }
      }
    })
    getByText('No Episode Found')
  })
  it('should not display no result text', () => {
    const { getByText } = render(EpisodesTable, {
      ...setup,
      props: {
        episode: {
          loading: false,
          list: [new Episode(episode)]
        }
      }
    })
    getByText(episode.name)
  })
})
