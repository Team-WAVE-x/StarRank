/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react'
import './css/App.css'
import './components/UserContent'
import UserContent from './components/UserContent'
const member = require('./data/member.json')

function App() {
    
    return (
        <div className="App">
            <header>
                <h1 className="title">Team WAVE Member Star Ranking</h1>
            </header>
            <div className="users">
                <UserContent name={member[0].name} stars={member[0].stars} followers={member[0].followers}
                avatarUrl={member[0].avatarUrl}/>
                <UserContent name={member[0].name} stars={member[0].stars} followers={member[0].followers}
                avatarUrl={member[0].avatarUrl}/>
                <UserContent name={member[0].name} stars={member[0].stars} followers={member[0].followers}
                avatarUrl={member[0].avatarUrl}/>
            </div>
        </div>
    )
}

export default App
