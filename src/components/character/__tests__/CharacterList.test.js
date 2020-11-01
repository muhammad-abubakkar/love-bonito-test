import Character from '@/models/character'
import { render } from '@testing-library/vue'
import { character } from '@/helpers/character'
import CharacterList from '@/components/character/CharacterList'

describe('Test Character List Component', () => {
  it('should display loading text', () => {
    const { getByText } = render(CharacterList, {
      props: {
        loading: true,
        characters: [new Character(character)]
      }
    })
    getByText('Loading Characters...')
  })
  it('should display no result text', () => {
    const { getByText } = render(CharacterList, {
      props: {
        loading: false,
        characters: []
      }
    })
    getByText('No Character Found!')
  })
  it('should display character card', () => {
    const { getByText } = render(CharacterList, {
      props: {
        loading: false,
        characters: [new Character(character)]
      }
    })
    getByText(character.name)
  })
})
