import React, { Component } from 'react'
import getUser from '../data/GetUser'

class UserContent extends Component {
    public render() {
        console.log(getUser('1-exon'))
        return (
            <div className="user">
                <img src="https://avatars3.githubusercontent.com/u/56220973?v=4" className="user-profile" />
                <h1 id="name" className="user-name">1-EXON</h1>
                <p id="stars" className="user-content">100</p>
                <p id="followers" className="user-content">100</p>
            </div>
        )
    }
}

export default UserContent