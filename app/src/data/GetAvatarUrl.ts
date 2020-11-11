export default async function getAvatarUrl(name: string) {
    const user = await fetch(`https://api.github.com/users/${name}`).then(resp => resp.json())
    return user.avatar_url
}