import getStars from './GetStars'
import getFollowers from './GetFollowers'
import getAvatarUrl from './GetAvatarUrl'
import User from './User'

export default async function getUser(name: string) {
    const stars = await getStars(name)
    const followers = await getFollowers(name)
    const avatarUrl = await getAvatarUrl(name)
    const user: User = new User(name, stars, followers, avatarUrl)
    return user
}