class User {
    name: string
    stars: number
    followers: number
    avatarUrl: string

    constructor (name: string, stars: number, followers: number, avatarUrl: string) {
        this.name = name
        this.stars = stars
        this.followers = followers
        this.avatarUrl = avatarUrl
    }
}

export default User