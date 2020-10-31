import LocationPage from '@/pages/LocationPage'
import CharacterPage from '@/pages/CharacterPage'

export default [
  { path: '/', component: LocationPage },
  { path: '/characters/:id', component: CharacterPage }
]
