import React, { Component } from 'react'

const member = require('../data/member.json')

type UserType = {
    name: string,
    stars: number,
    followers: number,
    avatarUrl: string
}

class UserContent extends Component<UserType> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div className="user">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src={this.props.avatarUrl} className="user-profile" />
                <h1 id="name" className="user-name">{this.props.name}</h1>
                <p id="stars" className="user-content">Star: <b>{this.props.stars}</b></p>
                <p id="followers" className="user-content">Followers: <b>{this.props.followers}</b></p>
            </div>
        )
    }
}
export default UserContent