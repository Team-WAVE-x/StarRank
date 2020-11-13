import React from 'react'

type Props = {
    name: string,
    stars: number,
    followers: number,
    avatarUrl: string
}

function UserContent({ name, stars, followers, avatarUrl }: Props) {
    return (
        <div className="user">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={avatarUrl} className="user-profile" />
            <h1 id="name" className="user-name">{name}</h1>
            <p id="stars" className="user-content">Star: <b>{stars}</b></p>
            <p id="followers" className="user-content">Followers: <b>{followers}</b></p>
        </div>
    )
}

export default UserContent