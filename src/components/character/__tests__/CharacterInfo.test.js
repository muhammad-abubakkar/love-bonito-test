import Character from '@/models/character'
import { render } from '@testing-library/vue'
import { character } from '@/helpers/character'
import CharacterInfo from '@/components/character/CharacterInfo'

describe('Test Character Info Component', () => {
  it('should display character name', () => {
    const { getByText } = render(CharacterInfo, {
      props: {
        character: new Character(character)
      }
    })
    getByText(character.name)
  })
  it('should display character type', () => {
    const { getByText } = render(CharacterInfo, {
      props: {
        character: new Character(character)
      }
    })
    getByText(character.type || '---')
  })
  it('should display character status', () => {
    const { getByText } = render(CharacterInfo, {
      props: {
        character: new Character(character)
      }
    })
    getByText(character.status || '---')
  })
  it('should display go back link', () => {
    const { getByText } = render(CharacterInfo, {
      props: {
        character: new Character(character)
      }
    })
    getByText('Go Back')
  })
})
