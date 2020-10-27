import LocationPage from '@/pages/LocationPage'
import CharacterPage from "@/pages/CharacterPage";

export default [
    {path: '/', redirect: '/locations'},
    {path: '/locations', component: LocationPage},
    {path: '/characters/:id', component: CharacterPage},
]