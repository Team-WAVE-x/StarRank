/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import './css/App.css'
import './components/UserContent'
import UserContent from './components/UserContent'
import getUser from './data/GetUser'
import User from './data/User'

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">Team WAVE Member Star Ranking</h1>
            </header>
            <div className="users">
                <UserContent name="1-exon" stars={10} followers={100} avatarUrl={"https://avatars2.githubusercontent.com/u/56220973?s=460&u=f0786c8d37a31c92e7885e31ebfbc153c731271a&v=4"}/>
            </div>
        </div>
    )
}

export default App
