import setup from '@/setup'
import Character from '@/models/character'
import { render } from '@testing-library/vue'
import { character } from '@/helpers/character'
import CharacterCard from '@/components/character/CharacterCard'

jest.mock('idb')

const options = {
  ...setup,
  props: {
    character: new Character(character)
  }
}

describe('Test Character Card Component', () => {
  it('should display character name', () => {
    const { getByText } = render(CharacterCard, options)
    getByText(character.name)
  })
  it('should display character type', () => {
    const { getByText } = render(CharacterCard, options)
    getByText(character.type || 'Unknown')
  })
  it('should have character image alt text', () => {
    const { getByAltText } = render(CharacterCard, options)
    getByAltText(character.name + '\'s Image')
  })
})
