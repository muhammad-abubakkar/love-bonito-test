import Character from '@/models/character'
import { render } from '@testing-library/vue'
import { character } from '@/helpers/character'
import CharacterCard from '@/components/character/CharacterCard'

describe('Test Character Card Component', () => {
  it('should display character name', () => {
    const { getByText } = render(CharacterCard, {
      props: {
        character: new Character(character)
      }
    })
    getByText(character.name)
  })
  it('should display character type', () => {
    const { getByText } = render(CharacterCard, {
      props: {
        character: new Character(character)
      }
    })
    getByText(character.type || 'Unknown')
  })
  it('should have character image alt text', () => {
    const { getByAltText } = render(CharacterCard, {
      props: {
        character: new Character(character)
      }
    })
    getByAltText(character.name + '\'s Image')
  })
})
