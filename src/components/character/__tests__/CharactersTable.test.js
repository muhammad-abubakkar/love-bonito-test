import setup from '@/setup'
import Character from '@/models/character'
import { character } from '@/helpers/character'
import { render } from '@testing-library/vue'
import CharactersTable from '@/components/character/CharactersTable'

jest.mock('idb')

describe('Test Characters Table', () => {
  it('should display correct table heading', () => {
    const { getByText } = render(CharactersTable, {
      ...setup,
      props: {
        heading: 'Other characters ' + character.location.name,
        character: {
          loading: true,
          selected: new Character(character),
          list: []
        }
      }
    })
    getByText('Other characters ' + character.location.name)
  })
  it('should display loading text', () => {
    const { getByText } = render(CharactersTable, {
      ...setup,
      props: {
        character: {
          loading: true,
          selected: new Character(character),
          list: []
        }
      }
    })
    getByText('Loading Characters...')
  })
  it('should display no result text', () => {
    const { getByText } = render(CharactersTable, {
      ...setup,
      props: {
        character: {
          loading: false,
          selected: new Character(character),
          list: []
        }
      }
    })
    getByText('No Character Found')
  })
  it('should not display no result text', () => {
    const { getByText } = render(CharactersTable, {
      ...setup,
      props: {
        character: {
          loading: false,
          selected: new Character(character),
          list: [new Character(character)]
        }
      }
    })
    getByText(character.name)
  })
})
