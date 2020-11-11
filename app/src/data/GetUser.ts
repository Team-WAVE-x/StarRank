import GetStars from './GetStars'
import GetFollowers from './GetFollowers'
import User from './User'

export default async function getUser(name: string) {
    const stars = await GetStars(name)
    const followers = await GetFollowers(name)
    const user: User = new User(name, stars, followers)
    return user
}