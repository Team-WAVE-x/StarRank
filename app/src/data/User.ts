class User {
    name: string
    stars: number
    followers: number

    constructor (name: string, stars: number, followers: number) {
        this.name = name
        this.stars = stars
        this.followers = followers
    }
}

export default User