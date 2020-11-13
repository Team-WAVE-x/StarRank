import React, { Component } from 'react'
import getUser from '../data/GetUser'

type Props = {
    name: string,
    stars: number,
    followers: number,
    avatarUrl: string
}

function UserContent({ name, stars, followers, avatarUrl }: Props) {
    return (
        <div className="user">
            <img src={avatarUrl} className="user-profile" />
            <h1 id="name" className="user-name">{name}</h1>
            <p id="stars" className="user-content">Star: <b>{stars}</b></p>
            <p id="followers" className="user-content">Followers: <b>{followers}</b></p>
        </div>
    )
}

export default UserContent