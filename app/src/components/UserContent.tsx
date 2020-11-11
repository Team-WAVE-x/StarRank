import React, { Component } from 'react'

class UserContent extends Component {
    public render() {
        return (
            <div className="user">
                <img src="https://avatars2.githubusercontent.com/u/56220973?s=460&u=f0786c8d37a31c92e7885e31ebfbc153c731271a&v=4" className="user-profile" />
                <h1 id="name" className="user-name">1-EXON</h1>
                <p id="stars" className="user-content">100</p>
                <p id="followers" className="user-content">100</p>
            </div>
        )
    }
}

export default UserContent